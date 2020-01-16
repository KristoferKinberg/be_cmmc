'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE } = require('../constants');
const { INSURANCE_STAFF_USERS } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(INSURANCE_STAFF_USERS, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE ]);

