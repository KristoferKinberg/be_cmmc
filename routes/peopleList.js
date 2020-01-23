'use strict';

const { ALL, SPECIFIC, UPDATE } = require('../constants');
const { PEOPLE_LIST } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(PEOPLE_LIST, [ ALL, SPECIFIC, UPDATE, ]);

