'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);
  router.post('/login', controller.user.login);
  router.post('/register', controller.user.register);
  router.get('/queryUserList', controller.user.queryUserList);
  router.get('/getUserInfo', controller.user.getUserInfo);
  router.get('/getChatMsgList', controller.chat.getChatMsgList);

  io.of('/chat').route('sendMsg', io.controller.default.ping);
};
