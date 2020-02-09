'use strict';

const {getAllReq} = require("../core/basicQueries");
const {derivePlainData} = require("../helpers");
const { ALL, SPECIFIC, CREATE, UPDATE, DELETE } = require('../constants');
const { BOARD_USERS } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

const router = applyRoutes(BOARD_USERS, [ SPECIFIC, CREATE, UPDATE, DELETE ]);

router.get('/api/boardusers', (req, res) => getAllReq(BOARD_USERS)
  .then((result) => res.send(derivePlainData(result).map(({ userId}) => userId)))
);

module.exports = router;
