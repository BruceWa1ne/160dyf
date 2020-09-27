//引入的封装的axios
import request from '../utils/request';

function getCategory(page, pagesize) {
    return request.get('/goods/classify', {
        params: {
            page,
            pagesize,
        },
    });
}

export default {
    getCategory,
};
