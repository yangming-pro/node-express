// 引入express
const express = require("express");
// 创建路由模块
const router = express.Router();
const apiProxyV1 = "/api/v1";
// 将处理函数导入
const infoHandler = require("../routerHandler/userInfo");
// 获取用户的基本信息
router.get(
    `${apiProxyV1}/info`,
    infoHandler.getAllInfor
);
// 通过id查找用户name
router.get(
    `${apiProxyV1}/infoById`,
    infoHandler.getNameById
);

// 向外共享路由对象
module.exports = router;
