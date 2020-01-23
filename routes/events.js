'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW } = require('../constants');
const { EVENTS } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(EVENTS, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW ]);

