'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE } = require('../constants');
const { SUB_TITLES } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(SUB_TITLES, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE ]);

