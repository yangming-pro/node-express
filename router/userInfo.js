// 引入express
const express = require("express");
// 创建路由模块
const router = express.Router();
// 将处理函数导入
const infoHandler = require("../routerHandler/userInfo");
// 跑数据的接口
router.post("/sys/runData", infoHandler.runData);
// 通过id查找用户name
router.get("/infoById", infoHandler.getNameById);
// 登录接口
router.post("/sys/login", infoHandler.login);
// 注册接口
router.post("/sys/register", infoHandler.register);
// 获取分类接口
router.get("/sys/category", infoHandler.getCategory);
// 获取用户信息
router.get("/user/profile", infoHandler.getProfile);
// 获取用户VIP支付数据
router.get("/user/vipList", infoHandler.getVipList);
// 更改用户信息
router.put("/user/profile", infoHandler.updateProfile);
// 获取推荐主题
router.get("/pexels/themes", infoHandler.getThemes);
// 搜索关键词hint
router.get("/pexels/hint", infoHandler.getHints);
// 获取图片列表的分页处理函数
router.get("/pexels/list", infoHandler.getPhotoList);
// 获取指定图片的数据详情
router.get("/pexels/:id", infoHandler.getPhotoItem);
// 向外共享路由对象
module.exports = router;
