'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW } = require('../constants');
const { GALLERY_EVENTS } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(GALLERY_EVENTS, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW ]);

