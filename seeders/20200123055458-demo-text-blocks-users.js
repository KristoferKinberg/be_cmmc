'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('textBlocksUsers', [
      {
        textBlockId: 1,
        userId: 1
      },
      {
        textBlockId: 1,
        userId: 2
      },
      {
        textBlockId: 1,
        userId: 5
      },
      {
        textBlockId: 2,
        userId: 1
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('textBlocksUsers', null, {});
  }
};
