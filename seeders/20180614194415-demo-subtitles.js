'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('subTitles', [
      {
        title: "VD",
        peoplelistId: 1
      },
      {
        title: "Vice ordförande",
        peoplelistId: 1
      },
      {
        title: "Sekreterare",
        peoplelistId: 1
      },
      {
        title: "Kassör",
        peoplelistId: 1
      },
      {
        title: "Ledamöter",
        peoplelistId: 1
      },
      {
        title: "Supleanter",
        peoplelistId: 1
      },
      {
        title: "dsada dsa d",
        peoplelistId: 1
      },
      {
        title: "dsd a dsa ",
        peoplelistId: 1
      },
      {
        title: "dsada dsa d",
        peoplelistId: 1
      },
      {
        title: "dsd a dsa ",
        peoplelistId: 1
      },
      {
        title: "VD",
        peoplelistId: 2
      },
      {
        title: "Besiktningsmän",
        peoplelistId: 2
      },
      {
        title: "Revisorer",
        peoplelistId: 2
      },
      {
        title: "Revisorsuppleanter",
        peoplelistId: 2
      },
      {
        title: "Mopedverksamhet",
        peoplelistId: 2
      },
      {
        title: "Valberedning",
        peoplelistId: 2
      },
      {
        title: "Webmaster",
        peoplelistId: 2
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('subTitles', null, {});
  }
};
