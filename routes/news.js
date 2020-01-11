'use strict';

const { ALL, SPECIFIC } = require('../constants');
const { NEWS } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes')

module.exports = applyRoutes(NEWS, [ ALL, SPECIFIC ]);
