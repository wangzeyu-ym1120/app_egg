'use strict';

module.exports = () => {
  const exports = {};

  exports.cluster = {
    listen: {
      port: 4000,
      hostname: 'localhost',
    },
  };

  return exports;
};

