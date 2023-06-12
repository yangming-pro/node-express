//导入用于生成JWT字符串的包
const jwtToken = require("jsonwebtoken");
//导入用于将客户端发送过来的JWT字符串解析还原成JSON对象的包
const jwtExpress = require("express-jwt");
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

	static verify() {
		return jwtExpress({ secret: secretKey });
	}
}

module.exports = JwtUtils;
