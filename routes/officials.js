'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE } = require('../constants');
const { OFFICIALS } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(OFFICIALS, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE ]);

