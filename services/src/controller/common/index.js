const User = require('../../init/sql/models/user');
const jwt = require('../../utils/jwt');

const authorization = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  if (!authorization) {
    res.status(401).json({
      code: 0,
      message: '当前未登录',
    });
    return;
  }
  try {
    const { email } = await jwt.decode(authorization.split(' ')[1]);
    req.authorizedEmail = email;
  } catch (error) {
    res.status(401).json({
      code: 0,
      message: '验证已过期或验证有误！',
    });
    return;
  }
  try {
    try {
      const user = await User.findByPk(req.authorizedEmail, {
        attributes: { exclude: ['password'] },
      });
      req.findResult = user.dataValues;
      if (user) {
        next();
      } else {
        res.status(401).json({
          code: 0,
          message: '用户不存在或未授权',
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
