// 引入express
const express = require("express");
// 创建路由模块
const router = express.Router();
// 将处理函数导入
const infoHandler = require("../routerHandler/userInfo");
// 获取用户的基本信息
router.get("/info", infoHandler.getAllInfor);
// 通过id查找用户name
router.get("/infoById", infoHandler.getNameById);
// 注册接口
router.post("/register", infoHandler.register);
// 向外共享路由对象
module.exports = router;
