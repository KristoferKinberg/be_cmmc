'use strict';

module.exports = (sequelize, { STRING }) => sequelize.define('peopleList', {
  title: STRING,
  text: STRING
}, {});
