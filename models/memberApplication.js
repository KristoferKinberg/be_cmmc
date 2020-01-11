'use strict';

module.exports = (sequelize, { STRING }) => sequelize.define('memberApplication', {
  imgUrl: STRING,
  modalImgUrl: STRING,
  text: STRING
}, {});
