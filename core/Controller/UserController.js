'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Controller2 = require('C:\\Users\\jamesroncy\\koa_test\\core\\Controller.js');

var _Controller3 = _interopRequireDefault(_Controller2);

var _UserModel = require('C:\\Users\\jamesroncy\\koa_test\\core\\Model\\UserModel');

var _UserModel2 = _interopRequireDefault(_UserModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserController = function (_Controller) {
    _inherits(UserController, _Controller);

    function UserController() {
        _classCallCheck(this, UserController);

        return _possibleConstructorReturn(this, (UserController.__proto__ || Object.getPrototypeOf(UserController)).call(this));
    }

    _createClass(UserController, [{
        key: 'checkLogin',
        value: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, resp) {
                var _ctx$request$body, username, password;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _ctx$request$body = ctx.request.body, username = _ctx$request$body.username, password = _ctx$request$body.password;
                                _context.next = 3;
                                return _UserModel2.default.checkCredentials(username, password);

                            case 3:
                                ctx.body = username;
                                console.log(username);
                                console.log(password);
                                //await ctx.body = UserModel.che

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function checkLogin(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return checkLogin;
        }()
    }]);

    return UserController;
}(_Controller3.default);

module.exports = new UserController();