// 导入数据库操作模块
const db = require("../db/index");
const moment = require("moment");
// 获取用户信息的处理函数
exports.getAllInfor = (req, res) => {
	// 定义查询的sql语句
	const sql = "select * from user";
	// 执行sql语句
	db.query(sql, (err, results) => {
		// 执行sql语句失败
		if (err) return res.output(err);
		// 执行成功
		res.output("查询成功", 200, results);
	});
};

// 通过id查找用户name,处理函数
exports.getNameById = (req, res) => {
	// 定义sql语句
	const sql = "select username from user where id=?";
	// 执行sql语句，req获取从前端传的值
	db.query(sql, req.body.id, (err, results) => {
		// 执行sql语句失败
		if (err) return res.output(err);
		// 执行成功，但数据长度为0，执行失败
		if (results.length !== 1) return res.output("无数据");
		// 执行成功
		res.output("执行成功!", 200, results);
	});
};

// 注册
exports.register = (req, res) => {
	// 定义sql语句
	const sql =
		"Insert into user(`username`,`password`,`createdAt`) values(?,?,?)";
	// 执行sql语句，req获取从前端传的值
	const params = [
		req.body.username,
		req.body.password,
		moment().format("YYYY-MM-DD HH:mm:ss"),
	];
	// 如果params是对象形式，可以使用Object.values(params)
	db.query(sql, params, (err, results) => {
		// 执行sql语句失败
		if (err) return res.output(err);
		// 执行成功
		res.output("执行成功!", 200, results);
	});
};

// 登录
exports.login = (req, res) => {
	// 定义sql语句
	const sql =
		"select `username`,`password`,`createdAt` from user where username = ? and password = ?";
	// 执行sql语句，req获取从前端传的值
	const params = [req.body.username, req.body.password];
	// 如果params是对象形式，可以使用Object.values(params)
	db.query(sql, params, (err, results) => {
		// 执行sql语句失败
		if (err) return res.output(err);
		// 执行成功
		res.output("执行成功!", 200, results);
	});
};
