const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

// only for dev => delete for prod
router.get('/users', adminController.users_get_all);
router.get('/monkeys', adminController.monkeys_get_all);
router.get('/cupcakes', adminController.cupcakes_get_all);

router.delete('/users/delete/:userID', adminController.delete_user);

module.exports = router;
