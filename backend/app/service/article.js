"use strict";

module.exports = app => {
  const { model, Service } = app;
  const { Article: ArticleModel } = model;

  class ArticleService extends Service {
    async readList() {
      const data = await ArticleModel.findAll({
        // attributes: ["category_id", "name", "created_at", "updated_at"]
      });
      return data;
    }
  }

  return ArticleService;
};
