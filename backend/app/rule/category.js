"use strict";

exports.createRule = {
  name: {
    type: "string",
    required: true
  }
};

exports.deleteRule = {
  categoryId: {
    type: "number",
    required: true
  }
};
