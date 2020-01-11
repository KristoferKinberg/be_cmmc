'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pageBanners', [
      {
        imgUrl: "http://i1.ytimg.com/vi/dzYRrWB2ub8/maxresdefault.jpg",
        title: "medlem",
        subTitle: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh"
      },
      {
        imgUrl: "https://i.ytimg.com/vi/X485bjnoOXI/maxresdefault.jpg",
        title: "om oss",
        subTitle: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh, Proin egetehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet,"
      },
      {
        imgUrl: "https://i.ytimg.com/vi/Bqyv5MHWxAk/maxresdefault.jpg",
        title: "planering",
        subTitle: "Mauris blan elit, eget tincidunt nibh pulvinar  porttitor lectus nibh, Proin  sit amet dui.  ipsum id orci porta dapibus. Lorem ipsum dolor sit amet,"
      },
      {
        imgUrl: "http://polaris.hs.llnwd.net/o40/ind/2018/img/project-scout/bikes/entries/fast-track/large/1.jpg",
        title: "vad vi gjort",
        subTitle: "Mauris blan elit, eget tincidunt nibh pulvinar  porttitor lectus niformativ och bra hemsida där medlemmar kan ta del av information um dolor sit amet,"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pageBanners', null, {});
  }
};
