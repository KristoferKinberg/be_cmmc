'use strict';

const {derivePlainData} = require("../helpers");
const {getAllReq} = require("../core/basicQueries");
const { ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW } = require('../constants');
const { OFFICIALS_USERS } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

const router = applyRoutes(OFFICIALS_USERS, [ SPECIFIC, CREATE, UPDATE, DELETE, NEW ]);

router.get('/api/officialsusers', (req, res) => getAllReq(OFFICIALS_USERS)
  .then((result) => res.send(derivePlainData(result).map(({ userId}) => userId)))
);

module.exports = router;
