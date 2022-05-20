const express = require('express');
const { articleController } = require('../../controller');
const authorization = require('../../controller/common');

const router = express.Router();

router.post('/create', authorization, articleController.createArticles);

module.exports = router;
