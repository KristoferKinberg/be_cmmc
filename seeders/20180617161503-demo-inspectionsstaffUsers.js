'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('inspectionsStaffUsers', [
      {
        inspectionsStaffId: 1,
        userId: 1
      },
      {
        inspectionsStaffId: 1,
        userId: 4
      },
      {
        inspectionsStaffId: 1,
        userId: 3
      },
      {
        inspectionsStaffId: 1,
        userId: 5
      },
      {
        inspectionsStaffId: 1,
        userId: 6
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('inspectionsStaffUsers', null, {});
  }
};
