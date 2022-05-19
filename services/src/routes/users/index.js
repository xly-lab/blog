const express = require('express');
const { userController } = require('../../controller');
const authorization = require('../../controller/common');

const router = express.Router();

router.post('/register', userController.create);
router.post('/login', userController.login);
router.get('/getInfo', authorization, userController.getInfo);
router.post('/update', authorization, userController.update);

module.exports = router;
