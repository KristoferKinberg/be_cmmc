'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('insuranceStaffUsers', [
      {
        insurancestaffId: 1,
        userId: 1
      },
      {
        insurancestaffId: 1,
        userId: 2
      },
      {
        insurancestaffId: 1,
        userId: 3
      },
      {
        insurancestaffId: 2,
        userId: 5
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('insuranceStaffUsers', null, {});
  }
};
