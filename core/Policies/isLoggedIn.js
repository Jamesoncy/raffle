'use strict';
'use-strict';

var _UserModel = require('C:\\Users\\jamesroncy\\koa_test\\core\\Model\\UserModel');

var _UserModel2 = _interopRequireDefault(_UserModel);

var _underscore = require('C:\\Users\\jamesroncy\\koa_test\\node_modules\\underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, resp, next) {
    var auth;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            auth = ctx.cookies.get("auth");

            if (auth) {
              if (!_UserModel2.default.checkTokenExist(auth, true)) ctx.body = {
                status: 400,
                message: "You Token Not Exist"
              };
            } else ctx.body = {
              status: 400,
              message: "You Token Not Exist"
            };
            _context.next = 4;
            return next();

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();