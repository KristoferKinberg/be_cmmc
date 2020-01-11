'use strict';

module.exports = (sequelize, { STRING, INTEGER }) => sequelize.define('galleryEvents', {
  date: STRING,
  title: STRING,
  galleryYearId: INTEGER
}, {});
