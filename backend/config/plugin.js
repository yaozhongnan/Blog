"use strict";

exports.sequelize = {
  enable: true,
  package: "egg-sequelize"
};

exports.nunjucks = {
  enable: true,
  package: "egg-view-nunjucks"
};

// 注意：validate 只可以校验 ctx.body 的参数，ctx.query 参数无法校验
exports.validate = {
  enable: true,
  package: "egg-validate"
};
