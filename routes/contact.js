'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE } = require('../constants');
const { CONTACT } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(CONTACT, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE ]);

