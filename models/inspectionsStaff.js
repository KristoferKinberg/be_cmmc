'use strict';

module.exports = (sequelize, { STRING, BOOLEAN }) => sequelize.define('inspectionsStaff', {
  title: STRING,
  singleLine: BOOLEAN,
  bgColor: STRING
}, {});
