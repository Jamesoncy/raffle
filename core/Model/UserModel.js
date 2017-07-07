'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Model2 = require('C:\\Users\\jamesroncy\\koa_test\\core\\Model.js');

var _Model3 = _interopRequireDefault(_Model2);

var _v = require('C:\\Users\\jamesroncy\\koa_test\\node_modules\\uuid\\v1');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserModel = function (_Model) {
	_inherits(UserModel, _Model);

	function UserModel() {
		_classCallCheck(this, UserModel);

		var _this = _possibleConstructorReturn(this, (UserModel.__proto__ || Object.getPrototypeOf(UserModel)).call(this));

		_this.table = "users";
		return _this;
	}

	_createClass(UserModel, [{
		key: 'checkCredentials',
		value: function () {
			var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(username, password) {
				var generateToken = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
				var userCheck;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return this.query("SELECT * from users where username = ? and password = ?", [username, password]);

							case 2:
								userCheck = _context.sent;

								console.log(userCheck);

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function checkCredentials(_x, _x2) {
				return _ref.apply(this, arguments);
			}

			return checkCredentials;
		}()
	}]);

	return UserModel;
}(_Model3.default);

module.exports = new UserModel();