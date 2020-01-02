"use strict";

const Controller = require("egg").Controller;
const { createRule, deleteRule } = require("../rule/category");

class CategoryController extends Controller {
  async read() {
    const { ctx, service } = this;

    const data = await service.category.read();

    ctx.body = {
      success: true,
      data: {
        list: data
      }
    };
  }

  async create() {
    const { ctx, service } = this;

    try {
      ctx.validate(createRule);
    } catch (err) {
      ctx.logger.error(err.errors);
      ctx.body = {
        success: false,
        message: "params error, please check your params",
        error: err
      };
      return;
    }

    const { name } = ctx.request.body;

    const isExist = await service.category.isExist(name);

    if (isExist) {
      ctx.body = {
        success: false,
        message: "the category name already exist, please change one"
      };
      return;
    }

    const data = await service.category.create(name);

    ctx.body = {
      success: true,
      data
    };
  }

  async delete() {
    const { ctx, service } = this;

    try {
      ctx.validate(deleteRule);
    } catch (err) {
      ctx.logger.error(err.errors);
      ctx.body = {
        success: false,
        message: "categoryId must be required and type should be number",
        error: err
      };
      return;
    }

    const { categoryId } = ctx.request.body;

    const ret = await service.category.delete(categoryId);

    if (ret === 1) {
      ctx.body = {
        success: true,
        data: {}
      };
      return;
    }

    ctx.body = {
      success: false,
      message: "delete error, the category id maybe not exist"
    };
  }
}

module.exports = CategoryController;
