/* eslint valid-jsdoc: "off" */

"use strict";

const appInfo = require("../package.json");

// use for cookie sign key, should change to your own and keep security
exports.keys = appInfo.name + "_1576561063616_3357";

exports.middleware = [];

exports.view = {
  defaultViewEngine: "nunjucks",
  defaultExtension: ".tpl"
};
