'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE } = require('../constants');
const { PEOPLE_LIST } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(PEOPLE_LIST, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE ]);

