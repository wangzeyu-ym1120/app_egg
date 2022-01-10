'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getChatMsgList({ userId }) {
    const { app } = this;
    const findResult = await app.mysql.select('chat');
    const mapResult = findResult.filter(item => item.to === userId || item.from === userId);
    return {
      result: 0,
      resultMessage: '',
      chatMsgList: [ ...mapResult ],
    };
  }
}

module.exports = UserService;
