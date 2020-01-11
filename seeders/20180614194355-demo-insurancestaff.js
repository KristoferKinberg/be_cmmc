'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('insurancestaffs', [
      {
        title: "Försäkringskommitté",
        text: "Eventuella försäkringsfrågor riktas till Per. Övriga frågor får tas upp vid närmst kommande styrelsemöte för att spara på både styrelsen och eran tid.",
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('insurancestaffs', null, {});
  }
};
