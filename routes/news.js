'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW } = require('../constants');
const { NEWS } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(NEWS, [NEW, CREATE, ALL, SPECIFIC, UPDATE, DELETE]);
