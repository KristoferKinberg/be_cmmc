'use strict';

module.exports = (sequelize, { STRING }) => sequelize.define('insuranceStaff', {
  title: STRING,
  text: STRING
}, {});
