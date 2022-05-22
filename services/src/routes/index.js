const userRouter = require('./users');
const followRouter = require('./follow');
const tagsRouter = require('./tags');
const articleRouter = require('./article');
const favoritesRouter = require('./favorites');
const createError = require('http-errors');

const initRouter = (app) => {
  app.use('/api/v1/user', userRouter);
  app.use('/api/v1/follow', followRouter);
  app.use('/api/v1/tags', tagsRouter);
  app.use('/api/v1/article', articleRouter);
  app.use('/api/v1/favorites', favoritesRouter);

  app.use('*', (req, res, next) => {
    next(createError(404));
  });
};

module.exports = initRouter;
