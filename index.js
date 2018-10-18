import 'babel-polyfill';
import 'babel-core/register';
import Koa from 'koa';
import json from 'koa-json';
import koa_router from 'koa-router2';
import kbd from 'koa-better-body';
import bodyParser from 'koa-body-parser';
import routeFiles from 'config/routes.js';
import requireAll from 'require.all';
import _ from 'underscore';
require('dotenv').load();
import policy from 'Config/policies';
import {compose} from 'compose-middleware';
import convert from 'koa-convert';
import views from 'koa-views';
import cookie from 'koa-cookie';
import validate from 'koa-async-validator';
import validateRequest from 'Request';
import serve from 'koa2-static-files';

let app = new Koa(),
  router = new koa_router(),
  body = new kbd(),
  dirName = __dirname,
  controllers = requireAll({
  		dir: './core/Controller',
    	match: /Controller\.js$/i, //only files that end with 'controller.js' 
    	recursive: false,
 		map: (name, path, isFile) => requireAll.map(name, path, isFile).replace(/Controller$/i, '')
  }),
  
  policies = requireAll({
  		dir: './core/Policies',
  		match: /Policy\.js$/i
  }),
  request = requireAll({
  		dir: './core/Request',
  		match: /Request\.js$/i
  }),
  options = {
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
};

	app.use(views(__dirname + '/public/views', {
	  map: {
	    html: 'ejs'
	  }
	}));

	router.use(cookie());

	_.each(routeFiles["routes"], function(value, index){

		let getVerb = index.split(" "),
		  path = value.split("."), 
		  middleware = [];

		  _.each(policy["policies"], function(val, ind){
		  		if(path[0] == ind && path[1] in val) { 
		  			middleware = val[path[1]];
		  			return false;
		  		}
		  });

	   	  _.each(middleware, function(val, ind){
	   	    if(val.indexOf("Policy") > -1 ) middleware[ind] = policies[val];
	   	    else if (val.indexOf("Request") > -1 ) {
	   	    	console.log(new validateRequest(request[val]))
	   	    	middleware[ind] = new validateRequest(request[val]); 
	   	    }
	   	  });

		  middleware.push(controllers[path[0]][path[1]]);
		 
		  if(getVerb[0] == "GET") router.get(getVerb[1], compose(middleware) );
		  else if(getVerb[0] == "POST") router.post(getVerb[1], compose(middleware) );

	});

app 
  .use(serve.static(dirName + '/public'))
	.use(views(dirName + '/public/views', {
	  map: {
	    html: 'ejs'
	  }
	}))
	.use(json())
	.use(bodyParser())
	.use(validate(options))
	.use(router.routes());

app.listen(4000);