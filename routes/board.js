'use strict';

const { ALL, SPECIFIC, UPDATE } = require('../constants');
const { BOARD } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(BOARD, [ ALL, SPECIFIC, UPDATE ]);

