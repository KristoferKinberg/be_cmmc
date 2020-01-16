'use strict';

const express = require('express');
const models = require('../models');
const  { getAllList } = require('../core/basicQueries');
const { EVENTS, POINTERS, USERS } = require('../models/modelConstants');
const router = express.Router();

router.get('/api/planing', (req, res, next) => {
  getAllList([ EVENTS, POINTERS, USERS ])
    .then(([ events, pointers, users ]) => {
      res.send({ events, pointers, users });
    });
});

module.exports = router;
