'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE } = require('../constants');
const { POINTERS } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(POINTERS, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE ]);

