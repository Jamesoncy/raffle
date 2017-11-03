'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('C:\\Users\\jamesroncy\\raffle\\node_modules\\babel-polyfill');

var _promise = require('C:\\Users\\jamesroncy\\raffle\\node_modules\\mysql2\\promise');

var _promise2 = _interopRequireDefault(_promise);

var _redis = require('C:\\Users\\jamesroncy\\raffle\\node_modules\\redis');

var _redis2 = _interopRequireDefault(_redis);

var _classAutobind = require('C:\\Users\\jamesroncy\\raffle\\node_modules\\class-autobind');

var _classAutobind2 = _interopRequireDefault(_classAutobind);

var _bluebird = require('C:\\Users\\jamesroncy\\raffle\\node_modules\\bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _underscore = require('C:\\Users\\jamesroncy\\raffle\\node_modules\\underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _squel = require('C:\\Users\\jamesroncy\\raffle\\node_modules\\squel');

var _squel2 = _interopRequireDefault(_squel);

var _mssql = require('C:\\Users\\jamesroncy\\raffle\\node_modules\\mssql');

var _mssql2 = _interopRequireDefault(_mssql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = {
	user: 'markuser',
	password: 'tseug',
	server: '192.168.0.148',
	database: '_srspos',
	pool: {
		max: 10,
		min: 0,
		idleTimeoutMillis: 30000
	}
};

var Model = function () {
	function Model() {
		_classCallCheck(this, Model);
	}

	_createClass(Model, [{
		key: 'select',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(table) {
				var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "*";
				var parameters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var order_by = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
				var request, stmt, array, result;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _mssql2.default.close();

							case 2:
								_context.next = 4;
								return _mssql2.default.connect(config);

							case 4:
								request = new _mssql2.default.Request();
								_context.next = 7;
								return _squel2.default.select().from(table);

							case 7:
								stmt = _context.sent;

								if (!(fields != null)) {
									_context.next = 12;
									break;
								}

								array = fields.split(",");
								_context.next = 12;
								return _underscore2.default.each(array, function (val) {
									stmt.field(val);
								});

							case 12:
								if (!(parameters != null)) {
									_context.next = 15;
									break;
								}

								_context.next = 15;
								return _underscore2.default.each(parameters, function (val) {
									stmt.where(val);
								});

							case 15:
								if (_underscore2.default.isEmpty(order_by)) {
									_context.next = 18;
									break;
								}

								_context.next = 18;
								return _underscore2.default.each(order_by, function (val, index) {
									stmt.order(index, val);
								});

							case 18:

								stmt = stmt.toString();

								_context.next = 21;
								return request.query(stmt);

							case 21:
								result = _context.sent;
								_context.next = 24;
								return _mssql2.default.close();

							case 24:
								return _context.abrupt('return', result.recordset);

							case 25:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function select(_x) {
				return _ref.apply(this, arguments);
			}

			return select;
		}()
	}, {
		key: 'update',
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(table, where, setFields) {
				var request, stmt, result;
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return _mssql2.default.close();

							case 2:
								_context2.next = 4;
								return _mssql2.default.connect(config);

							case 4:
								request = new _mssql2.default.Request(), stmt = _squel2.default.update().table(table).setFields(setFields);
								_context2.next = 7;
								return _underscore2.default.each(where, function (val) {
									stmt.where(val);
								});

							case 7:

								stmt = stmt.toString();
								_context2.next = 10;
								return request.query(stmt);

							case 10:
								result = _context2.sent;
								_context2.next = 13;
								return _mssql2.default.close();

							case 13:
								return _context2.abrupt('return', result);

							case 14:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function update(_x5, _x6, _x7) {
				return _ref2.apply(this, arguments);
			}

			return update;
		}()
	}, {
		key: 'selectRow',
		value: function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(table) {
				var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "*";
				var parameters = arguments[2];
				var res;
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_context3.next = 2;
								return this.select(table, parameters);

							case 2:
								res = _context3.sent;
								return _context3.abrupt('return', _underscore2.default.first(res));

							case 4:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function selectRow(_x8) {
				return _ref3.apply(this, arguments);
			}

			return selectRow;
		}()
	}]);

	return Model;
}();

module.exports = Model;