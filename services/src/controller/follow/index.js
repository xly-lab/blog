const User = require('../../init/sql/models/user');
const sequelize = require('sequelize');
const sequelizeModel = require('../../init/sql/sequelize');

// 关注
const followUser = async (req, res) => {
  const { username } = req.body;
  try {
    const userBeFocusOn = await User.findOne({
      where: {
        username,
      },
    });
    if (!userBeFocusOn) {
      res.status(401).json({
        code: 0,
        message: '所关注用户不存在',
      });
      return;
    }
    try {
      const userFocusOn = req.loggedUserInfo;
      await userBeFocusOn.addFollowers(userFocusOn);
      res.status(200).json({
        code: 1,
        message: '关注成功',
        data: {
          following: true,
        },
      });
    } catch (error) {
      res.status(401).json({
        code: 0,
        message: '已关注,不需要重复关注',
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }
};

// 取消关注
const followCancel = async (req, res) => {
  const { username } = req.body;
  try {
    const userBeFocusOn = await User.findOne({
      where: {
        username,
      },
    });
    if (!userBeFocusOn) {
      res.status(401).json({
        code: 0,
        message: '所关注用户不存在',
      });
      return;
    }
    try {
      const userFocusOn = req.loggedUserInfo;
      await userBeFocusOn.removeFollowers(userFocusOn);
      res.status(200).json({
        code: 1,
        message: '取消关注成功',
        data: {
          following: false,
        },
      });
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

// 获取作者被关注信息
const getFollowers = async (req, res) => {
  const { email = '', username = '' } = req.body;
  try {
    const followerUsers =
      (await User.findOne({
        where: {
          [sequelize.Op.or]: { username, email },
        },
        include: ['followers'],
      })) || [];

    const followUsers = followerUsers.followers.map((item) => {
      const { password, Followers, ...otherData } = item?.dataValues || {};
      return otherData;
    });

    res.status(200).json({
      code: 1,
      message: 'ok',
      data: {
        total: followUsers.length,
        followUsers,
      },
    });
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }
};

// 当前用户是否关注了作者
const isFollow = async (req, res) => {
  const loggedEmail = req?.authorizedEmail || '';
  const { email = '', username = '' } = req.body;
  try {
    const followerUsers =
      (await User.findOne({
        where: {
          [sequelize.Op.or]: { username, email },
        },
        include: ['followers'],
      })) || [];
    let following = false;
    for (const followUser of followerUsers?.followers) {
      if (followUser.email === loggedEmail) {
        following = true;
        break;
      }
    }

    res.status(200).json({
      code: 1,
      message: 'ok',
      data: {
        ...req.loggedUserInfo,
        following,
      },
    });
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }
};

// 获取作者关注的信息
const beFollowed = async (req, res) => {
  const { email = '', username = '' } = req.body;
  try {
    const followerUsers =
      (await User.findOne({
        where: {
          [sequelize.Op.or]: { username, email },
        },
      })) || [];
    const sql = `SELECT UserEmail from followers WHERE followerEmail = '${followerUsers?.email}'`;

    const result = await sequelizeModel.query(sql, { type: sequelize.QueryTypes.SELECT });

    res.status(200).json({
      code: 0,
      message: '获取作者所关注的信息成功',
      data: {
        total: result.length,
        data: result,
      },
    });
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }
};
// 获取作者被关注的信息

module.exports = {
  followUser,
  followCancel,
  getFollowers,
  isFollow,
  beFollowed,
};
