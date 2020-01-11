'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE } = require('../constants');
const { MEMBER_APPLICATION } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(MEMBER_APPLICATION, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE ]);

