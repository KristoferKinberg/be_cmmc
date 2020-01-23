'use strict';

const { ALL, SPECIFIC, UPDATE } = require('../constants');
const { OFFICIALS } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(OFFICIALS, [ ALL, SPECIFIC, UPDATE ]);

