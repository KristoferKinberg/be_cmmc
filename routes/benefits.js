'use strict';

const express = require('express');
const router = express.Router();
const { BENEFITS } = require('../models/modelConstants');

const {
  getAll,
  getSpecific
} = require('../core/fetchers');

// router.get('/benefits', getAll(BENEFITS));
// router.get('/benefits/:id', getSpecific(BENEFITS));

module.exports = router;
