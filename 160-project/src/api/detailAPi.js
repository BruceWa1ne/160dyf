import request from "../utils/request";

function getDetails(gid) {
  return request.get("/goods/single/" + gid, {});
}

export default {
  getDetails,
};
