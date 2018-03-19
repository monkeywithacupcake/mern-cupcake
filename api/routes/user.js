const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');
//const checkAuth = require('../middleware/check-auth');
const tokenAuth = require('../middleware/get_user_from_auth');

// user auth
router.post('/signup', userController.signup_user);
router.post('/login', userController.login_user);
router.get('/finduser', tokenAuth, userController.find_user);
// user monkeys
router.post('/:userID/monkey/new', tokenAuth, userController.create_user_monkey);
router.get('/:userID/monkeys', tokenAuth, userController.get_user_monkeys);

// user cupcakes for the user monkeys
router.post('/:userID/monkey/:monkeyID/cupcake/new', tokenAuth, userController.create_user_cupcake);
router.get('/:userID/cupcakes', tokenAuth, userController.get_user_cupcakes);

// router.get('/current_user', (req, res) => {
//     console.log(req);
//     res.send(req.user);
// });
//router.delete('/:userID', checkAuth, userController.delete_user);

module.exports = router;
