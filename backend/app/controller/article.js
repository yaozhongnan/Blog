"use strict";

const Controller = require("egg").Controller;

class ArticleController extends Controller {
  async readList() {
    const { ctx, service } = this;

    const data = await service.article.readList();

    ctx.body = {
      success: true,
      data: {
        list: data
      }
    };
  }
}

module.exports = ArticleController;
