'use strict';

const Controller = require('egg').Controller;

class DefaultController extends Controller {
  async ping() {
    const { ctx, app } = this;
    const { from, to, content } = ctx.args[0];
    const chat_id = [ from, to ].sort().join('_');
    const create_time = Date.now();
    const chatModel = {
      chat_id,
      create_time,
      from,
      to,
      content,
    };
    const createResult = await app.mysql.insert('chat', chatModel);
    if (createResult.affectedRows !== 1) {
      ctx.logger.error('register-createResult-error', '数据库插入数据失败');
      return;
    }
    const nsp = app.io.of('/chat');
    // nsp.emit('receiveMsg', chatModel);
    nsp.emit(to+'', chatModel);
    nsp.emit(from+'', chatModel);
  }
}

module.exports = DefaultController;
