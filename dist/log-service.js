'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _distLoggleJs = require('../../dist/loggle.js');

var _distLoggleJs2 = _interopRequireDefault(_distLoggleJs);

function getTime() {
    return new Date().getTime();
}

var Logger = (function () {
    function Logger() {
        _classCallCheck(this, Logger);
    }

    _createClass(Logger, [{
        key: 'log',
        value: function log() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return console.log.apply(console, [getTime() + '   Log: '].concat(args));
        }
    }, {
        key: 'error',
        value: function error() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            return console.error.apply(console, [getTime() + ' Error: '].concat(args));
        }
    }, {
        key: 'info',
        value: function info() {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            return console.info.apply(console, [getTime() + '  Info: '].concat(args));
        }
    }, {
        key: 'debug',
        value: function debug() {
            for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
            }

            // note that nodejs does not have console.debug
            return console.log.apply(console, [getTime() + ' Debug: '].concat(args));
        }
    }, {
        key: 'silly',
        value: function silly() {
            for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                args[_key5] = arguments[_key5];
            }

            return console.log.apply(console, [getTime() + ' Silly: '].concat(args));
        }
    }, {
        key: 'warn',
        value: function warn() {
            for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                args[_key6] = arguments[_key6];
            }

            return console.warn.apply(console, [getTime() + '  Warn: '].concat(args));
        }
    }]);

    return Logger;
})();

var log = new _distLoggleJs2['default'](new Logger(), _distLoggleJs.LEVELS.SILLY);
exports['default'] = log;
module.exports = exports['default'];