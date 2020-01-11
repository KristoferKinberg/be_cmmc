'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE } = require('../constants');
const { EVENT_IMAGES } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(EVENT_IMAGES, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE ]);

