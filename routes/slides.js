'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW } = require('../constants');
const { SLIDES } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(SLIDES, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW ]);

