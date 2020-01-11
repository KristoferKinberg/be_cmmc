'use strict';
const { modelConstants: {}} = require('./index');

module.exports = (sequelize, { STRING }) => {
  return sequelize.define('benefits', {
    text: STRING
  }, {});
};
