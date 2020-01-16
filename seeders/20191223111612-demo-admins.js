'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('admins', [
      {
        "firstName": 'kristofer',
        "lastName": 'kinberg',
        "password": '$2b$10$lNeRVRVw5MrfrvRxqnPFU./Pd7OFqfzpZ4OSIxi0EnYcFQayK3VI6',
        "email": 'kristofer.kinberg@gmail.com',
        "imageUrl": '',
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "firstName": 'kristofer',
        "lastName": 'kinberg',
        "password": '$2b$10$lNeRVRVw5MrfrvRxqnPFU./Pd7OFqfzpZ4OSIxi0EnYcFQayK3VI6',
        "email": 'kristofer@bundler.se',
        "imageUrl": '',
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('admins', null, {});
  }
};
