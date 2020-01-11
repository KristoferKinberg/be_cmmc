'use strict';

const { BENEFITS } = require('./modelConstants');

module.exports = (sequelize, { STRING }) => {
  return sequelize.define(BENEFITS, {
    text: STRING
  }, {});
};
