"use strict";

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define(
    "sequelizemeta",
    {
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true
      }
    },
    {
      tableName: "sequelizemeta",
      timestamps: false,
      freezeTableName: true
    }
  );

  Model.associate = function() {};

  return Model;
};
