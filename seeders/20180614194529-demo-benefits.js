'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('benefits', [
      {
        "text": "CMMC (förkortat CMMC) är en riksklubb. För att vara medlem i CMMC skall man i kamratlig anda medverka, värna och bevara klassiska eller kulturhistoriskt intressanta motorcyklar och mopeder. Det krävs dock inte att man har något eget fordon för att få medlemskap. Medlemssökande blir antagen som medlem efter godkännande av styrelsen. Antagning sker om sökande uppfyller gällande stadgekrav."
      },
      {
        "text": "Möjlidsa gdsa  sashet att teckna billiga försäkringar. (Medlemskap i MHRF ingår)"
      },
      {
        "text": "Ett stort antal akds ads a tiviteter inom klubben. (Se resp. Aktivitets kalender)"
      },
      {
        "text": "Rabatt på din medlemsavgift hos SMC. (Om du väljer detta)"
      },
      {
        "text": "Rättighet att utnyttja SMC’s rabatter. (Om du även är medlem i SMC)"
      },
      {
        "text": "Dessutom är vi en klubb som aktivt arbetar för ökad trafiksäkerhet för motorcyklister och mopedister."
      },
      {
        "text": "d sad sad ad as a",
      },
      {
        "text": "dsa d as",
      },
      {
        "text": "dsa asd ad a",
      },
      {
        "text": "dsaklöd söaldkslö kslökdlöklöask lödk lökdöald sad as dsa",
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('benefits', null, {});
  }
};
