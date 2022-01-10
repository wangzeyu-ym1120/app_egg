'use strict';

const Controller = require('egg').Controller;

class ChatController extends Controller {
  async getChatMsgList() {
    const { ctx } = this;
    const token = ctx.request.header.token;
    const userinfo = ctx.helper.getUserInfoFromToken(token);
    const chatMsgList = await ctx.service.chat.getChatMsgList({ userId: userinfo.userId });
    ctx.body = {
      code: 0,
      content: chatMsgList,
    };
  }
}

module.exports = ChatController;
