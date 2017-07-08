'use strict';

require('C:\\Users\\jamesroncy\\koa_test\\node_modules\\babel-polyfill');

var _classAutobind = require('C:\\Users\\jamesroncy\\koa_test\\node_modules\\class-autobind');

var _classAutobind2 = _interopRequireDefault(_classAutobind);

var _UserModel = require('C:\\Users\\jamesroncy\\koa_test\\core\\Model\\UserModel');

var _UserModel2 = _interopRequireDefault(_UserModel);

var _redis = require('C:\\Users\\jamesroncy\\koa_test\\node_modules\\redis');

var _redis2 = _interopRequireDefault(_redis);

var _bluebird = require('C:\\Users\\jamesroncy\\koa_test\\node_modules\\bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_bluebird2.default.promisifyAll(_redis2.default.RedisClient.prototype);
_bluebird2.default.promisifyAll(_redis2.default.Multi.prototype);

var Controller = function Controller() {
	_classCallCheck(this, Controller);

	this.client = _redis2.default.createClient();
	(0, _classAutobind2.default)(this);
};

module.exports = Controller;