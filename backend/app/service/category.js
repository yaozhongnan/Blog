"use strict";

module.exports = app => {
  const { model, Service } = app;
  const { Category: CategoryModel } = model;

  class CategoryService extends Service {
    async read() {
      const data = await CategoryModel.findAll({
        attributes: ["category_id", "name", "created_at", "updated_at"]
      });
      return data;
    }

    async create(name) {
      const data = await CategoryModel.create({
        name
      });
      return data;
    }

    async delete(categoryId) {
      const data = await CategoryModel.destroy({
        where: {
          category_id: categoryId
        }
      });
      return data;
    }

    async isExist(name) {
      const ret = await CategoryModel.findOne({
        where: {
          name
        }
      });

      return !!ret;
    }
  }

  return CategoryService;
};
