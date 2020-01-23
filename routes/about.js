'use strict';

const express = require('express');
const models = require('../models');
const {derivePlainData} = require("../helpers");
const { getAllList } = require('../core/basicQueries');
const {
  GOALS,
  STATUES,
  USERS,
  BOARD,
  BOARD_USERS,
  OFFICIALS,
  OFFICIALS_USERS,
  CONTACT
} = require('../models/modelConstants');
const router = express.Router();

router.get('/api/about', (req, res, next) => {
  getAllList([
    GOALS,
    STATUES,
    USERS,
    BOARD,
    BOARD_USERS,
    OFFICIALS,
    OFFICIALS_USERS,
    CONTACT
  ])
    .then(([ goals, statues, users, boardObj, boardUsersObj, officialsObj, officialsUsersObj, contactObj ]) => {
      const [officials] = derivePlainData(officialsObj);
      const officialsUsers = derivePlainData(officialsUsersObj);
      const [board] = derivePlainData(boardObj);
      const boardUsers = derivePlainData(boardUsersObj);
      const [contact] = derivePlainData(contactObj);

      res.send({
        goals,
        statues,
        users,
        board: { ...board, boardMembers: boardUsers.map(({ userId }) => userId) },
        officials: { ...officials, officials: officialsUsers.map(({ userId }) => userId) },
        contact
      })
    });
});

module.exports = router;
