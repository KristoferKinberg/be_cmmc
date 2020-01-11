'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE } = require('../constants');
const { OFFICIALS_USERS } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(OFFICIALS_USERS, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE ]);

