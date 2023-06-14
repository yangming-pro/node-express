// 引入mysql
const mysql = require("mysql");
const domain = "124.220.133.135"; // 阿里云服务器
// 建立一个连接池
const db = mysql.createPool({
	host: domain, // 数据库的IP地址(本地的或者是云服务器的都可以)
	user: "server",
	password: "KriZCRiXdbCePaCY",
	database: "server", //指定要操作哪个数据库
	port: 3306,
});

// 将文件暴露出去
module.exports = db;
