'use strict';

module.exports = (sequelize, { STRING }) => sequelize.define('news', {
  imgUrl: STRING,
  title: STRING,
  date: STRING,
  text: STRING
}, {});
