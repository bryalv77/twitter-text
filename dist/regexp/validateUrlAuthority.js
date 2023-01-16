"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regexSupplant = _interopRequireDefault(require("../lib/regexSupplant"));

var _validateUrlUserinfo = _interopRequireDefault(require("./validateUrlUserinfo"));

var _validateUrlHost = _interopRequireDefault(require("./validateUrlHost"));

var _validateUrlPort = _interopRequireDefault(require("./validateUrlPort"));

// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0
var validateUrlAuthority = (0, _regexSupplant["default"])( // $1 userinfo
'(?:(#{validateUrlUserinfo})@)?' + // $2 host
'(#{validateUrlHost})' + // $3 port
'(?::(#{validateUrlPort}))?', {
  validateUrlUserinfo: _validateUrlUserinfo["default"],
  validateUrlHost: _validateUrlHost["default"],
  validateUrlPort: _validateUrlPort["default"]
}, 'i');
var _default = validateUrlAuthority;
exports["default"] = _default;
module.exports = exports.default;