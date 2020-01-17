'use strict';

const { INVITES } = require('../models/modelConstants');

module.exports = (sequelize, DataTypes) => sequelize.define(INVITES, {
  inviteToken: DataTypes.TEXT,
  email: DataTypes.STRING
}, {});
