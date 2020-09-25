//引入的封装的axios
import request from "../utils/request";


//验证用户名是否已存在
function checkName(username) {
    return request.get("/user/checkname", {
        params: {
            username,
        },
    });
}

//注册
function reg(username, password) {
    return request.post("/user/register", {
        username,
        password,
    });
}

//登录
function login(username, password) {
    return request.get("/user/login", {
        params: {
            username,
            password,
        },
    });
}

//功能：校验token
function checkToken(token) {
    return request.get("/user/verify", {
        params: {
            token,
        },
    });
}

export default {
    checkName,
    reg,
    login,
    checkToken,
}