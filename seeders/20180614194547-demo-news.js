'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('news', [
      {
        imgUrl: "http://images.mcn.bauercdn.com/forumgallery/64/449864/116192_389671.jpg",
        title: "Ett men minst sagt nödvändigt!",
        date: "25 Juli, 2017",
        text: "Nulla poporta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
      },
      {
        imgUrl: 'null',
        title: "Ny MC införskaffad för dragrace!",
        date: "12 Aug, 2017",
        text: "Nulla poporta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
      },
      {
        imgUrl: "http://images.mcn.bauercdn.com/forumgallery/64/449864/116192_389671.jpg",
        title: "Ett men minst sagt nödvändigt!",
        date: "25 Juli, 2017",
        text: "Nulla poporta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
      },
      {
        imgUrl: "http://images.mcn.bauercdn.com/forumgallery/64/449864/116192_389671.jpg",
        title: "Ett men minst sagt nödvändigt!",
        date: "25 Juli, 2017",
        text: "Nulla poporta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
      },
      {
        imgUrl: 'nothing :D',
        title: "dsdasdasdsad sad asd sa",
        date: "25 Juli, 2017",
        text: "ds adsa dsad as dsad as dsa dsaas d ads",
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('news', null, {});
  }
};
