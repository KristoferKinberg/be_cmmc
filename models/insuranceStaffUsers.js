'use strict';

module.exports = (sequelize, { INTEGER }) => sequelize.define('insuranceStaffUsers', {
  insuranceStaffId: INTEGER,
  userId: INTEGER
}, {});
