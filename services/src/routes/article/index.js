const express = require('express');
const { articleController } = require('../../controller');
const authorization = require('../../controller/common');

const router = express.Router();

router.post('/create', authorization, articleController.createArticles);
router.post('/update', authorization, articleController.updateArticle);
router.post('/delete', authorization, articleController.deleteArticle);
router.get('/getMore', articleController.getMoreArticles);
router.get('/get', articleController.getArticle);
router.get('/getOwner', articleController.getOwnerArticles);

module.exports = router;
