'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    lastTime: {
      type: Number,
    },
    token: {
      type: String,
    },
    role: {
      type: String,
    },
    dsc: {
      type: String,
    },
  });
  return mongoose.model('user', UserSchema);
};

