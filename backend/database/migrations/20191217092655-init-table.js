"use strict";

// 初始化数据库表
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, ENUM } = Sequelize;

    // 文章分类表
    await queryInterface.createTable("category", {
      category_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: {
        type: STRING,
        allowNull: false
      },
      created_at: {
        type: DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      updated_at: {
        type: DATE,
        allowNull: false,
        defaultValue: new Date()
      }
    });

    // 文章表
    await queryInterface.createTable("article", {
      article_id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      category_id: {
        type: INTEGER,
        allowNull: false
      },
      title: {
        type: STRING,
        allowNull: false
      },
      description: {
        type: STRING,
        allowNull: true
      },
      illustration: {
        type: STRING,
        allowNull: true
      },
      author: {
        type: STRING,
        allowNull: true
      },
      content: {
        type: STRING,
        allowNull: true
      },
      label: {
        type: STRING,
        allowNull: true
      },
      isfixtop: {
        // 1 - 置顶， 2 - 非置顶
        type: ENUM,
        values: ["1", "2"]
      },
      isoriginal: {
        // 1 - 原创， 2 - 非原创
        type: ENUM,
        values: ["1", "2"]
      },
      watch_num: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      praise_num: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      created_at: {
        type: DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      updated_at: {
        type: DATE,
        allowNull: false,
        defaultValue: new Date()
      }
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable("category");
    await queryInterface.dropTable("article");
  }
};
