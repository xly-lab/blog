const express = require('express');
const { tagsController } = require('../../controller');
const authorization = require('../../controller/common');

const router = express.Router();

router.get('/get', authorization, tagsController.getTags);
router.post('/create', authorization, tagsController.createTag);

module.exports = router;
