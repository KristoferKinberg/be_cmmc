'use strict';

const {derivePlainData} = require("../helpers");
const {getAllReq} = require("../core/basicQueries");
const { ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW } = require('../constants');
const { INSURANCE_STAFF_USERS } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

const router = applyRoutes(INSURANCE_STAFF_USERS, [ SPECIFIC, CREATE, UPDATE, DELETE, NEW ]);

router.get('/api/insurancestaffusers', (req, res) => getAllReq(INSURANCE_STAFF_USERS)
  .then((result) => res.send(derivePlainData(result).map(({ userId}) => userId)))
);

module.exports = router;

