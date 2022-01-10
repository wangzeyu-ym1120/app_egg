'use strict';

module.exports = () => {
  return async (ctx, next) => {
    const { socket } = ctx;
    const id = socket.id;
    console.log(`用户${id}链接成功`);
    await next();
    console.log(`用户${id}断开链接`);
  };
};
