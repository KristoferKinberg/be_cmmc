'use strict';

module.exports = (sequelize, { STRING, TEXT }) => sequelize.define('users', {
  name: STRING,
  email: STRING,
  adress: STRING,
  phone: STRING,
  imgUrl: TEXT
}, {});
