'use strict';

module.exports = (sequelize, { STRING, INTEGER }) => sequelize.define('subTitle', {
  title: STRING,
  peopleListId: INTEGER,
}, {});
