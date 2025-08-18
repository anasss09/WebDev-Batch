const express = require('express')
const router = express.Router()
const userController = require('../controller/user');
const isLoggedIn = require('../middleware/isLoggedIn');
const isLoggedOut = require('../middleware/isLoggedOut')

router.get("/", userController.getHome);
router.get("/login", userController.getLogin);
router.get("/signup", isLoggedOut, userController.getSignup);
router.get('/profile', isLoggedIn, userController.getProfile)
router.get('/logout', isLoggedIn, userController.getLogout)

router.post("/signup", isLoggedOut, userController.postSignUp);
router.post('/login', isLoggedOut, userController.postLogin)

module.exports = router