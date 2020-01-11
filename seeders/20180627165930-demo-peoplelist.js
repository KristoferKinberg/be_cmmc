'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('peopleLists', [
      {
        title: "Styrelse",
        text: "Det kommer tillkopmma mycket nya feta saker i klubben hädanefter!!"
      },
      {
        title: "Funktionärer",
        text: "som saker som man vet :D",
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('peopleLists', null, {});
  }
};
