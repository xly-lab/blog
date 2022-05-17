const User = require('../../init/sql/models/user');

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
      const userFocusOn = req.findResult;
      await userBeFocusOn.addFollowers(userFocusOn);
      res.status(200).json({
        code: 1,
        message: '关注成功',
        data: {
          following: true,
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
      const userFocusOn = req.findResult;
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

// 获取关注信息
const getFollowers = async (req, res) => {
  const email = req?.authorizedEmail || '';
  const { username } = req.body;
  try {
    const followerUsers =
      (await User.findOne({
        where: { username },
        include: ['followers'],
      })) || [];
    let following = false;
    for (const followUser of followerUsers?.followers) {
      if (followUser.email === email) {
        following = true;
        break;
      }
    }
    const followUsers = followerUsers.followers.map((item) => {
      const { password, Followers, ...otherData } = item?.dataValues || {};
      return otherData;
    });

    res.status(200).json({
      code: 1,
      message: 'ok',
      data: {
        ...req.findResult,
        following,
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
module.exports = {
  followUser,
  followCancel,
  getFollowers,
};
