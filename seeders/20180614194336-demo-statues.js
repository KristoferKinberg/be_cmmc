'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('statues', [
      {
        "text": "CMMC är en riksklubb. För att vara medlem i CMMC skall man i kamratlig anda medverka, värna och bevara klassiska eller kulturhistoriskt intressanta motorcyklar och mopeder. Det krävs dock inte att man har något eget fordon för att få medlemskap. Medlemssökande blir antagen som medlem efter godkännande av styrelsen. Antagning sker om sökande uppfyller gällande stadgekrav."
      },
      {
        "text": "Klubbens verksamhet finansieras genom medlemsavgifter. Medlemsavgift skall vara inbetald senast 31 januari. Avgiften fastställs av årsmötet föregående år. För nya medlemmar skall avgiften betalas senast 30 dagar efter godkännande."
      },
      {
        "text": "Räkenskaps- och verksamhetsår är kalenderår."
      },
      {
        "text": "Styrelsen för CMMC väljes på årsmötet bland klubbens medlemmar. Ordförande och kassör väljes växelvis på två år, övriga styrelseledamöter samt suppleanter väljes på ett år. årsmöte skall hållas före mars månads utgång. Styrelsen består av ordförande, kassör, samt tre ledamöter och erforderligt antal suppleanter."
      },
      {
        "text": "Klubben tecknas av ordförande och kassör var för sig."
      },
      {
        "text": "Kallelse till årsmötet publiceras på hemsidan, annan vedertagen publikation eller via utskick av styrelsen senast en månad före utsatt datum. Förslag som skall behandlas på årsmötet skall vara styrelsen tillhanda senast 20 dagar före utlyst möte. Förslag till stadgeändringar skall vara styrelsen tillhanda senast 20 dagar före utlyst möte."
      },
      {
        "text": "Årsmötet utser på ett år en valberedning som består av tre ledamöter."
      },
      {
        "text": "Årsmötet utser på ett år två revisorer och två suppleanter."
      },
      {
        "text": "Upplösning av klubben kan föreslås av envar medlem. Beslut om upplösning skall fattas på två årsmöten efter varandra och beslutet ska bifallas av minst 2/3 av röstberättigade."
      },
      {
        "text": "Medlem som önskar föra fram sin sak/talan mot styrelsen skall beredas möjlighet till medling via revisorerna."
      },
      {
        "text": "Uteslutning av medlem sker om medlem skadat eller har uppsåt att skada klubben. Styrelsen beslutar om uteslutning av medlem. Före uteslutning, skall medling ha genomförts av revisorerna. Uteslutning skall redovisas på kommande årsmöte, återinträde kan ske efter ny ansökan. Om medlemsavgift inte inbetalas inom föreskriven tid utesluts medlem efter påminnelse."
      },
      {
        "text": "Vid upplösning av klubben skall kvarstående medel tillfalla fond för rehabilitering av mc och moped relaterade personskador."
      },
      {
        "text": "DRICKA ÖL!! :D ",
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('statues', null, {});
  }
};
