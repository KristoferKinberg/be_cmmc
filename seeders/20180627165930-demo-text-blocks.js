'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('textBlocks', [
      { // BOARD
        title: "Styrelse",
        text: "Det kommer tillkopmma mycket nya feta saker i klubben hädanefter!!"
      },
      { // OFFICIALS
        title: "Funktionärer",
        text: "som saker som man vet :D",
      },
      { // INTRO
        title: "välkommen till cmmc",
        text: "Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. sollicitudin molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt.Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
      },
      { // INSURANCE STAFF
        title: "Försäkringskommitté",
        text: "Eventuella försäkringsfrågor riktas till Per. Övriga frågor får tas upp vid närmst kommande styrelsemöte för att spara på både styrelsen och eran tid.",
      },
      { // INSURANCE HOW TO
        title: "",
        text: "Så här söker du försäkring. Skicka in dtin försäkringsansökan till någon av de ADRESSer som finns under Försäkringskommité till vänster ELLER enligt punkt 2 via hemsidan. Ansökan kan man göra på två sätt." +
          "1. Via pappersansökan som du laddar ner genom att klicka HÄR. Fyll i alla uppgifter och sänd ansökan plus färgfoton på fordonet (enligt anvisningar på blankettens baksida) till din klubb ADRESS ser du till vänster. och INTE till MHRF eller Folksam." +
          "Direkt via hemsidan. http://www.mhrf.se/my_page/Insurances Du måste skapa ett konto och då behöver du en mailADRESS. När du skapat kontot loggar du in och följer anvisningarna. Du ska leta upp Classic Mc Moped Club när du väljer vilken klubb som ska hantera din ansökan. Du ska även ha foton tagna på ditt fordon. Logga gärna in och titta vad du behöver innan du gör dig klar för att ansöka. Du skickar inte in ansökan innan den är komplett utan den ligger i ditt konto och du kan göra den klar vid ett annat tillfälle. Gäller ansökan fordon som ska bevaras i ett mycket slitet skick, och där en renovering skulle göra att fordonet förlorar sitt historiska värde eller sin karaktär fyller du även i blanketten Fordon som ska bevaras i orenoverat skick. Läs mer.." +
          "Gäller ansökan fordon som ska bevaras i ett mycket slitet skick, och där en renovering skulle göra att fordonet förlorar sitt historiska värde eller sin karaktär fyller du även i blanketten Fordon som ska bevaras i orenoverat skick. Läs mer.." +
          "Lite beroende på vilken typ av ansökan och eventuell kompletteringar elektronisk ansökan är alltid enklare att hantera då ingen kopiering av foton mm behöver göras. När CMMC fått in din ansökan granskas den och om allt är bra skickas ansökan vidre till MHRF med utlåtande ifrån klubbens försäkrings män, först därefter utfärdas försäkringen. Du kan normalt räkna med max en veckas behandlingstid hos MHRF. Ansökan, protokoll och fotografier arkiveras med eventuella tillägg som du senare sänder in. Skulle något inträffa med ditt fordon har vi alla uppgifter till hands och kan hjälpa dig på bästa sätt. Ett sista tips bara: börja i god tid. Att en bil eller motorcykel blir färdig är ju sällan en överraskning! Under våren har klubbarnas besiktningsmän ofta mycket att göra och det kan ta längre tid än normalt. Teckna trafikförsäkring samma dag du köper ett fordon! Köper du ett fordon som inte är avställt måste du teckna trafikförsäkring från den dag du blir ägare. Ring omedelbart Folksam och teckna en trafikförsäkring så kan vi sedan ordna med överflyttning av premien när du fått din MHRF-försäkring. Du kommer annars att få betala en hög straffavgift till Trafikförsäkringsföreningen."
      },
      { // IN SPECTIONS STAFF
        title: "Besiktningsmän",
        text: "",
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('textBlocks', null, {});
  }
};
