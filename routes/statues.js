'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW} = require('../constants');
const { STATUES } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(STATUES, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW ]);

