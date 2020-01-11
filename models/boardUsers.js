'use strict';

module.exports = (sequelize, { INTEGER }) => sequelize.define('boardUsers', {
  boardId: INTEGER,
  UserId: INTEGER
}, {});
