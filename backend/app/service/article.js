"use strict";

module.exports = app => {
  class ArticleService extends app.Service {
    async getBatteryList() {
      const sql = ``;

      const data = await app.model.query(sql);

      return data;
    }
  }

  return ArticleService;
};
