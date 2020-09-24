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

export default {
    checkName,
    reg,
}