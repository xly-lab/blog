const User = require('../../init/sql/models/user');
const jwt = require('../../utils/jwt');

const authorization = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  try {
    if (!authorization) {
      res.status(200).json({
        code: 0,
        message: '当前未登录',
      });
      return;
    }
    const { email } = await jwt.decode(authorization.split(' ')[1]);
    req.authorizedEmail = email;
    try {
      const findResult = await User.findByPk(email);
      const { password, ...otherLoginUser } = findResult.dataValues;
      req.findResult = otherLoginUser;
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
