'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('eventImages', [
      {
        src: "https://icdn6.digitaltrends.com/image/maserati-powered-motorcycle-0001-640x427-c.jpg?ver=1",
        thumbnail: "https://icdn6.digitaltrends.com/image/maserati-powered-motorcycle-0001-640x427-c.jpg?ver=1",
        caption: "Boats (Jeshu John - designerspics.com)",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        galleryEventId: 1,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Norton_Motorcycle.jpg/1200px-Norton_Motorcycle.jpg",
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Norton_Motorcycle.jpg/1200px-Norton_Motorcycle.jpg",
        caption: "Boats (Jeshu John - designerspics.com)",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        galleryEventId: 1,
      },
      {
        src: "https://i.pinimg.com/originals/ef/95/55/ef9555d829ce474ecaffff66f6203eac.jpg",
        thumbnail: "https://i.pinimg.com/originals/ef/95/55/ef9555d829ce474ecaffff66f6203eac.jpg",
        caption: "Boats (Jeshu John - designerspics.com)",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        galleryEventId: 2,
      },
      {
        src: "https://www.paradise-moto.com/pics/data/occasions/images/130-1452-1200x800.jpg",
        thumbnail: "https://www.paradise-moto.com/pics/data/occasions/images/130-1452-1200x800.jpg",
        caption: "Boats (Jeshu John - designerspics.com)",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        galleryEventId: 2,
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5iTam_o2q0NAZfadxl3LRS7qSGvHw_OnXP5_Dd0gZ2ObFzyDP",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5iTam_o2q0NAZfadxl3LRS7qSGvHw_OnXP5_Dd0gZ2ObFzyDP",
        caption: "Boats (Jeshu John - designerspics.com)",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        galleryEventId: 2,
      },
      {
        src: "https://www.motoplanete.com/honda/zoom-700px/Honda-CMX-500-Rebel-2017-700px.jpg",
        thumbnail: "https://www.motoplanete.com/honda/zoom-700px/Honda-CMX-500-Rebel-2017-700px.jpg",
        caption: "Boats (Jeshu John - designerspics.com)",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        galleryEventId: 2,
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqA4AiOoELds-3WZeLZTVl1ZA5aAGLidHHobI0rzeWmwxWttAH",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqA4AiOoELds-3WZeLZTVl1ZA5aAGLidHHobI0rzeWmwxWttAH",
        caption: "Boats (Jeshu John - designerspics.com)",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        galleryEventId: 2,
      },
      {
        src: "http://bournemouth-motorcycles.co.uk/wp-content/uploads/2018/01/scout-gd.jpg",
        thumbnail: "http://bournemouth-motorcycles.co.uk/wp-content/uploads/2018/01/scout-gd.jpg",
        caption: "Boats (Jeshu John - designerspics.com)",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        galleryEventId: 3,
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAAqbykxIq3uLUBAq8Kn38PptZZDYRHe8ChRbBqhLipxdULHOc",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAAqbykxIq3uLUBAq8Kn38PptZZDYRHe8ChRbBqhLipxdULHOc",
        caption: "Boats (Jeshu John - designerspics.com)",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        galleryEventId: 3,
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('eventImages', null, {});
  }
};
