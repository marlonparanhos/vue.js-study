import axios from "axios";

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null,
    foo: "robots-foo"
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    }
  },
  actions: {
    getParts({ commit }) {
      axios
        .get("/api/parts") // get func takes the URL for the enpoint that you want to hit
        .then(result => commit("updateParts", result.data))
        .catch(console.error);
    },
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      return axios
        .post("/api/cart", cart)
        .then(() => commit("addRobotToCart", robot));
    }
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(item => item.head.onSale);
    },
    robotsFoo(state) {
      return "robots-getter/${state.foo}";
    }
  }
};
