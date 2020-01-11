'use strict';

const express = require('express');
const router = express.Router();
const { NEWS } = require('../models/modelConstants');

const {
  getAll
} = require('../core/fetchers');

router.get('/news', getAll(NEWS));

module.exports = router;
