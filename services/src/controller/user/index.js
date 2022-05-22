const User = require('../../init/sql/models/user');
const validateUserInfo = require('./user.validator');
const sequelize = require('sequelize');
const makeToken = require('./user.utils');

// 获取用户信息
const getInfo = async (req, res) => {
  const loggedUserInfo = req.loggedUserInfo || {};
  try {
    if (!loggedUserInfo) {
      res.status(401).json({
        code: 0,
        message: '用户未注册',
      });
      return;
    }
    res.status(200).json({
      code: 1,
      message: 'ok',
      data: {
        ...(loggedUserInfo || {}),
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
    const user = await User.findByPk(user?.email || '');

    if (user) {
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
  const { username = '', email = '', password = '' } = req?.body;
  const { result, errMsg } = validateUserInfo({ username, email, password });
  if (!result) {
    res.status(401).json({
      code: 0,
      message: String(Object.values(errMsg)),
    });
    return;
  }
  try {
    const user = await User.findOne({
      where: {
        [sequelize.Op.or]: { email, username },
      },
    });
    if (!user) {
      res.status(401).json({
        code: 0,
        message: '用户未注册',
      });
      return;
    }

    const { password: oldPass } = user?.dataValues || {};

    if (oldPass !== password) {
      res.status(403).json({
        code: 0,
        message: '密码错误',
      });
      return;
    }
    makeToken(user?.dataValues, res, '登录成功');
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }
};

const update = async (req, res) => {
  const { username = '', password = '', email = '', avatar = '', dio = '' } = req?.body || {};
  const loggedEmail = req?.authorizedEmail || '';
  if (loggedEmail !== email) {
    res.status(401).json({
      code: 0,
      message: '信息不匹配',
    });
    return;
  }
  const { result, errMsg } = validateUserInfo({ username, email, password });
  if (!result) {
    res.status(401).json({
      code: 0,
      message: String(Object.values(errMsg)),
    });
    return;
  }
  try {
    const updateResult = await User.update(
      { username, password, avatar, dio },
      {
        where: {
          email,
        },
      }
    );
    if (String(updateResult) === '1') {
      const user = await User.findByPk(email || '');
      makeToken(user?.dataValues, res, '用户信息更新成功');
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
