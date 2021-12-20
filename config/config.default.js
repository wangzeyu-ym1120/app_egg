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
  config.middleware = [];

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

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/chat',
      options: {
        useUnifiedTopology: true,
      },
    },
  };

  // config.jwt = {
  //   secret: '123456',
  //   igonre: [ '/api/login', '/api/regist' ],
  //   expiresIn: '24h',
  // };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
