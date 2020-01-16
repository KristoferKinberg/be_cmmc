'use strict';

const express = require('express');
const models = require('../models');
const {derivePlainData} = require("../helpers");
const  { getAllList } = require('../core/basicQueries');
const {
  BENEFITS,
  INSURANCE_STAFF,
  INSURANCE_STAFF_USERS,
  INSPECTIONS_STAFF,
  INSURANCE_HOW_TO,
  INSPECTIONS_STAFF_USERS,
  USERS,
  MEMBER_APPLICATION
} = require('../models/modelConstants');
const router = express.Router();

router.get('/api/member', (req, res, next) => {
  getAllList([
    BENEFITS,
    USERS,
    INSURANCE_HOW_TO,
    INSURANCE_STAFF,
    INSURANCE_STAFF_USERS,
    INSPECTIONS_STAFF,
    INSPECTIONS_STAFF_USERS,
    MEMBER_APPLICATION,
  ])
    .then(([ benefits, users, insurHowTo, insurStaff, insuranceStaffUsers, inspecStaff, inspectionsStaffUsers,
             memberApplObj ]) => {
      const [insuranceHowTo] = derivePlainData(insurHowTo);
      const [insuranceStaff] = derivePlainData(insurStaff);
      const [inspectionsStaff] = derivePlainData(inspecStaff);
      const [memberApplication] = derivePlainData(memberApplObj);

      res.send({
        benefits,
        insuranceHowTo,
        insuranceStaff: { ...insuranceStaff, insuranceStaff: insuranceStaffUsers.map(({ userId }) => userId)},
        inspectionsStaff: { ...inspectionsStaff, inspectionsStaff: inspectionsStaffUsers.map(({ userId }) => userId)},
        users,
        memberApplication
      });
    });
});

module.exports = router;
