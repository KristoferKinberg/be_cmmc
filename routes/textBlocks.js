'use strict';

const { ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW} = require('../constants');
const { TEXT_BLOCKS, TEXT_BLOCKS_USERS} = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

const router = applyRoutes(TEXT_BLOCKS, [ ALL, UPDATE ]);

module.exports = router;

