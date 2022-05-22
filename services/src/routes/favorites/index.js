const express = require('express');
const { favoritesController } = require('../../controller');
const authorization = require('../../controller/common');

const router = express.Router();

router.get('/add', authorization, favoritesController.addFavorites);
router.post('/cancel', authorization, favoritesController.cancelFavorites);

module.exports = router;
