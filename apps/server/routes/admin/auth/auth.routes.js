// server/routes/auth.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../../../controllers/admin/auth/auth.controller');
const { authenticate, optionalAuth } = require('../../../middleware/auth.middleware');


router.post('/signup', controller.signUp);
router.post('/signin', controller.signIn);
router.post('/signout', controller.signOut);
router.get('/me', authenticate, controller.getCurrentuser);
router.put('/profile', authenticate, controller.updateProfile);
router.put('/change-password', authenticate, controller.changePassword);
router.get('/verify', authenticate, controller.verifyToken);

module.exports = router;