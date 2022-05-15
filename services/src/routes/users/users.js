const express = require('express');
const { userController } = require('../../controller');

const router = express.Router();

router.get('/', userController.getUserInfo);

router.post('/', userController.createUser);
router.post('/login', userController.login);

module.exports = router;
