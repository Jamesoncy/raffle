'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('C:\\Users\\jamesroncy\\koa_test\\node_modules\\babel-polyfill');

var _promise = require('C:\\Users\\jamesroncy\\koa_test\\node_modules\\mysql2\\promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var conn = {
	host: "localhost",
	user: "root",
	database: "node"
};

var Model = function () {
	function Model() {
		_classCallCheck(this, Model);
	}

	_createClass(Model, [{
		key: 'query',
		value: function () {
			var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_query) {
				var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

				var connection, _ref2, _ref3, rows, fields;

				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _promise2.default.createConnection(conn);

							case 2:
								connection = _context.sent;
								_context.next = 5;
								return connection.execute(_query, parameters);

							case 5:
								_ref2 = _context.sent;
								_ref3 = _slicedToArray(_ref2, 2);
								rows = _ref3[0];
								fields = _ref3[1];
								_context.next = 11;
								return rows;

							case 11:
								return _context.abrupt('return', _context.sent);

							case 12:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function query(_x) {
				return _ref.apply(this, arguments);
			}

			return query;
		}()
	}]);

	return Model;
}();

module.exports = Model;