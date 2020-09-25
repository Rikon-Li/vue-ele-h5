export default{
  namespaced: true,
  state: {
    shopList: [],
    total: 0,
    orderList: [],
  },
  mutations: {
    setShopList(state, payload){
      state.shopList.push(payload);
      state.total = 0;
      state.shopList.map(item=>{
        state.total += item.num*item.price;
      })
    },
    addShopList(state, payload){
      state.shopList[payload].num++;
      state.total = 0;
      state.shopList.map(item=>{
        state.total += item.num*item.price;
      })
    },
    transAction(state){
      state.orderList = state.shopList;
      state.shopList = [];
      state.total = 0;
    }
  },
  actions: {},
}