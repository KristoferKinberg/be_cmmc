'use strict';

const express = require('express');
const models = require('../models');
const {derivePlainData} = require("../helpers");
const  { getAllList } = require('../core/basicQueries');
const { EVENT_IMAGES, GALLERY_EVENTS, GALLERY_YEARS } = require('../models/modelConstants');
const router = express.Router();

router.get('/api/past-events', (req, res, next) => {
  getAllList([ EVENT_IMAGES, GALLERY_EVENTS, GALLERY_YEARS ])
    .then(([ eventImagesObj, galleryEventsObj, galleryYears ]) => {
      const eventImages = derivePlainData(eventImagesObj);
      const galleryEvents = derivePlainData(galleryEventsObj);

      res.send({
        eventImages,
        galleryEvents: galleryEvents.map(galleryEvent => ({
          ...galleryEvent,
          eventImages: eventImages
            .filter(({ galleryEventId }) => galleryEventId === galleryEvent.id)
            .map(({ id }) => id),
        })),
        galleryYears });
    });
});

module.exports = router;
