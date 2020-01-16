'use strict';

const { ADMINS } = require('./modelConstants');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(ADMINS, {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    imageUrl: DataTypes.TEXT
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
