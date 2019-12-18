"use strict";

const path = require("path");
const EggSequelizeAuto = require("egg-sequelize-auto");
const config = require("./config/config.default").sequelize;

const { database, username, host, password, dialect, port } = config;
const directory = path.join(__dirname, "./app/model");

// With options:
const auto = new EggSequelizeAuto(database, username, password, {
  host,
  dialect,
  directory, // prevents the program from writing to disk
  port,
  // output,
  additional: {
    timestamps: false,
    freezeTableName: true
  }
});

// start
auto.run(err => {
  if (err) throw err;
});
