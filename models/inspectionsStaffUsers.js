'use strict';

module.exports = (sequelize, { INTEGER }) => sequelize.define('inspectionsStaffUsers', {
  inspectionsStaffId: INTEGER,
  userId: INTEGER
}, {});
