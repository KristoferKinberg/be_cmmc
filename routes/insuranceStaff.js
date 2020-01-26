'use strict';

const {getTextBlock} = require("../requesters/textBlocks");
const { ALL, SPECIFIC, CREATE, UPDATE, DELETE } = require('../constants');
const { INSURANCE_STAFF } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

const router = applyRoutes(INSURANCE_STAFF, [ UPDATE ]);
router.get('/api/insurancestaff', getTextBlock(4));
module.exports = router;
