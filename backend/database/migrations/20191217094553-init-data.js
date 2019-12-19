"use strict";

// 初始化数据库表中的数据
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "category",
      [
        {
          name: "前端"
        },
        {
          name: "后端"
        }
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "article",
      [
        {
          title: "这是一个标题",
          category_id: 1,
          author: "mohen",
          isfixtop: 1
        },
        {
          title: "这是一个标题2222",
          category_id: 1,
          author: "mohen",
          isfixtop: 2
        }
      ],
      {}
    );

    return queryInterface;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("category", null, {});
    await queryInterface.bulkDelete("article", null, {});
    return queryInterface;
  }
};
