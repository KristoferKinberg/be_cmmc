'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('subtitlesUsers', [
      {
        subtitleId: 1,
        userId: 1
      },
      {
        subtitleId: 1,
        userId: 2
      },
      {
        subtitleId: 1,
        userId: 3
      },
      {
        subtitleId: 2,
        userId: 4
      },
      {
        subtitleId: 2,
        userId: 5
      },
      {
        subtitleId: 12,
        userId: 1
      },
      {
        subtitleId: 12,
        userId: 2
      },
      {
        subtitleId: 12,
        userId: 3
      },
      {
        subtitleId: 13,
        userId: 4
      },
      {
        subtitleId: 13,
        userId: 5
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('subtitlesUsers', null, {});
  }
};
