"use strict";

const Controller = require("egg").Controller;
const { createRule } = require("../rule/article");

class ArticleController extends Controller {
  async read() {
    const { ctx, service } = this;
    const { article_id } = ctx.query;

    if (!article_id) {
      ctx.body = {
        success: false,
        message: "missing article id"
      };
      return;
    }

    const data = await service.article.read(article_id);

    ctx.body = {
      success: true,
      data
    };
  }

  async readList() {
    const { ctx, service } = this;
    const { page, limit, sort } = ctx.query;

    const data = await service.article.readList(page, limit, sort);

    ctx.body = {
      success: true,
      data: {
        list: data
      }
    };
  }

  async create() {
    const { ctx, service } = this;

    try {
      ctx.validate(createRule);
    } catch (err) {
      ctx.logger.error(err.errors);
      ctx.body = {
        success: false,
        message: "params error, please check your params",
        error: err
      };
      return;
    }

    const params = ctx.request.body;
    const data = await service.article.create(params);

    ctx.body = {
      success: true,
      data
    };
  }
}

module.exports = ArticleController;
