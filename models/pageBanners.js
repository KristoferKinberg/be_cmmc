'use strict';

module.exports = (sequelize, { STRING }) => sequelize.define('pageBanners', {
  imgUrl: STRING,
  title: STRING,
  subTitle: STRING
}, {});
