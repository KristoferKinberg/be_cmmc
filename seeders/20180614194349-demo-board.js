'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('boards', [
      {
        title: "Styrelse",
        text: "Det kommer tillkopmma mycket nya feta saker i klubben hädanefter!! "
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('boards', null, {});
  }
};
