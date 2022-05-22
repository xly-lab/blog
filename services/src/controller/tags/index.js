const Tag = require('../../init/sql/models/tag');

// 获取所有标签
const getTags = async (req, res) => {
  try {
    const tags = await Tag.findAll();
    if (tags) {
      res.status(200).json({
        code: 1,
        message: 'ok',
        data: tags,
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 0,
      message: '内部异常:' + error.message,
    });
  }
};

// 创建标签
const createTag = async (req, res) => {
  const { tagName: name } = req.body;
  try {
    const tag = await Tag.findByPk(name);

    if (tag) {
      res.status(401).json({
        code: 0,
        message: '标签已存在',
      });
      return;
    }
    try {
      const createResult = await Tag.create({ name });
      if (!createResult) {
        res.status(400).json({ code: 1, message: '创建标签失败' });
        return;
      }
      res.status(200).json({ code: 1, message: '标签创建成功' });
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
  getTags,
  createTag,
};
