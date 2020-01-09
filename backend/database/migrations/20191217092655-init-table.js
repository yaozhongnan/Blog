"use strict";

// 初始化数据库表
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, NOW } = Sequelize;

    // 文章分类表
    await queryInterface.createTable("category", {
      category_id: {
        type: INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      name: {
        type: STRING,
        allowNull: false
      },
      created_at: {
        type: DATE,
        defaultValue: NOW
      },
      updated_at: {
        type: DATE,
        defaultValue: NOW
      }
    });

    // 文章表
    await queryInterface.createTable("article", {
      article_id: {
        type: INTEGER,
        primaryKey: true,
        allowNull: false,
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
        type: INTEGER,
        defaultValue: 0
      },
      isoriginal: {
        type: INTEGER,
        defaultValue: 1
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
        defaultValue: NOW
      },
      updated_at: {
        type: DATE,
        defaultValue: NOW
      }
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable("category");
    await queryInterface.dropTable("article");
  }
};
