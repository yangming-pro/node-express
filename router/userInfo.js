// 引入express
const express = require("express");
// 创建路由模块
const router = express.Router();

// 将处理函数导入
const inforHandler = require("../routerHandler/userInfo");
// 获取用户的基本信息
router.get("/info", inforHandler.getAllInfor);
// 通过id查找用户name
// router.get(
//     "/inforById",
//     inforHandler.getNameById
// );

// 向外共享路由对象
module.exports = router;
