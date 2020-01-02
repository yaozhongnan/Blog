"use strict";

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define(
    "category",
    {
      category_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.literal("CURRENT_TIMESTAMP")
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.literal("CURRENT_TIMESTAMP")
      }
    },
    {
      tableName: "category",
      timestamps: false,
      freezeTableName: true
    }
  );

  Model.associate = function() {};

  return Model;
};
