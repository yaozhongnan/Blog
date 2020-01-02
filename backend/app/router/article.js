"use strict";

module.exports = app => {
  const { router, controller } = app;

  router.get("/api/article", controller.article.getCategory);
};
