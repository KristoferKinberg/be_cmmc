'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW } = require('../constants');
const { GALLERY_YEARS } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(GALLERY_YEARS, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW ]);

