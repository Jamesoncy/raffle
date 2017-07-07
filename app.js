'use strict';

require('C:\\Users\\jamesroncy\\koa_test\\node_modules\\babel-polyfill');

require('C:\\Users\\jamesroncy\\koa_test\\node_modules\\babel-core\\register');

var _Controller = require('C:\\Users\\jamesroncy\\koa_test\\core\\Controller.js');

var _Controller2 = _interopRequireDefault(_Controller);

var _koa = require('C:\\Users\\jamesroncy\\koa_test\\node_modules\\koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaJson = require('C:\\Users\\jamesroncy\\koa_test\\node_modules\\koa-json');

var _koaJson2 = _interopRequireDefault(_koaJson);

var _koaRouter = require('C:\\Users\\jamesroncy\\koa_test\\node_modules\\koa-router2');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaBetterBody = require('C:\\Users\\jamesroncy\\koa_test\\node_modules\\koa-better-body');

var _koaBetterBody2 = _interopRequireDefault(_koaBetterBody);

var _koaBodyParser = require('C:\\Users\\jamesroncy\\koa_test\\node_modules\\koa-body-parser');

var _koaBodyParser2 = _interopRequireDefault(_koaBodyParser);

var _routes = require('C:\\Users\\jamesroncy\\koa_test\\core\\config\\routes.js');

var _routes2 = _interopRequireDefault(_routes);

var _require = require('C:\\Users\\jamesroncy\\koa_test\\node_modules\\require.all');

var _require2 = _interopRequireDefault(_require);

var _underscore = require('C:\\Users\\jamesroncy\\koa_test\\node_modules\\underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _policies = require('C:\\Users\\jamesroncy\\koa_test\\core\\Config\\policies');

var _policies2 = _interopRequireDefault(_policies);

var _composeMiddleware = require('C:\\Users\\jamesroncy\\koa_test\\node_modules\\compose-middleware');

var _koaConvert = require('C:\\Users\\jamesroncy\\koa_test\\node_modules\\koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _koaViews = require('C:\\Users\\jamesroncy\\koa_test\\node_modules\\koa-views');

var _koaViews2 = _interopRequireDefault(_koaViews);

var _koaCookie = require('C:\\Users\\jamesroncy\\koa_test\\node_modules\\koa-cookie');

var _koaCookie2 = _interopRequireDefault(_koaCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//var compose = require('compose-middleware').compose;
var app = new _koa2.default(),
    __ = new _koaRouter2.default(),
    body = new _koaBetterBody2.default(),
    controllers = (0, _require2.default)({
	dir: './core/Controller',
	match: /Controller\.js$/i, //only files that end with 'controller.js' 
	recursive: false,
	map: function map(name, path, isFile) {
		return _require2.default.map(name, path, isFile).replace(/Controller$/i, '');
	}
}),
    policies = (0, _require2.default)({
	dir: './core/Policies'
});

app.use((0, _koaViews2.default)(__dirname + '/public/views', {
	map: {
		html: 'ejs'
	}
}));

__.use((0, _koaCookie2.default)());

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
		middleware[ind] = policies[val];
	});

	middleware.push(controllers[path[0]][path[1]]);

	if (getVerb[0] == "GET") __.get(getVerb[1], (0, _composeMiddleware.compose)(middleware));else if (getVerb[0] == "POST") __.post(getVerb[1], (0, _composeMiddleware.compose)(middleware));
});

app.use((0, _koaJson2.default)()).use((0, _koaBodyParser2.default)()).use(__.routes());

app.listen(3000);
