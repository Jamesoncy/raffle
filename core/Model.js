'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

		this.table = table;
	}

	_createClass(Model, [{
		key: 'select',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
				var whereParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
				var parameters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var order_by = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
				var where, order;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								where = '';
								order = '';


								if (whereParam.length > 0 && parameters.length > 0) {
									where = ' WHERE ' + whereParam.join(' AND ');
								}

								if (order_by.length > 0) {
									order = order_by.join(', ');
								}

								return _context.abrupt('return', this.execute('\n\t\t\tSELECT ' + fields + ' from ' + this.table + ' ' + where + ' ' + order + '\n\t\t\t', parameters));

							case 5:
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

				var connection, _ref3, _ref4, rows;

				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.prev = 0;
								_context2.next = 3;
								return _promise2.default.createConnection(conn);

							case 3:
								connection = _context2.sent;
								_context2.next = 6;
								return connection.execute(query, parameters);

							case 6:
								_ref3 = _context2.sent;
								_ref4 = _slicedToArray(_ref3, 1);
								rows = _ref4[0];

								connection.destroy();
								_context2.next = 12;
								return rows;

							case 12:
								return _context2.abrupt('return', _context2.sent);

							case 15:
								_context2.prev = 15;
								_context2.t0 = _context2['catch'](0);

								console.log(_context2.t0);
								return _context2.abrupt('return', []);

							case 19:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this, [[0, 15]]);
			}));

			function execute(_x5) {
				return _ref2.apply(this, arguments);
			}

			return execute;
		}()
	}, {
		key: 'update',
		value: function () {
			var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(where, setFields) {
				var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var stmt;
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								stmt = _squel2.default.update().table(this.table).setFields(setFields);


								(0, _lodash.each)(where, function (val, index) {
									stmt.where(val, params[index]);
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
				return _ref5.apply(this, arguments);
			}

			return update;
		}()
	}]);

	return Model;
}();

module.exports = Model;