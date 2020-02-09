'use strict';

const {derivePlainData} = require("../helpers");
const {getAllReq} = require("../core/basicQueries");
const { ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW } = require('../constants');
const { INSPECTIONS_STAFF_USERS } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

const router = applyRoutes(INSPECTIONS_STAFF_USERS, [ SPECIFIC, CREATE, UPDATE, DELETE, NEW ]);

router.get('/api/inspectionsstaffusers', (req, res) => getAllReq(INSPECTIONS_STAFF_USERS)
  .then((result) => res.send(derivePlainData(result).map(({ userId}) => userId)))
);

module.exports = router;

