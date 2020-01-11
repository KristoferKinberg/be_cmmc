'use strict';

module.exports = (sequelize, { STRING }) => sequelize.define('goals', {
  text: STRING
}, {});
