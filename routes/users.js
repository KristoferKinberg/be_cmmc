'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE } = require('../constants');
const { USERS } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(USERS, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE ]);

