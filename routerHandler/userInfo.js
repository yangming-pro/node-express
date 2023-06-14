// 导入数据库操作模块
const db = require("../db/index");
const JwtUtils = require("../utils/tokenUtil");
const runData = require("../utils/runData");
const moment = require("moment");

// 往数据库里批量跑数据的函数
exports.runData = (req, res) => {
	runData.insertData(req, res);
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
		"Insert into user(`username`,`password`,`created_at`) values(?,?,?)";
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
		"select `username`,`password`,`created_at` from user where username = ? and password = ?";
	// 执行sql语句，req获取从前端传的值
	const params = [req.body.username, req.body.password];
	// jwt token其实就是通过username、secretKey、expiresIn的值生成的
	//
	const tokenStr = JwtUtils.sign(
		{ username: params.username },
		{
			expiresIn: 60 * 60 * 24 * 3,
		}
	);
	db.query(sql, params, (err, results) => {
		// 执行sql语句失败
		if (err) return res.output(err);
		// 执行成功
		res.output("登录成功!", 200, { ...results[0], token: tokenStr });
	});
};

// 获取用户信息的处理函数
exports.getProfile = (req, res) => {
	// 定义查询的sql语句;
	const sql =
		"select username,created_at,updated_at,avatar,nickname,home_page,introduction,job_title from user where username = ?";
	// 执行sql语句
	db.query(sql, req.headers.username, (err, results) => {
		// 执行sql语句失败
		if (err) return res.output(err);
		// 执行成功
		res.output("查询成功", 200, results);
	});
};

// 更新用户信息的处理函数
exports.updateProfile = (req, res) => {
	// 定义查询的sql语句;
	// const sql =
	// 	"select username,created_at,avatar,nickname,home_page,introduction,job_title from user where username = ?";
	const sql = `update user set updated_at = ?,avatar = ?,nickname = ?,home_page = ?,introduction = ?,job_title = ? where username = ?`;
	const params = [
		moment().format("YYYY-MM-DD HH:mm:ss"),
		req.body.avatar,
		req.body.nickname,
		req.body.home_page,
		req.body.introduction,
		req.body.job_title,
		req.headers.username,
	];
	// 执行sql语句
	db.query(sql, params, (err, results) => {
		// 执行sql语句失败
		if (err) return res.output(err);
		// 执行成功
		res.output("更新成功", 200, results);
	});
};

// 获取推荐主题的处理函数
exports.getThemes = (req, res) => {
	// 定义查询的sql语句;
	// const sql =
	// 	"select username,created_at,avatar,nickname,home_page,introduction,job_title from user where username = ?";
	const sql = `select * from themes order by rand() limit 7`;
	// 执行sql语句
	db.query(sql, (err, results) => {
		// 执行sql语句失败
		if (err) return res.output(err);
		// 执行成功
		res.output("更新成功", 200, results);
	});
};
