'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('/Users/jamesroncesvalles/Desktop/raffle/raffle/node_modules/babel-polyfill');

var _Model2 = require('/Users/jamesroncesvalles/Desktop/raffle/raffle/core/Model.js');

var _Model3 = _interopRequireDefault(_Model2);

var _dateAndTime = require('/Users/jamesroncesvalles/Desktop/raffle/raffle/node_modules/date-and-time');

var _dateAndTime2 = _interopRequireDefault(_dateAndTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ACTIVE = 0;
var NOT_ACTIVE = 1;

var RaffleModel = function (_Model) {
	_inherits(RaffleModel, _Model);

	function RaffleModel() {
		_classCallCheck(this, RaffleModel);

		return _possibleConstructorReturn(this, (RaffleModel.__proto__ || Object.getPrototypeOf(RaffleModel)).call(this, "raffle"));
	}

	_createClass(RaffleModel, [{
		key: 'getRaffleCustomer',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return this.select("customercode, description", ['status = ?'], [ACTIVE]);

							case 2:
								return _context.abrupt('return', _context.sent);

							case 3:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getRaffleCustomer() {
				return _ref.apply(this, arguments);
			}

			return getRaffleCustomer;
		}()
	}, {
		key: 'getRaffleWinners',
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
				var updated;
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								updated = false;
								_context2.next = 3;
								return this.select("customercode, description, prize, date_updated", ['status = ?'], [NOT_ACTIVE], { updated: updated });

							case 3:
								return _context2.abrupt('return', _context2.sent);

							case 4:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function getRaffleWinners() {
				return _ref2.apply(this, arguments);
			}

			return getRaffleWinners;
		}()
	}, {
		key: 'updateCustomer',
		value: function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(code, prize) {
				var date_updated, fields;
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								date_updated = _dateAndTime2.default.format(new Date(), 'YYYY-MM-DD HH:mm:ss'), fields = {
									prize: prize,
									status: 1,
									date_updated: date_updated
								};
								_context3.next = 3;
								return this.update(['customercode = ?'], fields, [code]);

							case 3:
								return _context3.abrupt('return', _context3.sent);

							case 4:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function updateCustomer(_x, _x2) {
				return _ref3.apply(this, arguments);
			}

			return updateCustomer;
		}()
	}, {
		key: 'removeWinner',
		value: function () {
			var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(code) {
				return regeneratorRuntime.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								_context4.next = 2;
								return this.update(['customercode = ?'], { status: NOT_ACTIVE, prize: '' }, [code]);

							case 2:
								return _context4.abrupt('return', _context4.sent);

							case 3:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function removeWinner(_x3) {
				return _ref4.apply(this, arguments);
			}

			return removeWinner;
		}()
	}]);

	return RaffleModel;
}(_Model3.default);

module.exports = new RaffleModel();