'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW } = require('../constants');
const { GOALS } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(GOALS, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW ]);

