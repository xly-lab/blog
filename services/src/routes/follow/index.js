const express = require('express');
const { followController } = require('../../controller');
const authorization = require('../../controller/common');

const router = express.Router();

router.post('/user', authorization, followController.followUser);
router.post('/cancel', authorization, followController.followCancel);
router.post('/is', authorization, followController.isFollow);
router.post('/get', followController.getFollowers);
router.post('/be', followController.beFollowed);

module.exports = router;
