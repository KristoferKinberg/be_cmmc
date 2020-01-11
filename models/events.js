'use strict';

module.exports = (sequelize , { STRING }) => sequelize.define('events', {
  date: STRING,
  title: STRING,
  text: STRING,
  imgUrl: STRING
}, {});
