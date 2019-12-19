"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const devMode = process.env.NODE_ENV === "development";
    const assetsURL = devMode ? "/public/" : "/public/";
    const timestamp = Date.now();
    await this.ctx.render("index.tpl", {
      assetsURL,
      devMode,
      timestamp
    });
  }
}

module.exports = HomeController;
