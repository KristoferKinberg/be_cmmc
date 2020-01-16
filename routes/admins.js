'use strict';

const auth = require("../core/auth");
const { ALL, SPECIFIC, CREATE, UPDATE, DELETE } = require('../constants');
const { ADMINS } = require('../models/modelConstants');
const { applyRoutes } = require('../core/applyRoutes');
const {registerInvite, getInviteData, registerUser, loginUser, resetPasswordRequest, resetPassword, removeUser,
  getUsers, getInvited, removeInvited, resendInvite } = require("../db/admin");

const router = applyRoutes(ADMINS, [ ALL, SPECIFIC, CREATE, UPDATE, DELETE ]);

router.post("/api/admin/send_invite/", auth.jwtAuth, registerInvite);
router.post("/api/admin/resend_invite/:id", auth.jwtAuth, resendInvite);
router.post("/api/admin/invite/", registerUser);
router.post("/api/admin/login/", loginUser);
router.post("/api/admin/request_reset_password", resetPasswordRequest);
router.post("/api/admin/reset_password", resetPassword);

router.get("/api/admin/invite/:token", getInviteData);
router.get("/api/admin/", auth.jwtAuth, getUsers);
router.get("/api/invited", auth.jwtAuth, getInvited);

router.delete("/api/invited/:id", auth.jwtAuth, removeInvited);
router.delete("/api/admin/:id", auth.jwtAuth, removeUser);

module.exports = router;
