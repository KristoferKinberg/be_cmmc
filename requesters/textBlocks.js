'use strict';

const {getAllReq} = require("../core/basicQueries");
const {getSpecificReq} = require("../core/basicQueries");
const {derivePlainData} = require("../helpers");
const { TEXT_BLOCKS, TEXT_BLOCKS_USERS} = require('../models/modelConstants');

const getTextBlock = id => (req, res) => {
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
};

const updateTextBlock = ({ params: { id }}, res) => {
  res.send(':D');
};

module.exports = {
  getTextBlock,
};
