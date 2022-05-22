## BLOG  开发日记

#### 坑点1：user 表格字段 email 被关联到其他表格时 会变成 UserEmail；等等

#### 坑点2：sequelize.query（）返回两次相同的结果 

[解决方案](http://cn.voidcc.com/question/p-zpwffcbc-n.html)
```
    const result = await sequelizeModel.query(
      sql语句, 
      { type: sequelize.QueryTypes.SELECT } // 不查元数据
    );
```

#### 知识点1：数据库模型建立一对多关系是 sequelize 操作

```
  modelA.hasMany(modelB) // 模型A有多个模型B
  modelB.belongsTo(modelA) // 模型B只属于一个模型A

```