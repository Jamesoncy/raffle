'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Controller2 = require('/Users/jamesroncesvalles/Desktop/raffle/raffle/core/Controller.js');

var _Controller3 = _interopRequireDefault(_Controller2);

var _RaffleModel = require('/Users/jamesroncesvalles/Desktop/raffle/raffle/core/Model/RaffleModel');

var _RaffleModel2 = _interopRequireDefault(_RaffleModel);

var _underscore = require('/Users/jamesroncesvalles/Desktop/raffle/raffle/node_modules/underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _shuffleArray = require('/Users/jamesroncesvalles/Desktop/raffle/raffle/node_modules/shuffle-array');

var _shuffleArray2 = _interopRequireDefault(_shuffleArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RaffleController = function (_Controller) {
    _inherits(RaffleController, _Controller);

    function RaffleController() {
        _classCallCheck(this, RaffleController);

        return _possibleConstructorReturn(this, (RaffleController.__proto__ || Object.getPrototypeOf(RaffleController)).call(this));
    }

    _createClass(RaffleController, [{
        key: 'login',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, resp) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return ctx.render('login');

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function login(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return login;
        }()
    }, {
        key: 'showCustomer',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx) {
                var collection;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _RaffleModel2.default.getRaffleCustomer();

                            case 2:
                                collection = _context2.sent;
                                _context2.next = 5;
                                return (0, _shuffleArray2.default)(collection);

                            case 5:
                                ctx.body = _context2.sent;

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function showCustomer(_x3) {
                return _ref2.apply(this, arguments);
            }

            return showCustomer;
        }()
    }, {
        key: 'showWinners',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(ctx) {
                var data, lists;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _RaffleModel2.default.getRaffleWinners();

                            case 2:
                                data = _context3.sent;
                                lists = _underscore2.default.groupBy(data, function (element, index) {
                                    return Math.floor(index / 4);
                                });

                                lists = _underscore2.default.toArray(lists);
                                ctx.body = lists;

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function showWinners(_x4) {
                return _ref3.apply(this, arguments);
            }

            return showWinners;
        }()
    }, {
        key: 'showRaffle',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(ctx) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return ctx.render('raffle');

                            case 2:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function showRaffle(_x5) {
                return _ref4.apply(this, arguments);
            }

            return showRaffle;
        }()
    }, {
        key: 'updateCustomer',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(ctx) {
                var _ctx$request$body, customerCode, prize;

                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _ctx$request$body = ctx.request.body, customerCode = _ctx$request$body.customerCode, prize = _ctx$request$body.prize;
                                _context5.next = 3;
                                return _RaffleModel2.default.updateCustomer(customerCode, prize.toUpperCase());

                            case 3:
                                ctx.body = _context5.sent;

                            case 4:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function updateCustomer(_x6) {
                return _ref5.apply(this, arguments);
            }

            return updateCustomer;
        }()
    }, {
        key: 'removeWinner',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(ctx) {
                var customerCode;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                customerCode = ctx.request.body.customerCode;
                                _context6.next = 3;
                                return _RaffleModel2.default.removeWinner(customerCode);

                            case 3:
                                ctx.body = _context6.sent;

                            case 4:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function removeWinner(_x7) {
                return _ref6.apply(this, arguments);
            }

            return removeWinner;
        }()
    }]);

    return RaffleController;
}(_Controller3.default);

module.exports = new RaffleController();