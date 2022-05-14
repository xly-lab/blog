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

module.exports = {
  getUserInfo,
  createUser,
};
