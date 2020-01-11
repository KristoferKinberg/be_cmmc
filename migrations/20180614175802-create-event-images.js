'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('eventImages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      galleryEventId: {
        type: Sequelize.INTEGER
      },
      src: {
        type: Sequelize.TEXT
      },
      thumbnail: {
        type: Sequelize.TEXT
      },
      caption: {
        type: Sequelize.STRING
      },
      thumbnailWidth: {
        type: Sequelize.INTEGER
      },
      thumbnailHeight: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('eventImages');
  }
};