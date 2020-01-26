'use strict';

const {getTextBlock} = require("../requesters/textBlocks");
const { ALL, SPECIFIC, UPDATE } = require('../constants');
const { BOARD } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

const router = applyRoutes(BOARD, [ UPDATE ]);
router.get('/api/board/', getTextBlock(1));

module.exports = router;
