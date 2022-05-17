const User = require('../../init/sql/models/user');
const validateUserInfo = require('./user.validator');
const makeToken = require('./user.utils');

// 获取用户信息
const getInfo = async (req, res) => {
  const findResult = req.findResult || {};
  try {
    if (!findResult) {
      res.status(401).json({
        code: 0,
        message: '用户未注册',
      });
      return;
    }
    const { password, ...otherBackData } = findResult?.dataValues || {};
    res.status(200).json({
      code: 1,
      message: 'ok',
      data: {
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

// 用户注册
const create = async (req, res) => {
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

    if (findResult) {
      res.status(401).json({
        code: 0,
        message: '用户已注册',
      });
      return;
    }
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }

  try {
    const { username, password, email, avatar, dio } = user;
    const createResult = await User.create({ username, password, email, avatar, dio });
    makeToken(createResult?.dataValues, res, '用户注册成功');
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }
};

// 用户登录
const login = async (req, res) => {
  const user = req?.body || { username: '' };
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

    if (findResult?.username !== user?.username) {
      res.status(401).json({
        code: 0,
        message: '用户信息不匹配',
      });
      return;
    }

    if (!findResult) {
      res.status(401).json({
        code: 0,
        message: '用户未注册',
      });
      return;
    }

    const { password } = findResult?.dataValues || {};

    if (password !== user.password) {
      res.status(403).json({
        code: 0,
        message: '密码错误',
      });
      return;
    }
    makeToken(findResult?.dataValues, res, '登录成功');
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }
};

const update = async (req, res) => {
  const user = req?.body || {};
  const email = req?.authorizedEmail || '';
  try {
    const result = await User.update(user, {
      where: {
        email,
      },
    });
    if (String(result) === '1') {
      try {
        const findResult = await User.findByPk(email || '');
        makeToken(findResult?.dataValues, res, '用户信息更新成功');
      } catch (error) {}
    }
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }
};

module.exports = {
  getInfo,
  create,
  login,
  update,
};
