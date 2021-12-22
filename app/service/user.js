'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async login({ username, password }) {
    const { ctx, app } = this;
    const findResult = await app.mysql.get('user', { username });
    ctx.logger.info('register-findResult', JSON.stringify(findResult));
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
    const token = ctx.helper.createToken(findResult);
    return {
      result: 0,
      resultMessage: '',
      token,
    };
  }

  async register({ username, password }) {
    const { ctx, app } = this;
    const findResult = await app.mysql.get('user', { username });
    ctx.logger.info('register-findResult', JSON.stringify(findResult));
    if (findResult) {
      return {
        result: 1,
        resultMessage: '用户名已存在！',
      };
    }
    const createResult = await app.mysql.insert('user', { username, password });
    ctx.logger.info('register-createResult', JSON.stringify(createResult));
    if (createResult.affectedRows !== 1) {
      ctx.logger.error('register-createResult-error', '数据库插入数据失败');
      return {
        result: 1,
        resultMessage: '系统异常',
      };
    }
    const createAfterFindResult = await app.mysql.get('user', { username });
    const token = ctx.helper.createToken(createAfterFindResult);
    return {
      result: 0,
      resultMessage: '',
      token,
    };
  }

  async queryUserList() {
    const { ctx, app } = this;
    const findResult = await app.mysql.select('user');
    const mapResult = findResult.map(item => {
      return { username: item.username, userId: item.userId };
    });
    ctx.logger.info('queryUserList-mapResult', JSON.stringify(mapResult));
    return {
      result: 0,
      resultMessage: '',
      userList: [ ...mapResult ],
    };
  }
}

module.exports = UserService;
