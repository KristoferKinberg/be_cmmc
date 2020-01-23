'use strict';

const {getSpecificReq} = require("../core/basicQueries");
const {derivePlainData} = require("../helpers");
const {getAllReq} = require("../core/basicQueries");
const { ALL, SPECIFIC, CREATE, UPDATE, DELETE, NEW} = require('../constants');
const { TEXT_BLOCKS, TEXT_BLOCKS_USERS} = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');

const router = applyRoutes(TEXT_BLOCKS, [ ALL, UPDATE ]);

router.get(`/api/${TEXT_BLOCKS}/:id`, ({ params: { id }}, res) => {
  Promise.all([
    getSpecificReq(TEXT_BLOCKS, id),
    getAllReq(TEXT_BLOCKS_USERS, { where: { textBlockId: id }}),
  ])
    .then(([rawTextBlocks, rawTextBlocksUsers]) => {
      const textBlocks = rawTextBlocks.get({ plain: true });
      const textBlocksUsers = derivePlainData(rawTextBlocksUsers).map(({ userId }) => userId);

      res.send({ ...textBlocks, textBlocksUsers });
    })
    .catch(error => console.log(error));
});

module.exports = router;

