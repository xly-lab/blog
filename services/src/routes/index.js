const userRouter = require('./users/users');
const createError = require('http-errors');

const initRouter = (app) => {
  app.use('/api/v1/user', userRouter);

  app.use('*', (req, res, next) => {
    next(createError(404));
  });
};

module.exports = initRouter;
