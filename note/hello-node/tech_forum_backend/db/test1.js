const sqlite3 = require("sqlite3").verbose();

/* // 数据库单例模式
class Database {
  constructor() {
    if (!Database.instance) {
      this.db = new sqlite3.Database("./db/forum.db");
      Database.instance = this;//
    }
    return Database.instance;
  }

  getConnection() {
    return this.db;
  }
}


const database = new Database();
//console.log(database.instance)
const db = database.getConnection();
 */

const dbName = "./db/forum.db";
const db = new sqlite3.Database(dbName, (err) => {
  if (err) {
    console.error("连接数据库失败：" + err.message);
  } else {
    console.log("连接数据库成功：" + dbName);
  }
});
