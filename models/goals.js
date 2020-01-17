'use strict';

const { GOALS } = require('../models/modelConstants');

module.exports = (sequelize, { STRING }) => sequelize.define(GOALS, {
  text: STRING
}, {});
