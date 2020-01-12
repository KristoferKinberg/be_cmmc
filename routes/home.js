'use strict';

const express = require('express');
const models = require('../models');
const  { getAllList } = require('../core/basicQueries');
const { SLIDES, NEWS, INTRO } = require('../models/modelConstants');
const router = express.Router();

router.get('/api/home', (req, res, next) => {
  getAllList([SLIDES, NEWS, INTRO])
    .then(([ slides, news, intro]) => res.send({ slides, news, intro }));
});

module.exports = router;
