const express = require('express');
const { articleController } = require('../../controller');
const authorization = require('../../controller/common');

const router = express.Router();

router.post('/create', authorization, articleController.createArticles);
router.post('/update', authorization, articleController.updateArticle);
router.post('/delete', authorization, articleController.deleteArticle);
router.post('/getMore', articleController.getMoreArticles);
router.post('/get', articleController.getArticle);
router.post('/getAuthor', articleController.getAuthorArticles);
router.post('/getFavorites', articleController.getFavoriteArticles);

module.exports = router;
