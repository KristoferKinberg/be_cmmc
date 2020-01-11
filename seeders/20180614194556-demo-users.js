'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: "Per Persson Landkvist",
        email: "perperssonlandkvist@cmmc.se",
        adress: "",
        phone: "",
        imgUrl: "https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg"
      },
      {
        name: "Peter Möller",
        email: "petermöller@cmmc.se",
        adress: "",
        phone: "",
        imgUrl: "https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg"
      },
      {
        name: "Lars Almqvist",
        email: "larsalmqvist@cmmc.se",
        adress: "",
        phone: "",
        imgUrl: "https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg"
      },
      {
        name: "Alice Borg",
        email: "aliceborg@cmmc.se",
        adress: "",
        phone: "",
        imgUrl: "https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg"
      },
      {
        name: "Jan Johansson",
        email: "janjohansson@cmmc.se",
        adress: "",
        phone: "",
        imgUrl: "https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg"
      },
      {
        name: "Kjell Johansen",
        email: "kjelljohansen@cmmc.se",
        adress: "",
        phone: "",
        imgUrl: "https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg"
      },
      {
        name: "Sten Karlsson",
        email: "stenkarlsson@cmmc.se",
        adress: "",
        phone: "",
        imgUrl: "https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg"
      },
      {
        name: "Mats Nyborg",
        email: "matsnyborg@cmmc.se",
        adress: "",
        phone: "",
        imgUrl: "https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg"
      },
      {
        name: "Johan Svensson",
        email: "johansvensson@cmmc.se",
        adress: "",
        phone: "",
        imgUrl: "https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg"
      },
      {
        name: "Lard Davidson",
        email: "sekreterare@cmmc.se",
        adress: "",
        phone: "",
        imgUrl: "https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg"
      },
      {
        name: "Lars 'Zigge' Sigurdh",
        email: "kassor@cmmc.se",
        adress: "",
        phone: "",
        imgUrl: "https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg"
      },
      {
        name: "Sara Borg",
        email: "saraborg@cmmc.se",
        adress: "",
        phone: "",
        imgUrl: "https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg"
      },
      {
        name: "Angelica Sigurdh",
        email: "angelicasigurdhsaraborg@cmmc.se",
        adress: "",
        phone: "",
        imgUrl: "https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
