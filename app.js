'use strict';

require('C:\\Users\\jamesroncy\\raffle\\node_modules\\babel-polyfill');

require('C:\\Users\\jamesroncy\\raffle\\node_modules\\babel-core\\register');

var _Controller = require('C:\\Users\\jamesroncy\\raffle\\core\\Controller.js');

var _Controller2 = _interopRequireDefault(_Controller);

var _koa = require('C:\\Users\\jamesroncy\\raffle\\node_modules\\koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaJson = require('C:\\Users\\jamesroncy\\raffle\\node_modules\\koa-json');

var _koaJson2 = _interopRequireDefault(_koaJson);

var _koaRouter = require('C:\\Users\\jamesroncy\\raffle\\node_modules\\koa-router2');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaBetterBody = require('C:\\Users\\jamesroncy\\raffle\\node_modules\\koa-better-body');

var _koaBetterBody2 = _interopRequireDefault(_koaBetterBody);

var _koaBodyParser = require('C:\\Users\\jamesroncy\\raffle\\node_modules\\koa-body-parser');

var _koaBodyParser2 = _interopRequireDefault(_koaBodyParser);

var _routes = require('C:\\Users\\jamesroncy\\raffle\\core\\config\\routes.js');

var _routes2 = _interopRequireDefault(_routes);

var _require = require('C:\\Users\\jamesroncy\\raffle\\node_modules\\require.all');

var _require2 = _interopRequireDefault(_require);

var _underscore = require('C:\\Users\\jamesroncy\\raffle\\node_modules\\underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _policies = require('C:\\Users\\jamesroncy\\raffle\\core\\Config\\policies');

var _policies2 = _interopRequireDefault(_policies);

var _composeMiddleware = require('C:\\Users\\jamesroncy\\raffle\\node_modules\\compose-middleware');

var _koaConvert = require('C:\\Users\\jamesroncy\\raffle\\node_modules\\koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _koaViews = require('C:\\Users\\jamesroncy\\raffle\\node_modules\\koa-views');

var _koaViews2 = _interopRequireDefault(_koaViews);

var _koaCookie = require('C:\\Users\\jamesroncy\\raffle\\node_modules\\koa-cookie');

var _koaCookie2 = _interopRequireDefault(_koaCookie);

var _koaAsyncValidator = require('C:\\Users\\jamesroncy\\raffle\\node_modules\\koa-async-validator');

var _koaAsyncValidator2 = _interopRequireDefault(_koaAsyncValidator);

var _Request = require('C:\\Users\\jamesroncy\\raffle\\node_modules\\Request');

var _Request2 = _interopRequireDefault(_Request);

var _koa2StaticFiles = require('C:\\Users\\jamesroncy\\raffle\\node_modules\\koa2-static-files');

var _koa2StaticFiles2 = _interopRequireDefault(_koa2StaticFiles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default(),
    router = new _koaRouter2.default(),
    body = new _koaBetterBody2.default(),
    dirName = __dirname,
    controllers = (0, _require2.default)({
		dir: './core/Controller',
		match: /Controller\.js$/i, //only files that end with 'controller.js' 
		recursive: false,
		map: function map(name, path, isFile) {
				return _require2.default.map(name, path, isFile).replace(/Controller$/i, '');
		}
}),
    policies = (0, _require2.default)({
		dir: './core/Policies',
		match: /Policy\.js$/i
}),
    request = (0, _require2.default)({
		dir: './core/Request',
		match: /Request\.js$/i
}),
    options = {
		errorFormatter: function errorFormatter(param, msg, value) {
				var namespace = param.split('.'),
				    root = namespace.shift(),
				    formParam = root;

				while (namespace.length) {
						formParam += '[' + namespace.shift() + ']';
				}
				return {
						param: formParam,
						msg: msg,
						value: value
				};
		}
};

app.use((0, _koaViews2.default)(__dirname + '/public/views', {
		map: {
				html: 'ejs'
		}
}));

router.use((0, _koaCookie2.default)());

_underscore2.default.each(_routes2.default["routes"], function (value, index) {

		var getVerb = index.split(" "),
		    path = value.split("."),
		    middleware = [];

		_underscore2.default.each(_policies2.default["policies"], function (val, ind) {
				if (path[0] == ind && path[1] in val) {
						middleware = val[path[1]];
						return false;
				}
		});

		_underscore2.default.each(middleware, function (val, ind) {
				if (val.indexOf("Policy") > -1) middleware[ind] = policies[val];else if (val.indexOf("Request") > -1) {
						console.log(new _Request2.default(request[val]));
						middleware[ind] = new _Request2.default(request[val]);
				}
		});

		middleware.push(controllers[path[0]][path[1]]);

		if (getVerb[0] == "GET") router.get(getVerb[1], (0, _composeMiddleware.compose)(middleware));else if (getVerb[0] == "POST") router.post(getVerb[1], (0, _composeMiddleware.compose)(middleware));
});

app.use(_koa2StaticFiles2.default.static(dirName + '/public')).use((0, _koaViews2.default)(dirName + '/public/views', {
		map: {
				html: 'ejs'
		}
})).use((0, _koaJson2.default)()).use((0, _koaBodyParser2.default)()).use((0, _koaAsyncValidator2.default)(options)).use(router.routes());

app.listen(4000);
