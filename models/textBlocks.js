'use strict';
module.exports = (sequelize, { INTEGER }) => sequelize.define('textBlocks', {
  title: INTEGER,
  text: INTEGER
}, {});
