'use strict';

const { UPDATE } = require('../constants');
const { CONTACT } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');
const {getSpecificReq} = require("../core/basicQueries");

const router = applyRoutes(CONTACT, [ UPDATE ]);
router.get('/api/contact/', (req, res) => getSpecificReq(CONTACT, 1)
  .then(result => res.send(result)));

module.exports = router;

