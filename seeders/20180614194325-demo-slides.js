'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('slides', [
      {
        imgUrl: "http://www.airsociety.net/wp-content/uploads/2012/03/rat-bike-air-ride-suspension-bagged-rust-motorcycle-chopper-yamaha-xs650-wallpaper-001.jpg",
        title: "Skönt meetup med mycket mycket öl!",
        text: "Nulla porttitor accumsan tincidunt. Proin egetehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
        align: "right"
      },
      {
        imgUrl: "https://xsoup-staging.s3-us-west-2.amazonaws.com/sites/57e0c7a9e9b8f100033202f3/theme/images/background_image_index.jpg?1495821570",
        title: "Ett mindre underhållande meetup men minst sagt nödvändigt!",
        text: "velit nisi, pretium ut lacinia in, elementum id enim.Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
        align: "left"
      },
      {
        imgUrl: "http://s2.dmcdn.net/Y4IwS.jpg",
        title: "Ett mindre underhållande meetup men minst sagt nödvändigt!",
        text: "Nulla porttitor accumsan tincidunt. Proin eget elit nisi, pretium ut lacinia in, elementum id enim.Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
        align: "center"
      },
      {
        imgUrl: "http://polaris.hs.llnwd.net/o40/ind/2016/img/project-scout/bikes/entries/scout-tank-machine/large/6.jpg",
        title: "Ett mindre underhållande meetup men minst sagt nödvändigt!",
        text: "Nulla poporta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
        align: "left"
      },
      {
        imgUrl: "https://xsoup-staging.s3-us-west-2.amazonaws.com/sites/57e0c7a9e9b8f100033202f3/theme/images/background_image_index.jpg?1495821570",
        title: "Ett mindre underhållande meetup men minst sagt nödvändigt!",
        text: "velit nisi, pretium ut lacinia in, elementum id enim.Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
        align: "right"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('slides', null, {});
  }
};
