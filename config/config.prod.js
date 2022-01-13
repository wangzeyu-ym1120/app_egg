'use strict';

module.exports = () => {
  const exports = {};

  exports.cluster = {
    listen: {
      port: 4000,
      hostname: '127.0.0.1',
    },
  };

  return exports;
};

