"use strict";

const { formatSort } = require("../utils/format");

module.exports = app => {
  const { model, Service, Sequelize } = app;
  const { Article: ArticleModel } = model;
  const options = { type: Sequelize.QueryTypes.SELECT };

  class ArticleService extends Service {
    async read(article_id) {
      // const sql = `SELECT * FROM article WHERE article_id = ${article_id}`;
      const article = await ArticleModel.findOne({
        where: {
          article_id
        }
      });
      return article;
    }

    async readList(page = 1, limit = 10, sort = "created_at desc") {
      const offset = (page - 1) * limit;
      const [field, rank] = formatSort(sort);
      const sql = `SELECT * FROM article ORDER BY ${field} ${rank} LIMIT ${limit} OFFSET ${offset}`;
      // await ArticleModel.findAll({
      //   order: [formatSort(sort)],
      //   limit,
      //   offset
      // });
      return await model.query(sql, options);
    }

    async create(params) {
      return await ArticleModel.create(params);
    }
  }

  return ArticleService;
};
