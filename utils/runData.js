const db = require("../db/index");
const mockData = [
	{
		id: "black theme",
		photo: "https://images.pexels.com/photos/1356300/pexels-photo-1356300.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;fit=crop&amp;h=250&amp;w=360",
		title: "黑色",
	},
	{
		id: "work",
		photo: "https://images.pexels.com/photos/2127969/pexels-photo-2127969.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;fit=crop&amp;h=250&amp;w=360",
		title: "工作",
	},
	{
		id: "Afternoon tea",
		photo: "https://images.pexels.com/photos/1292862/pexels-photo-1292862.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;fit=crop&amp;h=250&amp;w=360",
		title: "下午茶",
	},
	{
		id: "Art",
		photo: "https://images.pexels.com/photos/9890370/pexels-photo-9890370.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;fit=crop&amp;h=250&amp;w=360",
		title: "艺术",
	},
	{
		id: "Wallpaper",
		photo: "https://images.pexels.com/photos/6076811/pexels-photo-6076811.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;fit=crop&amp;h=250&amp;w=360",
		title: "壁纸",
	},
	{
		id: "Like a breath of fresh air",
		photo: "https://images.pexels.com/photos/7412111/pexels-photo-7412111.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;fit=crop&amp;h=250&amp;w=360",
		title: "小清新",
	},
	{
		id: "Farm",
		photo: "https://images.pexels.com/photos/1832328/pexels-photo-1832328.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;fit=crop&amp;h=250&amp;w=360",
		title: "农场",
	},
];

exports.insertData = (req, res) => {
	mockData.map((item) => {
		// 定义sql语句
		const sql = "insert into themes(`id`,`photo`,`title`) values(?,?,?)";
		// 执行sql语句，req获取从前端传的值
		const params = [item.id, item.photo, item.title];
		// 如果params是对象形式，可以使用Object.values(params)
		db.query(sql, params, (err, results) => {
			// 执行sql语句失败;
			if (err) return res.output(err);
			// 执行成功
			res.output("执行成功!", 200, results);
		});
	});
};
