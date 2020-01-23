'use strict';

const { ALL, SPECIFIC, UPDATE } = require('../constants');
const { INTRO } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(INTRO, [ ALL, SPECIFIC, UPDATE ]);

