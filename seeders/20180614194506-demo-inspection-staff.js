'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('inspectionsStaffs', [
      {
        title: "Besiktningsmän",
        singleLine: true,
        bgColor: "yellow"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('inspectionsStaffs', null, {});
  }
};
