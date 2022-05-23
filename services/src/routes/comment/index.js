const express = require('express');
const { commentController } = require('../../controller');
const authorization = require('../../controller/common');

const router = express.Router();

router.get('/create', authorization, commentController.createComment);
router.post('/delete', authorization, commentController.deleteComment);
router.post('/get', commentController.getCommentList);

module.exports = router;
