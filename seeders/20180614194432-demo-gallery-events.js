'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('galleryEvents', [
      {
        galleryYearId: 1,
        date: "Jan 22",
        title: "Resa till mopeMeckat",
      },
      {
        galleryYearId: 1,
        date: "Mar 12",
        title: "MopedRally utanför eslöv",
      },
      {
        galleryYearId: 2,
        date: "Feb 02",
        title: "Alkohlprovning i tyskland",
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('galleryEvents', null, {});
  }
};
