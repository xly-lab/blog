const userController = require('./user');
const followController = require('./follow');
const tagsController = require('./tags');
const articleController = require('./article');
const favoritesController = require('./favorites');
const commentController = require('./comment');

module.exports = {
  userController,
  followController,
  tagsController,
  articleController,
  favoritesController,
  commentController,
};
