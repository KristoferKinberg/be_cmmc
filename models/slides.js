'use strict';

module.exports = (sequelize, { STRING, TEXT }) => sequelize.define('slides', {
  imgUrl: STRING,
  title: STRING,
  text: TEXT,
  align: STRING
}, {});
