const validator = require('validator');

const validateArticle = ({ title = '', description = '', body = '' }) => {
  const errMsg = {};
  if (validator.isEmpty(title)) {
    errMsg.title = '标题不能为空';
  }
  if (validator.isEmpty(description)) {
    errMsg.description = '描述不能为空';
  }

  if (validator.isEmpty(body)) {
    errMsg.body = '内容不能为空';
  }

  if (Object.keys(errMsg).length <= 0) {
    return { result: true };
  } else {
    return { result: false, errMsg };
  }
};

module.exports = validateArticle;
