const express = require('express');
const passport = require('passport');
const router = express.Router();

const userController = require('../controllers/users_controller');

router.get('/profile/:id', passport.checkAuthentication, userController.profile);
router.post('/user_update/:id', passport.checkAuthentication, userController.updateUser);
router.get('/login', userController.login);
router.get('/signup', userController.signup);
router.post('/create-user', userController.createUser);
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/user/login'}
), userController.createSession);
router.get('/sign-out', userController.destroySession);

// Forget password
router.get('/forget-password', userController.forgetPassword);
router.post('/check-password', passport.checkAuthentication, userController.checkPassword);
// Reset password
router.get('/reset-password', passport.checkAuthentication, userController.resetPassword);
router.post('/check-email', userController.checkEmail);

router.get('/send-reset-link/:id', userController.sendResetLink);

// From Mail
router.get('/reset-link/:id/:token',userController.resetLinkCheck);
router.post('/update-password/:id', userController.updatePassword);

router.get('/auth/google', passport.authenticate('google', {scope : ['profile', 'email']}));
router.get('/auth/google/callback',passport.authenticate('google', {failureRedirect: '/user/login'}), userController.createSession);



module.exports = router;