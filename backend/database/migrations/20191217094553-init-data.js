"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Category",
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

    // queryInterface.bulkInsert(
    //   "Article",
    //   [
    //     {
    //       name: "前端",
    //       created_at: new Date(),
    //       updated_at: new Date()
    //     },
    //     {
    //       name: "后端",
    //       created_at: new Date(),
    //       updated_at: new Date()
    //     }
    //   ],
    //   {}
    // );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Category", null, {});
  }
};
