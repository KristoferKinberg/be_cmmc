'use strict';

const { ALL, SPECIFIC, UPDATE } = require('../constants');
const { CONTACT } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(CONTACT, [ ALL, SPECIFIC, UPDATE ]);

