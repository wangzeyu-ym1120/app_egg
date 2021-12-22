'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    ctx.logger.info('login-request.body', JSON.stringify(ctx.request.body));
    const loginResult = await ctx.service.user.login({ username, password });
    ctx.logger.info('register-loginResult', JSON.stringify(loginResult));
    ctx.logger.info('=======================================================');
    ctx.body = {
      code: 0,
      content: loginResult,
    };
  }

  async register() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    ctx.logger.info('register-request.body', JSON.stringify(ctx.request.body));
    const registerResult = await ctx.service.user.register({ username, password });
    ctx.logger.info('register-registerResult', JSON.stringify(registerResult));
    ctx.logger.info('=======================================================');
    ctx.body = {
      code: 0,
      content: registerResult,
    };
  }

  async queryUserList() {
    const { ctx } = this;
    const queryUserListResult = await ctx.service.user.queryUserList();
    ctx.logger.info('queryUserList-queryUserListResult', JSON.stringify(queryUserListResult));
    ctx.logger.info('=======================================================');
    ctx.body = {
      code: 0,
      content: queryUserListResult,
    };
  }

  getUserInfo() {
    const { ctx } = this;
    const { token } = ctx.request.headers;
    if (!token) {
      ctx.body = {
        code: 0,
        content: {
          result: 1,
          resultMessage: '缺少请求参数',
        },
      };
      return;
    }
    const userInfo = ctx.helper.getUserInfoFromToken(token);
    ctx.logger.info('getUserInfo-userInfo', JSON.stringify(userInfo));
    ctx.logger.info('=======================================================');
    ctx.body = {
      code: 0,
      content: {
        result: 0,
        userInfo,
      },
    };
  }
}

module.exports = UserController;
