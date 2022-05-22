const Article = require('../../init/sql/models/article');
const User = require('../../init/sql/models/user');

// 添加喜欢
const addFavorites = async (req, res) => {
  const loggedEmail = req?.authorizedEmail || '';
  const { slug = '' } = req.body;
  try {
    const article = await Article.findByPk(slug);
    if (!article) {
      res.status(404).json({
        code: 0,
        message: '文章不存在',
      });
      return;
    }
    const user = await User.findByPk(loggedEmail);
    const addResult = await article.addUser(user.email);
    if (addResult) {
      res.status(200).json({
        code: 1,
        message: '喜欢',
      });
      return;
    }
    res.status(403).json({
      code: 0,
      message: '喜欢失败',
    });
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }
};

// 取消喜欢
const cancelFavorites = async (req, res) => {
  const loggedEmail = req?.authorizedEmail || '';
  const { slug = '' } = req.body;
  try {
    const article = await Article.findByPk(slug);
    if (!article) {
      res.status(404).json({
        code: 0,
        message: '文章不存在',
      });
    }
    const user = await User.findByPk(loggedEmail);

    console.log(user.email);

    const removeResult = await article.removeUsers(user.email);

    if (removeResult) {
      res.status(200).json({
        code: 1,
        message: '取消喜欢',
      });
      return;
    }
    res.status(400).json({
      code: 0,
      message: '取消失败',
    });
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }
};

module.exports = {
  addFavorites,
  cancelFavorites,
};
