import router from "./router";
import { getToken } from ".//utils/auth";
import userAPI from "./api/userAPI";

router.beforeEach((to, from, next) => {
    if (to.meta.ischeck != false) {
        let token = getToken();
        console.log(token, 996)
        if (token) {
            userAPI.checkToken(token).then((res) => {
                console.log(res, 995);
                if (res.data.flag) {
                    next();
                } else {
                    router.push("/login");
                    console.log(res, 992);
                }
            });
        } else {
            router.push("/login");
            console.log(991);
        }
    } else {
        next();
        console.log(994);
    }

});