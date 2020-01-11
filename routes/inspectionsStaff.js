'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE } = require('../constants');
const { INSPECTIONS_STAFF } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(INSPECTIONS_STAFF, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE ]);

