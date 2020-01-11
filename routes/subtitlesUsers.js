'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE } = require('../constants');
const { SUBTITLES_USERS } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

module.exports = applyRoutes(SUBTITLES_USERS, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE ]);

