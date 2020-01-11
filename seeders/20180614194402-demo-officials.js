'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('officials', [
      {
        title: "Funktionärer",
        text: "som saker som man vet :D",
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('officials', null, {});
  }
};
