'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('galleryYears', [
      {
        year: '2017'
      },
      {
        year: '2018'
      },
      {
        year: '2019'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('galleryYears', null, {});
  }
};
