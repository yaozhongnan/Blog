"use strict";

const Controller = require("egg").Controller;
const { readListRule } = require("../rule/article");

class ArticleController extends Controller {
  async readList() {
    const { ctx, service } = this;
    const { page, limit, sort } = ctx.query;
    console.log(page, typeof page);
    console.log(limit, typeof limit);

    try {
      ctx.validate(readListRule);
    } catch (err) {
      ctx.logger.error(err.errors);
      ctx.body = {
        success: false,
        message: "params error, please check your params",
        error: err
      };
      return;
    }

    const data = await service.article.readList(
      Number(page),
      Number(limit),
      sort
    );

    ctx.body = {
      success: true,
      data: {
        list: data
      }
    };
  }
}

module.exports = ArticleController;
