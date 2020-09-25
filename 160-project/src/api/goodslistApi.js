//引入的封装的axios
import request from "../utils/request";


function getlists(page, pagesize) {
    return request.get("/goods/list", {
      params: {
        page,
        pagesize,
      },
    });
  }

export default {
    getlists,
}