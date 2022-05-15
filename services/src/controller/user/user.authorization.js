const User = require('../../init/sql/models/user');
const jwt = require('../../utils/jwt');

const authorization = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  try {
    const { email } = await jwt.decode(authorization.split(' ')[1]);
    req.authorizedEmail = email;
    try {
      const findResult = await User.findByPk(email);
      req.findResult = findResult;
      if (findResult) {
        next();
      } else {
        res.status(401).json({
          code: 0,
          message: '用户未授权',
        });
      }
    } catch (error) {
      res.status(500).json({
        code: 0,
        message: '内部异常:' + error.message,
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }
};

module.exports = authorization;
