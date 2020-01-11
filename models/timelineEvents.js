'use strict';

module.exports = (sequelize, { STRING }) => sequelize.define('timelineEvents', {
  date: STRING,
  title: STRING,
  text: STRING,
  imgUrl: STRING
}, {});
