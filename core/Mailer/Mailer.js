const nodemailer = require("nodemailer");

async function main(mailTemplate){
  const theTransporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.googlemail.com', // Gmail Host
    port: 465, // Port
    secure: true, // this is true as port is 465
    auth: {
      user: 'ccf@bundler.se',
      pass: 'ajgwbkybxlbenhwr'
    }
  });

  const info = await theTransporter.sendMail(mailTemplate);
  console.log("Message sent: %s", info.messageId);
}

module.exports = {
  sendMail: mailTemplate => main(mailTemplate).catch(console.error),
};
