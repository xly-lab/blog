const jwt = require('../../utils/jwt');
const makeToken = async (user, res, message) => {
  try {
    const token = await jwt.sign(user);
    const { password, ...otherBackData } = user;

    res.status(200).json({
      code: 1,
      message,
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

module.exports = makeToken;
