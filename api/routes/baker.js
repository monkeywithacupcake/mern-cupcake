const express = require('express');
const router = express.Router();

const bakerController = require('../controllers/baker');
const tokenAuth = require('../middleware/get_user_from_auth');

// user auth
router.post('/signup', bakerController.signup_baker);
router.post('/login', bakerController.login_baker);
router.get('/findbaker', tokenAuth, bakerController.find_baker);

module.exports = router;
