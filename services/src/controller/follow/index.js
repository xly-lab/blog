const User = require('../../init/sql/models/user');

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
module.exports = {
  followUser,
  followCancel,
};
