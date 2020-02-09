'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('news', [
      {
        "imgUrl": "dsadsadas",
        "title": "dsad da dsa sda",
        "date": "",
        "text": "{\"blocks\":[{\"key\":\"637gr\",\"text\":\" dsad sa dsa dsa dsadsa ds dsa ds as dasd asd\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('news', null, {});
  }
};
