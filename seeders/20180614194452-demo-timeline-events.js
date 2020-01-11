'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('timelineEvents', [
      {
        date: '2017-02-05',
        title: 'someTitle',
        text: 'dsa ldöäsa dlöäsla öädlsöäaläödler gfäwpaöglröä lfdöäslföädsl høæþlröähl föäsdlföäl föädslföä löähtlräöl d',
        imgUrl: 'someImgFam'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('timelineEvents', null, {});
  }};
