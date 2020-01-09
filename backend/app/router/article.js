"use strict";

module.exports = app => {
  const { router, controller } = app;

  router.get("/api/article", controller.article.readList);
  router.post("/api/article", controller.article.create);
  // router.delete("/api/article", controller.article.delete);
  // router.delete("/api/article", controller.article.modify);
  router.get("/api/article/detail", controller.article.read);
};
