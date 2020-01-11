'use strict';

module.exports = (sequelize, { STRING }) => sequelize.define('intro', {
  title: STRING,
  text: STRING
}, {});
