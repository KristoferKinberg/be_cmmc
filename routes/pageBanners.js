'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW } = require('../constants');
const { PAGE_BANNERS } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(PAGE_BANNERS, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW ]);

