'use strict';

const { ALL, SPECIFIC, UPDATE } = require('../constants');
const { INSURANCE_HOW_TO } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(INSURANCE_HOW_TO, [ ALL, SPECIFIC, UPDATE ]);

