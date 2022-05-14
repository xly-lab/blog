const userRouter = require('./users/users');

const initRouter = (app) => {
  app.use('/api/v1/user', userRouter);
};

module.exports = initRouter;
