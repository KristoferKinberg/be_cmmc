'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('goals', [
      {
        text: "Att crewets verksamhet genomförs utifrån medlemmarnas viljeinriktning på demokratiska grunder, och att fler medlemmar engagerar sig i verksamheten så att vi genom träffar och andra möten stärker och utvecklar banden mellan medlemmar i föreningen och likasinnade inom hobbyn."
      },
      {
        text: "Att klassiskt och historiskt intressanta motorcyklar och mopeder används och bevaras för eftervärlden."
      },
      {
        text: "En säkrare trafikmiljö för motorcyklister och mopedister genom kampanjer och annan utåtriktad verksamhet, som t.ex. ”Se oss, vi vill leva” för att påverka myndigheter."
      },
      {
        text: "Att trygga återväxten, med riktad verksamhet mot ungdomar med en aktivt motorintresse."
      },
      {
        text: "Försäkringar som ger fullgott skydd till en rimlig kostnad för medlemmarnas hobbyfordon."
      },
      {
        text: "En informativ och bra hemsida där medlemmar kan ta del av information från styrelsen och andra medlemmar."
      },
      {
        text: "En klubbtidning eller någon form av medlemsblad."
      },
      {
        text: "En låg men effektiv medlemsavgift."
      },
      {
        text: "Att planerad verksamhet genomförts"
      },
      {
        text: "Fest stenhårt, det e vikigt!!",
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('goals', null, {});
  }
};
