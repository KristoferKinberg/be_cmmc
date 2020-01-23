'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE } = require('../constants');
const { INSURANCE_STAFF } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(INSURANCE_STAFF, [ ALL, SPECIFIC, UPDATE ]);
