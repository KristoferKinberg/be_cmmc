'use strict';

module.exports = (sequelize, { STRING }) => sequelize.define('officials', {
  title: STRING,
  text: STRING
}, {});
