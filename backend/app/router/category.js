"use strict";

module.exports = app => {
  const { router, controller } = app;

  router.get("/api/category", controller.category.read);
  router.post("/api/category", controller.category.create);
  router.delete("/api/category", controller.category.delete);
};
