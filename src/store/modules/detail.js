import { SHOP_API } from '../../api/url';
import http from "../../api/http";
export default{
  namespaced: true,
  state: {
    shopData: [],
    shopLoading: false,
  },
  mutations: {
    setShopLoading(state, payload){
      state.shopLoading = payload;
    },
    setShopData(state, data){
        state.shopData = data;
    },
  },
  actions: {
    async requestShopData(context){
      context.commit('setShopLoading', true);
      const {data} = await http.get(SHOP_API);
      // console.log(data);
      // const result = entries.map(item=>({
      //   id: item.id,
      //   name: item.name,
      //   picUrl: `https://cube.elemecdn.com/${item.image_hash}.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed`,
      // }));
      context.commit('setShopData',data);
      // // 重置loading

      context.commit('setShopLoading', false);
    }
  }
}