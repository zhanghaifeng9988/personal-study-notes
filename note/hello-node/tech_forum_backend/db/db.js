// 引入sqlite3模块
const sqlite3 = require("sqlite3").verbose();
// 引入bcrypt用于密码加密
const bcrypt = require("bcrypt");
const saltRounds = 10;
//工程中的数据库文件路径，以根目录为参照
const dbName = "./forum.db";
//此方法为测试方法，将查询到库中所有用户信息
function queryAllUsersInfoFromDB(callback) {
  //打开数据库
  const db = new sqlite3.Database(dbName, (err) => {
    if (err) {
      console.error("连接数据库失败：" + err.message);
    } else {
      console.log("连接数据库成功1：" + dbName);
    }
  });

  //定义SQL语句
  const sql = "select * from user;";
  //查询所有数据
  db.all(sql, [], (err, rows) => {
    callback(err, rows);
  });
  //关闭数据库
  db.close();
}

//判断账户是否已经存在
function accountIfExist(account, callback) {//callback回调函数
  //打开数据库
  const db = new sqlite3.Database(dbName);
  //定义SQL语句
  const sql = 'select account from user where account = ?;';
  //查询数据
  db.all(sql, [account], (err, rows) => {//回调函数，查询完会执行
    if (err) {
      // 如果有错误
      console.log("查询失败：" + err.message);
      callback(err, null);
      return;
    }
    if (rows.length > 0) {
      callback(null,true);
    } else {
      callback(null,false);
    }
  });
  //关闭数据库
  // db.close();
}
//定义1个函数，用于查询传入的用户是否存在，在路由文件中，实现对函数得调用
//0. 导入这个函数得模块，赋值给变量。
//1.路由文件需要先定义get或者post方法，接受前端传入得参数
//2. 将所需要得参数赋值给函数内得变量
//3. 调用accountIfExist函数，实现这个函数，并将结果返回前端
//4. 这个函数得参数是包含回调函数的，回调函数的定义要在调用的参数配置里面书写完整

// 注册新用户
function registerNewUser(nickname, account, password, callback) {
  // 打开数据库
  const db = new sqlite3.Database(dbName);

  // 使用bcrypt加密密码
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      callback(err, null);
      return;
    }

    // 定义SQL语句
    const sql1 = "insert into user (nickname,account,password) values (?,?,?);";
    const sql2 = "select * from user where account = ?;";

    // 插入数据
    db.run(sql1, [nickname, account, hash], (err) => {
      if (err) {
        // 如果有错误
        console.log("注册失败：" + err.message);
        callback(err, null);
        return;
      }

      console.log("注册成功");
      db.get(sql2, [account], (err, row) => {
        console.log(err);
        callback(null, row);
      });
    });
  });
}

// 查询用户信息并验证密码
function queryUser(account, password, callback) {
  // 打开数据库
  const db = new sqlite3.Database(dbName);

  // 定义SQL语句
  const sql = "select * from user where account = ?;";

  // 查询数据
  db.get(sql, [account], (err, row) => {
    if (err) {
      // 如果有错误
      console.log("查询失败：" + err.message);
      callback(err, null);
      return;
    }

    if (!row) {
      // 用户不存在
      callback(null, null);
      return;
    }

    // 使用bcrypt验证密码
    bcrypt.compare(password, row.password, (err, result) => {
      if (err) {
        console.log("密码验证失败：" + err.message);
        callback(err, null);
        return;
      }

      if (result) {
        // 密码匹配
        console.log("登录成功");
        callback(null, row);
      } else {
        // 密码不匹配
        console.log("密码错误");
        callback(null, false);
      }
    });
  });
}


module.exports = {
  queryAllUsersInfoFromDB,
  accountIfExist,
  registerNewUser,
  queryUser,
};
