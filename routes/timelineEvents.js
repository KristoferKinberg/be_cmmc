'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW } = require('../constants');
const { TIMELINE_EVENTS } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(TIMELINE_EVENTS, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW ]);

