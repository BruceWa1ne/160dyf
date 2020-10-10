import requestc from "../utils/requestc";

function getusers(page, pagesize, search) {
    return requestc.get("/user/list", {
        params: {
            page,
            pagesize,
            search,
        },
    });
}

//功能：删除用户
function del(id) {
    return requestc.delete("/user/del/" + id);
  }


export default {
    getusers,
    del,
};