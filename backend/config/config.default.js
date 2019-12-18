/* eslint valid-jsdoc: "off" */

"use strict";

const appInfo = require("../package.json");

// use for cookie sign key, should change to your own and keep security
exports.keys = appInfo.name + "_1576561063616_3357";

exports.middleware = [];

exports.sequelize = {
  dialect: "mysql",
  database: "blog_development",
  host: "127.0.0.1",
  port: "3306",
  username: "root",
  password: "123456",
  timezone: "Asia/Shanghai"
};
