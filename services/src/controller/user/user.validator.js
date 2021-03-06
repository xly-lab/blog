const validator = require('validator');

const validateUserInfo = ({ username = '', password = '', email = '' }) => {
  const errMsg = {};
  if (validator.isEmpty(username)) {
    errMsg.username = '用户名不能为空';
  }
  if (validator.isEmpty(password)) {
    errMsg.password = '密码不能为空';
  }

  if (validator.isEmpty(email)) {
    errMsg.email = '邮箱不能为空';
  } else {
    if (!validator.isEmail(email)) {
      errMsg.email = '邮箱格式不正确';
    }
  }
  if (username) {
    delete errMsg.email;
  }
  if (email) {
    delete errMsg.username;
  }
  if (Object.keys(errMsg).length <= 0) {
    return { result: true };
  } else {
    return { result: false, errMsg };
  }
};

module.exports = validateUserInfo;
