'use strict';

const { GOALS } = require('../models/modelConstants');

module.exports = (sequelize, { STRING }) => {
  console.log(sequelize.define(GOALS, {
    text: STRING
  }));

  return sequelize.define(GOALS, {
    text: STRING
  }, {});
}
