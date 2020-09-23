import { SHOP_API } from '../../api/url';
import http from "../../api/http";
export default{
  namespaced: true,
  state: {
    shopData: [],
    menuData: [],
    recommendData: [],
    rstData: [],
    shopLoading: false,
  },
  mutations: {
    setShopLoading(state, payload){
      state.shopLoading = payload;
    },
    setShopData(state, data){
      state.shopData = data;
      state.menuData = data.menu.map(item=>({
        name: item.name,
        foods: item.foods.map(item=>({
          name: item.name,
          description: item.description,
          month_sales: item.month_sales,
          satisfy_rate: item.satisfy_rate,
          discount_rate: item.discount_rate,
          origin_price: item.origin_price,
          price: item.price,
          image_path: `https://cube.elemecdn.com/${item.image_path.slice(0, 1) + '/' + item.image_path.slice(1, 3) + '/' + item.image_path.slice(3) + '.' + item.image_path.match(/(jpeg|jpg|png|JPEG)/g)}?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed`,
        })),
      }))
      state.recommendData = data.recommend;
      state.rstData = {
        name : data.rst.name,
        image_path: `https://cube.elemecdn.com/${data.rst.image_path.slice(0, 1) + '/' + data.rst.image_path.slice(1, 3) + '/' + data.rst.image_path.slice(3) + '.' + data.rst.image_path.match(/(jpeg|png|JPEG)/g)}?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed`,
        bg_path: `https://cube.elemecdn.com/${data.rst.shop_sign.image_hash.slice(0, 1) + '/' + data.rst.shop_sign.image_hash.slice(1, 3) + '/' + data.rst.shop_sign.image_hash.slice(3) + '.' + data.rst.shop_sign.image_hash.match(/(jpeg|png|JPEG)/g)}?x-oss-process=image/format,webp/resize,w_750`,
        rating: data.rst.rating,
        recent_order_num: data.rst.recent_order_num,
        order_lead_time: data.rst.order_lead_time,
        promotion_info: data.rst.promotion_info,
        posters_image_path: `https://cube.elemecdn.com/${data.rst.posters[0].image_hash.slice(0, 1) + '/' + data.rst.posters[0].image_hash.slice(1, 3) + '/' + data.rst.posters[0].image_hash.slice(3) + '.' + data.rst.posters[0].image_hash.match(/(jpeg|png|JPEG)/g)}?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed`,
      };
      console.log(state.menuData);
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
      // console.log(data);
      context.commit('setShopLoading', false);
    }
  }
}