'use strict';

const {getTextBlock} = require("../requesters/textBlocks");
const { ALL, SPECIFIC, UPDATE } = require('../constants');
const { OFFICIALS } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

const router = applyRoutes(OFFICIALS, [ UPDATE ]);
router.get('/api/officials/', getTextBlock(2));
module.exports = router;

