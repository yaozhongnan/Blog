"use strict";

module.exports = () => {
  return async function onerror(ctx, next) {
    try {
      await next();
    } catch (err) {
      ctx.logger.error(err);
      const { message, error, errorCode } = err;
      ctx.body = {
        success: false,
        message: message || error,
        errorCode
      };
    }
  };
};
