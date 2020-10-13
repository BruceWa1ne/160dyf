export default {
  state: {
    // 购物车数据集合
    carts: [],
  },

  mutations: {
    initCart(state, details) {
      state.carts = details;
    },

    add(state, goods) {
      state.carts.push(goods);
    },
  },
};
