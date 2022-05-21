const express = require('express');
const { articleController } = require('../../controller');
const authorization = require('../../controller/common');

const router = express.Router();

router.post('/create', authorization, articleController.createArticles);
router.get('/get', articleController.getArticles);

module.exports = router;
