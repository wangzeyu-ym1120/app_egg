'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    ctx.logger.info('login-request.body', JSON.stringify(ctx.request.body));
    const loginResult = await ctx.service.user.login({ username, password });
    ctx.logger.info('register-loginResult', loginResult);
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
    ctx.logger.info('register-registerResult', registerResult);
    ctx.logger.info('=======================================================');
    ctx.body = {
      code: 0,
      content: registerResult,
    };
  }

  async queryUserList() {
    const { ctx } = this;
    const queryUserListResult = await ctx.service.user.queryUserList();
    ctx.logger.info('register-queryUserListResult', queryUserListResult);
    ctx.logger.info('=======================================================');
    ctx.body = {
      code: 0,
      content: queryUserListResult,
    };
  }
}

module.exports = UserController;
