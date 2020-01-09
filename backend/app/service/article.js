"use strict";

const { formatSort } = require("../utils/format");

module.exports = app => {
  const { model, Service, Sequelize } = app;
  const options = { type: Sequelize.QueryTypes.SELECT };

  class ArticleService extends Service {
    async readList(page = 1, limit = 10, sort = "created_at desc") {
      const offset = (page - 1) * limit;
      const [field, rank] = formatSort(sort);
      const sql = `SELECT * FROM article ORDER BY ${field} ${rank} LIMIT ${limit} OFFSET ${offset}`;
      return await model.query(sql, options);
    }
  }

  return ArticleService;
};
