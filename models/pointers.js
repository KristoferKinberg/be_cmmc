'use strict';

module.exports = (sequelize, { STRING, INTEGER }) => sequelize.define('pointers', {
  pointer: STRING,
  value: STRING,
  eventId: INTEGER
}, {});
