'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = LoggleChalk;

var _loggle = require('loggle');

var _loggle2 = _interopRequireDefault(_loggle);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function getDate() {
    return new Date().toISOString();
}

var prefixes = {
    log: _chalk2['default'].styles.white.open + '  Log:' + _chalk2['default'].styles.white.close,
    error: _chalk2['default'].styles.red.open + 'Error:' + _chalk2['default'].styles.red.close,
    warn: _chalk2['default'].styles.yellow.open + ' Warn:' + _chalk2['default'].styles.yellow.close,
    info: _chalk2['default'].styles.green.open + ' Info:' + _chalk2['default'].styles.green.close,
    debug: _chalk2['default'].styles.cyan.open + 'Debug:' + _chalk2['default'].styles.cyan.close,
    silly: _chalk2['default'].styles.magenta.open + 'Silly:' + _chalk2['default'].styles.magenta.close
};

var ChalkInterface = (function () {
    function ChalkInterface() {
        _classCallCheck(this, ChalkInterface);
    }

    _createClass(ChalkInterface, [{
        key: 'error',
        value: function error() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return console.error.apply(console, [getDate() + ' ' + prefixes.error].concat(args));
        }
    }, {
        key: 'warn',
        value: function warn() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            return console.warn.apply(console, [getDate() + ' ' + prefixes.warn].concat(args));
        }
    }, {
        key: 'log',
        value: function log() {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            return console.log.apply(console, [getDate() + ' ' + prefixes.log].concat(args));
        }
    }, {
        key: 'info',
        value: function info() {
            for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
            }

            return console.info.apply(console, [getDate() + ' ' + prefixes.info].concat(args));
        }
    }, {
        key: 'debug',
        value: function debug() {
            for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                args[_key5] = arguments[_key5];
            }

            // note that nodejs does not have console.debug
            return console.log.apply(console, [getDate() + ' ' + prefixes.debug].concat(args));
        }
    }, {
        key: 'silly',
        value: function silly() {
            for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                args[_key6] = arguments[_key6];
            }

            return console.log.apply(console, [getDate() + ' ' + prefixes.silly].concat(args));
        }
    }]);

    return ChalkInterface;
})();

exports.ChalkInterface = ChalkInterface;
Object.defineProperty(exports, 'LEVELS', {
    enumerable: true,
    get: function get() {
        return _loggle.LEVELS;
    }
});
Object.defineProperty(exports, 'LogError', {
    enumerable: true,
    get: function get() {
        return _loggle.LogError;
    }
});

function LoggleChalk() {
    var level = arguments[0] === undefined ? _loggle.LEVELS.STANDARD : arguments[0];

    return new _loggle2['default'](new ChalkInterface(), level);
}