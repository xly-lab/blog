const User = require('../user');
const Article = require('../article');
const Tag = require('../tag');
const Comment = require('../comment');

// const A = sequelize.define('A', /* ... */);
// const B = sequelize.define('B', /* ... */);

// A.hasOne(B); // A 有一个 B
// A.belongsTo(B); // A 属于 B
// A.hasMany(B); // A 有多个 B
// A.belongsToMany(B, { through: 'C' }); // A 属于多个 B , 通过联结表 C

const associateThem = () => {
  // 用户与文章
  User.hasMany(Article, {
    onDelete: 'CASCADE',
  });
  Article.belongsTo(User);

  // 用户与评论
  User.hasMany(Comment, {
    onDelete: 'CASCADE',
  });
  Comment.belongsTo(User);
  Article.hasMany(Comment, {
    onDelete: 'CASCADE',
  });
  Comment.belongsTo(Article);

  // 文章与标签
  Article.belongsToMany(Tag, {
    onDelete: 'CASCADE',
    through: 'TagList',
    timestamps: false,
    uniqueKey: false,
  });
  Tag.belongsToMany(Article, {
    through: 'TagList',
    timestamps: false,
    uniqueKey: false,
  });

  // 用户 文章 喜欢
  User.belongsToMany(Article, {
    through: 'Favorites',
    timestamps: false,
  });
  Article.belongsToMany(User, {
    through: 'Favorites',
    timestamps: false,
  });

  // 用户与用户 （关注）
  User.belongsToMany(User, {
    through: 'Followers',
    as: 'followers',
    timestamps: false,
  });
};

module.exports = associateThem;
