'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('contacts', [
      {
        title: "Classic Mc Moped Club",
        co: "Johan Svensson",
        street: "Dalbyvägen 19",
        zip: "232 34",
        city: "Arlöv",
        bg: "747-8480"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('contacts', null, {});
  }
};
