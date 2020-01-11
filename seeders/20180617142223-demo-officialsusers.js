'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('officialsUsers', [
      {
        officialId: 1,
        userId: 1
      },
      {
        officialId: 1,
        userId: 2
      },
      {
        officialId: 1,
        userId: 3
      },
      {
        officialId: 2,
        userId: 5
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('officialsUsers', null, {});
  }
};
