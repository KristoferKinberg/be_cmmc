'use strict';

const {getTextBlock} = require("../requesters/textBlocks");
const { UPDATE } = require('../constants');
const { INSPECTIONS_STAFF } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

const router = applyRoutes(INSPECTIONS_STAFF, [ UPDATE ]);
router.get('/api/inspectionsstaff/', getTextBlock(6));

module.exports = router;
