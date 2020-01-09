"use strict";

const Controller = require("egg").Controller;

class ArticleController extends Controller {
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
}

module.exports = ArticleController;
