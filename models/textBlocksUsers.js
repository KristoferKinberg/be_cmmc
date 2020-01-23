'use strict';

module.exports = (sequelize, { INTEGER }) => sequelize.define('textBlocksUsers', {
  userId: INTEGER,
  textBlockId: INTEGER
}, {});
