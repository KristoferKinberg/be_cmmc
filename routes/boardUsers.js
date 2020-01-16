'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE } = require('../constants');
const { BOARD_USERS } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(BOARD_USERS, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE ]);
