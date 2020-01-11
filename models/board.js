'use strict';

module.exports = (sequelize, { STRING }) => sequelize.define('board', {
  title: STRING,
  text: STRING
}, {});
