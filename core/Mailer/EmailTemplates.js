const generateInviteEmail = (email, token) => ({
  from: '<ccf@bundler.se>', // sender address
  to: email, // list of receivers
  // to: "kristofer.kinberg@gmail.com", // list of receivers
  subject: "Invitation to administrative rights for CMMC",
  text: `
      Hello!
      
      You have been invited to become an administrator for CMMC. 
      Follow the link below to complete the registration:
      
      http://localhost:3000/admin/register/${tolken}
      
      Best regards,
      Creative Coast Administration
    `,
  attachments: [],
});

const generatePasswordResetMail = (email, token) => ({
  from: '<ccf@bundler.se>', // sender address
  to: email, // list of receivers
  // to: "kristofer.kinberg@gmail.com", // list of receivers
  subject: "Password reset for CMMC",
  text: `
      Hello!
      
      Down below you can find a link where you can reset your password. If you haven't 
      requested this change, feel free to ignore this email.
      
      http://localhost:3000/admin/password_reset/${token}
      
      Best regards,
      Creative Coast Administration
    `,
  attachments: [],
});

module.exports = {
  generateInviteEmail,
  generatePasswordResetMail
};
