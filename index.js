import 'babel-polyfill';
import 'babel-core/register';
import MainController from 'Controller.js'
import Koa from 'koa';
import json from 'koa-json';
import router from 'koa-router2';
import kbd from 'koa-better-body';
import bodyParser from 'koa-body-parser';
import routeFiles from 'config/routes.js';
import requireAll from 'require.all';
import _ from 'underscore';
import policy from 'Config/policies';
import {compose} from 'compose-middleware';
import convert from 'koa-convert';
import views from 'koa-views';
import cookie from 'koa-cookie';
//var compose = require('compose-middleware').compose;
let app = new Koa(),
  __ = new router(),
  body = new kbd(),
  controllers = requireAll({
  		dir: './core/Controller',
    	match: /Controller\.js$/i, //only files that end with 'controller.js' 
    	recursive: false,
 		map: (name, path, isFile) => requireAll.map(name, path, isFile).replace(/Controller$/i, '')
  }),
  
  policies = requireAll({
  		dir: './core/Policies'
  });

	app.use(views(__dirname + '/public/views', {
	  map: {
	    html: 'ejs'
	  }
	}));

	__.use(cookie());

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
		  		middleware[ind] = policies[val];
		  });

		  middleware.push(controllers[path[0]][path[1]]);
		 
		  if(getVerb[0] == "GET") __.get(getVerb[1], compose(middleware) );
		  else if(getVerb[0] == "POST") __.post(getVerb[1], compose(middleware) );

	});

app 
	.use(json())
	.use(bodyParser())
	.use(__.routes());

app.listen(3000);