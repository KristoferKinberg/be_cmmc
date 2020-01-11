'use strict';

module.exports = (sequelize, { INTEGER }) => sequelize.define('subtitlesUsers', {
  subtitleId: INTEGER,
  userId: INTEGER
}, {});
