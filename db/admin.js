const { ADMINS, INVITES } = require('../models/modelConstants');
const models = require('../models');
const mailer = require("../core/Mailer/Mailer");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const jwtHandler = require("../core/jwtHandler");
const {generateInviteEmail, generatePasswordResetMail} = require("../core/Mailer/EmailTemplates");

const tokenOptions = {
  issuer: 'CMMC',
  subject: 'registerAdmin',
  audience: 'http://localhost:3000',
};

/**
 * Create an invite
 * @param email
 * @param res
 * @returns {Promise<T>}
 */
const registerInvite = ({ body: { email }}, res) => {
  return models[INVITES].findOne({ where: { email }})
    .then(result => {
      if (result === null) {

        const inviteToken = jwtHandler.sign({}, tokenOptions);

        return models[INVITES].create({ email, inviteToken: inviteToken })
          .then(({ email, id }) => {
            mailer.sendMail(generateInviteEmail(email, inviteToken));
            res.send({ inviteStatus: 1, result: { email, id } })
          })
          .catch(error => console.log(error));
      } else {
        res.send({ inviteStatus: 2, message: 'Användare redan inbjuden' })
      }
    });
};

/**
 * Reset password
 * @param password
 * @param token
 * @param res
 * @returns {Promise<T>}
 */
const resetPassword = ({ body: { password, token }}, res) => {
  const tokenRes = jwtHandler.verify(token, tokenOptions);

  if (!tokenRes) res.send({ error: true, message: 'Invalid Email' });
  if (tokenRes.exp > new Date().getTime()) res.send({ error: true, message: 'Token expired. Contact a CMMC admin' });

  return models[INVITES].findOne({ where: { inviteToken: token }})
    .then(result => {
      if (result !== null) {
        crypter(password).then(pass => {
          models[INVITES].destroy({ where: { inviteToken: token }})
            .then(destroyRes => {
              models[ADMINS].update(
                { password: pass },
                { where: { email: result.email }}
              )
                .then(() => res.send({status: 1, message: 'Password updated'}))
                .catch(error => res.send(error));
            })
            .catch(error => res.send(error));
        });
      }
    }).catch(error => res.send(error));
};

/**
 * Generate reset token and sends it to a mail
 * @param email
 * @param res
 * @returns {Promise<T>}
 */
const resetPasswordRequest = ({ body: { email }}, res) => {
  return models.User.findOne({ where: { email }})
    .then(result => {
      if(result !== null) {
        const inviteToken = jwtHandler.sign({}, tokenOptions);

        return models[INVITES].create({ email, inviteToken })
          .then(({ email }) => {
            mailer.sendMail(generatePasswordResetMail(email, inviteToken));
            res.send({ status: 1, result: email })
          })
          .catch(error => console.log(error));
      }
    }).catch(error => {
      log(error);
      res.send(error)
    });
};

/**
 * Get invite data by token
 * @param token
 * @param res
 * @returns {Promise<T | void>}
 */
const getInviteData = ({ params: { token }}, res) => models[INVITES].findOne({ where: { inviteToken: token }})
  .then(result => res.send({ result }))
  .catch(error => console.log(error));

/**
 * Crypts a string
 * @param password
 * @returns {Promise<void|*>}
 */
const crypter = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

/**
 * Register a new user
 * @param token
 * @param password
 * @param firstName
 * @param lastName
 * @param params
 * @param res
 * @returns {Promise<T | void>}
 */
const registerUser = ({ body: { token, password, firstName, lastName }, params}, res) => {
  return models[INVITES].findOne({ where: { inviteToken: token }})
    .then(({ email }) => {
      models[ADMINS].findOne({ where: { email }}).then(existingUser => {
        const tokenRes = jwtHandler.verify(token, tokenOptions);

        if (existingUser) res.send({ error: true, message: 'Email already registered.' });
        if (!tokenRes) res.send({ error: true, message: 'Invalid Email' });
        if (tokenRes.exp > new Date().getTime()) res.send({ error: true, message: 'Token expired. Contact a CMMC admin' });

        crypter(password).then(pass => {
          models[INVITES].destroy({ where: { inviteToken: token }})
            .then(() => {
              models[ADMINS].create({
                firstName,
                lastName,
                email,
                password: pass,
                googleId: '',
                imageUrl: '',
              })
                .then(([usr, created]) => res.send({ error: false, message: 'User succesfully created' })) // TODO: Verkar inte skicka tillbaka något..? :S
                .catch(error => res.send(error));
            }).catch(error => res.send(error));
        });
      }).catch(error => res.send({error, msg: 'this went to shit..'}));
    }).catch(error => console.log(error));
};

/**
 * Logs in a user
 * @param email
 * @param password
 * @param res
 */
const loginUser = ({ body: { email, password }}, res) => {
  // return crypter(password).then(pass => res.send({ pass })).catch(error => console.log(error));

  models[ADMINS].findOne({ where: { email }})
    .then(userData => {
      if (!userData) return res.send({ error: true, msg: 'Wrong email or password.' });

      bcrypt.compare(password, userData.password,  (err, result) => {
        if (result === true) {
          const token = jwt.sign(
            { email },
            process.env.JWT
          );

          return res.send({ error: false, msg: 'Yaay, welcome!', token });
        } else {
          return res.send({ error: true, msg: 'Wrong email or password.' });
        }
      })
    })
    .catch((error) => res.send({ error: true, msg: 'An error occured' }));
};

/**
 * Get users
 * @param req
 * @param res
 * @returns {Promise<T>}
 */
const getUsers = (req, res) => models[ADMINS].findAll()
  .then(data => res.send({ error: false, data}))
  .catch(error => res.send({ error: true, msg: error }));

/**
 * Remove user
 * @param id
 * @param res
 * @returns {Promise<T>}
 */
const removeUser = ({ params: { id }}, res) => models[ADMINS].destroy({ where: { id }})
  .then(result => res.send({ error: false, msg: 'Admin deleted.', result }))
  .catch(error => res.send({ error: true, msg: error  }));

/**
 * Get invited
 * @param req
 * @param res
 * @returns {Promise<T>}
 */
const getInvited = (req, res) => models[INVITES].findAll()
  .then(data => res.send({ error: false, data: data.map(({ email, id }) => ({ email, id })) }))
  .catch(error => res.send({ error: true, msg: error }));

/**
 * Remove invited
 * @param id
 * @param res
 * @returns {Promise<T>}
 */
const removeInvited = ({ params: { id }}, res) => models[INVITES].destroy({ where: { id }})
  .then(result => res.send({ error: false, msg: 'Invite removed', result}))
  .catch(error => res.send({ error: true, msg: error }));

/**
 * Resend invite
 * @param id
 * @param res
 */
const resendInvite = ({ params: { id }}, res) => {
  const inviteToken = jwtHandler.sign({}, tokenOptions);
  return models[INVITES].update({ inviteToken }, { where: { id }})
    .then(() => {
      models[INVITES].findOne({ where: { id }})
        .then(({ email }) => {
          mailer.sendMail(generateInviteEmail(email, inviteToken));
          res.send({ inviteStatus: 1, result: { email, id } })
        })

    })
    .catch(error => console.log(error));
};

module.exports = {
  registerInvite,
  getInviteData,
  registerUser,
  loginUser,
  resetPassword,
  resetPasswordRequest,
  removeUser,
  getUsers,
  getInvited,
  removeInvited,
  resendInvite,
};
