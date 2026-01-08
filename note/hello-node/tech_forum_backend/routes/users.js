var express = require("express");
var router = express.Router();

// 引入数据库工具
var dbManager = require("../db/db");

/* GET users listing. */
router.get("/", function (req, res, next) {
  // 从数据库中读取数据
  dbManager.queryAllUsersInfoFromDB((err, data) => {
    // 如果发生错误，返回500状态码和错误信息
    if (err) {
      res.status(500).json(err);
      // 这里的return会立即结束当前的回调函数
      // 不会影响外部的router.get函数或其他代码
      return;
    }
    // 如果没有错误，返回200状态码和查询到的数据
    res.status(200).json(data);
  });
});

// 用户注册的接口
var FormatResponse = require("../format/response");
router.post("/create", function (req, res, next) {
  //首先从请求的数据中获取参数
  var params = req.body;
  var account = params.account;
  var password = params.password;
  var nickname = params.nickname;
  // 进行有效性验证
  if (!account || !password || !nickname) {
    //至少有1个未定义的参数
    res
      .status(400)
      .json(FormatResponse.FormatResponse(false, "参数不完整", ""));
    return;
  }
  // 查询数据库中用户是否已经存在
  dbManager.accountIfExist(account, (err, exist) => {
    if (err) {
      res
        .status(500)
        .json(FormatResponse.FormatResponse(false, "数据库查询失败", ""));
      return;
    }
    if (exist) {
      //如果用户已经存在
      res
        .status(409)
        .json(
          FormatResponse.FormatResponse(false, "用户已存在,请更换用户名", "")
        );
      return;
    } else {
      //如果用户不存在，则进行注册,信息写入数据库
      dbManager.registerNewUser(nickname, account, password, (err, data) => {
        if (err) {
          res
            .status(500)
            .json(FormatResponse.FormatResponse(false, "注册失败", ""));
          return;
        } else {
          res
            .status(200)
            .json(FormatResponse.FormatResponse(true, "注册成功111", data));
        }
      });
    }
  });
});

// 登录接口
router.get("/login", function (req, res, next) {
  var params = req.query;
  var account = params.account;
  var password = params.password;
  // 进行有效性验证
  if (!account || !password) {
    res
      .status(404)
      .json(FormatResponse.FormatResponse(false, "用户和密码不能为空", ""));
    return;
  }
  // 读取数据库并验证密码
  dbManager.queryUser(account, password, (err, result) => {
    if (err) {
      res
        .status(500)
        .json(FormatResponse.FormatResponse(false, "数据库查询失败", ""));
      return;
    }

    if (result === null) {
      // 用户不存在
      res
        .status(403)
        .json(FormatResponse.FormatResponse(false, "用户不存在", ""));
    } else if (result === false) {
      // 密码错误
      res
        .status(401)
        .json(FormatResponse.FormatResponse(false, "密码错误", ""));
    } else {
      // 登录成功
      res
        .status(200)
        .json(FormatResponse.FormatResponse(true, "登录成功", result));
    }
  });
});

module.exports = router;
