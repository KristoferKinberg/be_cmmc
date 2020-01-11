'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('memberApplications', [
      {
        imgUrl: "http://i1.ytimg.com/vi/dzYRrWB2ub8/maxresdefault.jpg",
        modalImgUrl: "http://acmg.seas.harvard.edu/group_photos/group_photo_2016.jpg",
        text: "dsMedlemsavgiften till CMMC för 2017 är 150:- SEK Ange ditt namn i meddelande så är det lättare att hitta rätt betalning. Eller som vanligt till bankgiro 747-8480. Önskar du en mall som du fyller i och skickar in i ett brev. Kan du få en här för utskrift"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('memberApplications', null, {});
  }
};
