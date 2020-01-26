'use strict';

const {getTextBlock} = require("../requesters/textBlocks");
const { ALL, SPECIFIC, UPDATE } = require('../constants');
const { INTRO } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

const router = applyRoutes(INTRO, [ UPDATE ]);
router.get('/api/intro/', getTextBlock(3))
module.exports = router;

