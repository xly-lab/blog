const express = require('express');
const { followController } = require('../../controller');
const authorization = require('../../controller/user/user.authorization');

const router = express.Router();

router.post('/user', authorization, followController.followUser);
router.post('/cancel', authorization, followController.followCancel);

module.exports = router;
