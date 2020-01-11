'use strict';

module.exports = (sequelize, { STRING }) => sequelize.define('contact', {
  title: STRING,
  co: STRING,
  street: STRING,
  zip: STRING,
  city: STRING,
  bg: STRING
}, {});
