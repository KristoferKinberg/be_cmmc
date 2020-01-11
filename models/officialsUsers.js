'use strict';

module.exports = (sequelize, { INTEGER }) => sequelize.define('officialsUsers', {
  officialId: INTEGER,
  userId: INTEGER
}, {});
