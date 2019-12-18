# backend



## 数据库

```bash
#创建一次数据库的迭代
npx sequelize migration:generate --name=<操作名称>

# 更新最新数据库
npx sequelize db:migrate

# 撤销上一版
npx sequelize db:migrate:undo

# 撤销所有
npx sequelize db:migrate:all
```



建表

```js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;

    await queryInterface.createTable("users", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      age: INTEGER,
      created_at: DATE,
      updated_at: DATE
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable("users");
  }
};
```



插入数据

```js
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John",
          age: 20,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "yzn",
          age: 333,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
```



添加字段

```js
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          "users",
          "height",
          {
            type: Sequelize.INTEGER
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          "users",
          "weight",
          {
            type: Sequelize.INTEGER
          },
          { transaction: t }
        )
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn("users", "height", { transaction: t }),
        queryInterface.removeColumn("users", "weight", {
          transaction: t
        })
      ]);
    });
  }
};
```



## 生成 app/model 目录

```bash
npm run auto_model
```



## 开发环境

```bash
npm i

npm run dev
```



## 部署环境

```bash
npm start

npm stop
```

