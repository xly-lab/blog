const express = require('express');
const { userController } = require('../../controller');
const authorization = require('../../controller/user/user.authorization');

const router = express.Router();

router.post('/register', userController.createUser);
router.post('/login', userController.login);
router.get('/getInfo', authorization, userController.getInfo);

module.exports = router;
