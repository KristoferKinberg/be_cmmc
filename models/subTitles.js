'use strict';

module.exports = (sequelize, { STRING, INTEGER }) => sequelize.define('subTitles', {
  title: STRING,
  peopleListId: INTEGER,
}, {});
