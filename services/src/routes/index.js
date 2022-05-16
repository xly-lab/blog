const userRouter = require('./users');
const followRouter = require('./follow');
const createError = require('http-errors');

const initRouter = (app) => {
  app.use('/api/v1/user', userRouter);
  app.use('/api/v1/follow', followRouter);

  app.use('*', (req, res, next) => {
    next(createError(404));
  });
};

module.exports = initRouter;
