const User = require('../../../init/sql/models/user');
const validateUserInfo = require('./user.validator');
const jwt = require('../../utils/jwt');
const getUserInfo = async (req, res) => {
  res.json({
    code: 1,
    message: '请求成功',
  });
};

const createUser = async (req, res) => {
  res.json({
    code: 1,
    message: '请求成功',
  });
};

const login = async (req, res) => {
  const user = req?.body || {};
  const { result, errMsg } = validateUserInfo(user);
  if (!result) {
    res.status(401).json({
      code: 0,
      message: String(Object.values(errMsg)),
    });
    return;
  }
  try {
    const findResult = await User.findByPk(user?.email || '');

    if (!findResult) {
      res.status(401).json({
        code: 0,
        message: '用户未注册',
      });
      return;
    }

    const token = await jwt.sign(user);
    const { password, ...otherBackData } = user;

    res.status(200).json({
      code: 1,
      message: '登录成功',
      data: {
        token,
        ...otherBackData,
      },
    });
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }
};

module.exports = {
  getUserInfo,
  createUser,
  login,
};
