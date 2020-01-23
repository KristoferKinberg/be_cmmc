'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW } = require('../constants');
const { BENEFITS } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(BENEFITS, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW ]);
