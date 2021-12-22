'use strict';

module.exports = {
  createToken(params) {
    const { app } = this;
    const jwtConfig = app.config.jwt;
    const token = app.jwt.sign({ ...params }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
    return token;
  },

  getUserInfoFromToken(token) {
    const { app } = this;
    const jwtConfig = app.config.jwt;
    let userInfo = {};
    app.jwt.verify(token, jwtConfig.secret, function(err, decoded) {
      if (!decoded) return;
      userInfo = decoded;
    });
    return userInfo;
  },

  verifyToken(token) {
    const { app } = this;
    const jwtConfig = app.config.jwt;
    let tokenIsValid = false;
    app.jwt.verify(token, jwtConfig.secret, function(err, decoded) {
      if (!decoded) return;
      tokenIsValid = true;
    });
    return tokenIsValid;
  },
};
