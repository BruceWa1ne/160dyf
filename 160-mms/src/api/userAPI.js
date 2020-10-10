import request from '../utils/request';

function checkName(username) {
    return request.get("/user/checkname", {
        params: {
            username,
        },
    });
}

function reg(username, password) {
    return request.post("/user/register", {
        username,
        password
    });
}

function login(username, password) {
    return request.get("/user/login", {
        params: {
            username,
            password,
        },
    });
}

function checkToken(token) {
    return request.get("/user/verify", {
        params: {
            token
        },
    });
}


export default {
    checkName,
    reg,
    login,
    checkToken,
}