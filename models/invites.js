'use strict';

const { INVITE: Invites } = require('../models/modelConstants');

module.exports = (sequelize, DataTypes) => {
  const Invite = sequelize.define(Invites, {
    inviteToken: DataTypes.TEXT,
    email: DataTypes.STRING
  }, {});
  Invite.associate = function(models) {
    // associations can be defined here
  };
  return Invite;
};
