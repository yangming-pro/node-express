//导入用于生成JWT字符串的包
const jwtToken = require("jsonwebtoken");
//导入用于将客户端发送过来的JWT字符串解析还原成JSON对象的包
// const jwtExpress = require("express-jwt");

const expressJWT = require("express-jwt");
//secret 密钥的本质是一个任意的字符串
const secretKey = "yangming";

class JwtUtils {
	//登录成功
	//在登录成功之后 调用 jwt.sign() 方法生成JWT字符串 并通过 token 属性发送给客户端
	//参数1: 用户的信息对象
	//参数2: 加密的密钥
	//参数3: 配置对象 可以配置当前 token 的有效期
	static sign(payload, expiresIn) {
		return jwtToken.sign(payload, secretKey, expiresIn);
	}

	//使用 app.use() 注册将JWT字符串解析还原成JSON对象的中间件
	//.unless() 方法通过正则表达式 指定哪些接口不需要通过权限
	//正则中 '\'用来转义 '^'表示指定以什么开头的字符串
	/* 
	注意Bearer后面有空格！ 
	前端调用接口的时候，选择
	headers: {
		Authorization: 'Bearer ' + token
	}
	还有一种方式，postman的时候，auth方式选择Bearer Token
	*/
	static verify() {
		return expressJWT
			.expressjwt({
				secret: secretKey,
				algorithms: ["HS256"],
			})
			.unless({ path: "/login" });
	}
}

module.exports = JwtUtils;
