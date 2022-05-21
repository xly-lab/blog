const express = require('express');
const { articleController } = require('../../controller');
const authorization = require('../../controller/common');

const router = express.Router();

router.post('/create', authorization, articleController.createArticles);
router.get('/getMore', articleController.getMoreArticles);
router.get('/get', articleController.getArticle);
router.get('/getOwner', articleController.getOwnerArticles);
router.post('/update', authorization, articleController.updateArticle);

module.exports = router;
