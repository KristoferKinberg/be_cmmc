'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW } = require('../constants');
const { INSPECTIONS_STAFF_USERS } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(INSPECTIONS_STAFF_USERS, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW ]);

