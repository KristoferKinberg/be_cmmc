'use strict';

const { NEWS } = require('./modelConstants');

module.exports = (sequelize, { STRING }) => sequelize.define(NEWS, {
  imgUrl: STRING,
  title: STRING,
  date: STRING,
  text: STRING
}, {});
