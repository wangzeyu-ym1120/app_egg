'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async login({ username, password }) {
    const { ctx } = this;
    const findResult = await ctx.model.User.findOne({ username });
    ctx.logger.info('register-findResult', findResult);
    if (!findResult) {
      return {
        result: 1,
        resultMessage: '用户不存在！',
      };
    }
    if (password !== findResult.password) {
      return {
        result: 1,
        resultMessage: '密码错误！',
      };
    }
    return {
      result: 0,
      resultMessage: '',
      token: findResult._id,
    };
  }

  async register({ username, password }) {
    const { ctx } = this;
    const findResult = await ctx.model.User.findOne({ username });
    ctx.logger.info('register-findResult', findResult);
    if (findResult) {
      return {
        result: 1,
        resultMessage: '用户名已存在！',
      };
    }
    const createResult = await ctx.model.User.create({ username, password });
    ctx.logger.info('register-createResult', createResult);
    return {
      result: 0,
      resultMessage: '',
      token: createResult._id,
    };
  }

  async queryUserList() {
    const { ctx } = this;
    const findResult = await ctx.model.User.find();
    const mapResult = findResult.map(item => {
      return { username: item.username, userId: item._id };
    });
    ctx.logger.info('queryUserList-mapResult', findResult);
    return {
      result: 0,
      resultMessage: '',
      userList: [ ...mapResult ],
    };
  }
}

module.exports = UserService;
