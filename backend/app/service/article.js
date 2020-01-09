"use strict";

const { formatSort } = require("../utils/format");

module.exports = app => {
  const { model, Service } = app;
  const { Article: ArticleModel } = model;

  class ArticleService extends Service {
    async readList(page = 1, limit = 10, sort = "created_at desc") {
      const offset = (page - 1) * limit;
      const data = await ArticleModel.findAll({
        order: [formatSort(sort)],
        limit,
        offset
      });
      return data;
    }
  }

  return ArticleService;
};
