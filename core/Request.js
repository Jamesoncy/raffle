'use strict';

var _util = require('/Users/jamesroncesvalles/Desktop/raffle/raffle/node_modules/util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = function (validator) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, resp, next) {
      var errors;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ctx.checkBody(validator);
              _context.next = 3;
              return ctx.validationErrors();

            case 3:
              errors = _context.sent;

              if (!errors) {
                _context.next = 9;
                break;
              }

              ctx.body = _util2.default.inspect(errors) + ' ';
              ctx.status = 400;
              _context.next = 11;
              break;

            case 9:
              _context.next = 11;
              return next();

            case 11:
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
};