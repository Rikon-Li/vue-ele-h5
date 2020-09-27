export default {
  namespaced: true,
  state: {
    shopList: [],
    total: 0,
    originTotal: 0,
    orderList: [],
    billTotal: 0,
    currentInfo: {},
    billList: [],
  },
  mutations: {
    setShopList(state, payload) {
      console.log(payload);
      state.shopList.push(payload);
      state.total = 0;
      state.original = 0;
      state.shopList.map((item) => {
        state.total += item.num * item.price;
        state.originTotal += item.num * item.origin_price;
        // console.log(item.origin_price);
      });
    },
    addShopList(state, payload) {
      state.shopList[payload].num++;
      state.total = 0;
      state.original = 0;
      state.shopList.map((item) => {
        state.total += item.num * item.price;
        state.originTotal += item.num * item.origin_price;
      });
    },
    transAction(state) {
      state.shopList.map((item) => {
        item.date = new Date().toLocaleString();
        state.orderList.push(item);
      });
      // state.orderList = state.shopList;
      state.shopList = [];
    },
    setBillInfo(state, payload) {
      state.currentInfo = payload;
    },
    setBillList(state) {
      state.currentInfo.time = new Date().toLocaleString();
      state.currentInfo.total = state.total;
      // state.billTotal = state.total;
      state.total = 0;
      state.original = 0;
      state.billList.push(state.currentInfo);
    },
  },
  actions: {},
};
