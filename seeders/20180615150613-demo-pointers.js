'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pointers', [
      {
        pointer: "pris",
        value: "200kr",
        eventId: 2,
      },
      {
        pointer: "plats",
        value: "stockhomlsgatan 4",
        eventId: 1,
      },
      {
        pointer: "tid",
        value: "19:00",
        eventId: 2,
      },
      {
        pointer: "pris",
        value: "200kr",
        eventId: 2
      },
      {
        pointer: "plats",
        value: "stockhomlsgatan 4"
      },
      {
        pointer: "tid",
        value: "19:00",
        eventId: 3
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pointers', null, {});
  }
};
