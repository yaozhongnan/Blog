"use strict";

// 初始化数据库表中的数据
module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      "category",
      [
        {
          name: "frontend"
        },
        {
          name: "backend"
        }
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "article",
      [
        {
          title: "first title",
          category_id: 1
        },
        {
          title: "last title",
          category_id: 1
        }
      ],
      {}
    );

    return queryInterface;
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete("category", null, {});
    await queryInterface.bulkDelete("article", null, {});
    return queryInterface;
  }
};
