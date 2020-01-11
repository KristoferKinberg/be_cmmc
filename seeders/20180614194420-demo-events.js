'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('events', [
      {
        userId: 2,
        date: "17 January, 2017",
        title: "Ölhävartävling",
        text: "Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
        imgUrl: "https://www.motointro.com/sites/motointro.com/files/styles/1000_1x_/public/images/2017/06/img_1288.jpg?itok=27AErToC&fc=50,50"
      },
      {
        userId: 5,
        date: "24 Februari, 2017",
        title: "Nykterhestlösningar",
        text: "Donec sollicitudin molestie malesuada. Curabitu ultricies ligula sed magna dictum porta.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
        imgUrl: "http://polaris.hs.llnwd.net/o40/ind/2016/img/project-scout/bikes/entries/scout-tank-machine/large/6.jpg"
      },
      {
        userId: 5,
        date: "17 January, 2017",
        title: "Sick meetup med öl",
        text: "Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
        imgUrl: "https://www.northernontario.travel/sites/default/files/styles/cover_proportional/public/_MG_5813.jpg?itok=lmdRCOhp"
      },
      {
        userId: 2,
        date: "24 Februari, 2017",
        title: "CMMC löparLoppetr",
        text: "Donec sollicitudin molestie malesuada. Curabitu ultricies ligula sed magna dictum porta.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
        imgUrl: "https://i.ytimg.com/vi/jQon6TX01rc/maxresdefault.jpg"
      },
      {
        userId: 1,
        date: "17 January, 2017",
        title: "Ölhävartävling",
        text: "Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
        imgUrl: "https://www.motointro.com/sites/motointro.com/files/styles/1000_1x_/public/images/2017/06/img_1288.jpg?itok=27AErToC&fc=50,50"
      },
      {
        userId: 2,
        date: "24 Februari, 2017",
        title: "Nykterhestlösningar",
        text: "Donec sollicitudin molestie malesuada. Curabitu ultricies ligula sed magna dictum porta.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
        imgUrl: "http://polaris.hs.llnwd.net/o40/ind/2016/img/project-scout/bikes/entries/scout-tank-machine/large/6.jpg"
      },
      {
        userId: 5,
        date: "17 January, 2017",
        title: "Sick meetup med öl",
        text: "Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
        imgUrl: "https://www.northernontario.travel/sites/default/files/styles/cover_proportional/public/_MG_5813.jpg?itok=lmdRCOhp"
      },
      {
        userId: 5,
        date: "24 Februari, 2017",
        title: "CMMC löparLoppetr",
        text: "Donec sollicitudin molestie malesuada. Curabitu ultricies ligula sed magna dictum porta.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
        imgUrl: "https://i.ytimg.com/vi/jQon6TX01rc/maxresdefault.jpg"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('events', null, {});
  }
};
