"use strict";

// 初始化数据库表中的数据
module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      "category",
      [
        {
          name: "前端",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "后端",
          created_at: new Date(),
          updated_at: new Date()
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
          isfixtop: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "这是一个标题2222",
          category_id: 1,
          author: "mohen",
          isfixtop: 2,
          created_at: new Date(),
          updated_at: new Date()
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
