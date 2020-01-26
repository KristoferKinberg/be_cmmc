'use strict';

const {getTextBlock} = require("../requesters/textBlocks");
const { ALL, SPECIFIC, UPDATE } = require('../constants');
const { INSURANCE_HOW_TO } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

const router = applyRoutes(INSURANCE_HOW_TO, [ UPDATE ]);
router.get('/api/insurancehowto', getTextBlock(5));
module.exports = router;

