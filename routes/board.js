'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE } = require('../constants');
const { BOARD } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(BOARD, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE ]);

