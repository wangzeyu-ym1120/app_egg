/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // config.cluster = {
  //   listen: {
  //     port: 4000,
  //     hostname: '127.0.0.1',
  //   },
  // };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1638176730027_3873';

  // add your middleware config here
  config.middleware = [ 'auther' ];
  config.auther = {
    enable: true,
    ignore: [ '/login', '/register' ],
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ '*' ],
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,POST',
    credentials: true,
  };

  config.mysql = {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: '123456',
      database: 'chat',
    },
    app: true,
    agent: false,
  };

  config.jwt = {
    secret: 'app_chat',
    expiresIn: '2h',
  };

  config.io = {
    init: { }, // passed to engine.io
    namespace: {
      '/chat': {
        connectionMiddleware: [ 'connection' ],
        packetMiddleware: [],
      },
    },
    // redis: {
    //   host: '127.0.0.1',
    //   port: 6379,
    // },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
