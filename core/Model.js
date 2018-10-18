'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('/Users/jamesroncesvalles/Desktop/raffle/raffle/node_modules/babel-polyfill');

var _promise = require('/Users/jamesroncesvalles/Desktop/raffle/raffle/node_modules/mysql2/promise');

var _promise2 = _interopRequireDefault(_promise);

var _lodash = require('/Users/jamesroncesvalles/Desktop/raffle/raffle/node_modules/lodash');

var _squel = require('/Users/jamesroncesvalles/Desktop/raffle/raffle/node_modules/squel');

var _squel2 = _interopRequireDefault(_squel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var conn = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	connectionLimit: 1000,
	queueLimit: -1, acquireTimeout: 2
};

var Model = function () {
	function Model(table) {
		_classCallCheck(this, Model);

		this.connection = _promise2.default.createConnection(conn);
		this.table = table;
	}

	_createClass(Model, [{
		key: 'select',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
				var where = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
				var parameters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var order_by = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								return _context.abrupt('return', this.execute('\n\t\t\tSELECT ' + fields + ' from ' + this.table + ' where productId = ? order by ' + id + ' desc limit 5\n\t\t\t', [productId]));

							case 1:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function select() {
				return _ref.apply(this, arguments);
			}

			return select;
		}()
	}, {
		key: 'execute',
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(query) {
				var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return this.connection.query(query, parameters);

							case 2:
								return _context2.abrupt('return', _context2.sent);

							case 3:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function execute(_x5) {
				return _ref2.apply(this, arguments);
			}

			return execute;
		}()
	}, {
		key: 'update',
		value: function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(where, setFields) {
				var stmt;
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								stmt = _squel2.default.update().table(this.table).setFields(setFields);


								(0, _lodash.each)(where, function (val) {
									stmt.where(val);
								});

								stmt = stmt.toString();

								_context3.next = 5;
								return this.execute(stmt);

							case 5:
								return _context3.abrupt('return', _context3.sent);

							case 6:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function update(_x7, _x8) {
				return _ref3.apply(this, arguments);
			}

			return update;
		}()
	}]);

	return Model;
}();

module.exports = Model;