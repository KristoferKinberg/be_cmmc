'use strict';

module.exports = (sequelize, { STRING, INTEGER }) => sequelize.define('eventImages', {
  src: STRING,
  galleryEventId: INTEGER,
  thumbnail: STRING,
  caption: STRING,
  thumbnailWidth: INTEGER,
  thumbnailHeight: INTEGER
}, {});
