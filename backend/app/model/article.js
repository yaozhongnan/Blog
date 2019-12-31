"use strict";

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define(
    "article",
    {
      article_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true
      },
      category_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      illustration: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      author: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      content: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      label: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      isfixtop: {
        type: DataTypes.ENUM("1", "2"),
        allowNull: true
      },
      isoriginal: {
        type: DataTypes.ENUM("1", "2"),
        allowNull: true
      },
      watch_num: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: "0"
      },
      praise_num: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: "0"
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "2019-12-19 09:11:23"
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "2019-12-19 09:11:23"
      }
    },
    {
      tableName: "article",
      timestamps: false,
      freezeTableName: true
    }
  );

  Model.associate = function() {};

  return Model;
};
