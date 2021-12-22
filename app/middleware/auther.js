'use strict';

module.exports = option => {
  return async function auther(ctx, next) {
    const { ignore } = option;
    const path = ctx.request.path;
    if (ignore.includes(path)) {
      await next();
      return;
    }

    const token = ctx.request.header.token;
    if (!token) {
      ctx.body = {
        code: 4001,
        message: '无权限访问',
      };
      return;
    }

    const tokenIsValid = ctx.helper.verifyToken(token);
    if (!tokenIsValid) {
      ctx.body = {
        code: 4001,
        message: '无权限访问',
      };
      return;
    }

    await next();
  };
};
