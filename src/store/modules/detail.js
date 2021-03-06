import { COMMENTS_API, SHOP_API } from '../../api/url';
import http from "../../api/http";
export default{
  namespaced: true,
  state: {
    shopLoading: false,
    CommentsLoading: false,
    shopData: [],
    menuData: [],
    recommendData: [],
    rstData: [],
    commentsData: [],
  },
  mutations: {
    setShopLoading(state, payload){
      state.shopLoading = payload;
    },
    setCommentsLoading(state, payload){
      state.CommentsLoading = payload;
    },
    setShopData(state, data){
      state.shopData = data;
      state.menuData = data.menu.map(item=>({
        name: item.name,
        id: item.id,
        rst_name: data.rst.name,
        rst_img: `https://cube.elemecdn.com/${data.rst.image_path.slice(0, 1) + '/' + data.rst.image_path.slice(1, 3) + '/' + data.rst.image_path.slice(3) + '.' + data.rst.image_path.match(/(jpeg|png|JPEG)/g)}?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed`,
        foods: item.foods.map(food=>({category_id: food.category_id,
          item_id: food.item_id,
          name: food.name,
          description: food.description,
          month_sales: food.month_sales,
          satisfy_rate: food.satisfy_rate,
          discount_rate: food.discount_rate,
          origin_price: food.origin_price,
          price: food.price,
          image_path: `https://cube.elemecdn.com/${food.image_path.slice(0, 1) + '/' + food.image_path.slice(1, 3) + '/' + food.image_path.slice(3) + '.' + food.image_path.match(/(jpeg|jpg|png|JPEG)/g)}?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed`,
        })),
      }))
      state.recommendData = data.recommend;
      state.rstData = {
        name : data.rst.name,
        address: data.rst.address,
        flavors: data.rst.flavors,
        opening_hours: data.rst.opening_hours,
        supports: data.rst.supports,
        image_path: `https://cube.elemecdn.com/${data.rst.image_path.slice(0, 1) + '/' + data.rst.image_path.slice(1, 3) + '/' + data.rst.image_path.slice(3) + '.' + data.rst.image_path.match(/(jpeg|png|JPEG)/g)}?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed`,
        bg_path: `https://cube.elemecdn.com/${data.rst.shop_sign.image_hash.slice(0, 1) + '/' + data.rst.shop_sign.image_hash.slice(1, 3) + '/' + data.rst.shop_sign.image_hash.slice(3) + '.' + data.rst.shop_sign.image_hash.match(/(jpeg|png|JPEG)/g)}?x-oss-process=image/format,webp/resize,w_750`,
        rating: data.rst.rating,
        recent_order_num: data.rst.recent_order_num,
        order_lead_time: data.rst.order_lead_time,
        promotion_info: data.rst.promotion_info,
        posters_image_path: `https://cube.elemecdn.com/${data.rst.posters[0].image_hash.slice(0, 1) + '/' + data.rst.posters[0].image_hash.slice(1, 3) + '/' + data.rst.posters[0].image_hash.slice(3) + '.' + data.rst.posters[0].image_hash.match(/(jpeg|png|JPEG)/g)}?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed`,
      };
    },
    setCommentsData(state, data){
      state.commentsData = data.comments.map(item=>({
        rating_text: item.rating_text,
        rated_at: item.rated_at,
        username: item.username,
        rating: item.rating,
        avatar: `https://cube.elemecdn.com/${item.avatar.slice(0, 1) + '/' + item.avatar.slice(1, 3) + '/' + item.avatar.slice(3) + '.' + item.avatar.match(/(jpeg|png|JPEG)/g)}?x-oss-process=image/format,webp/resize,w_30,h_30,m_fixed`,
      }));
    }
  },
  actions: {
    async requestShopData(context){
      context.commit('setShopLoading', true);
      const {data} = await http.get(SHOP_API);
      context.commit('setShopData',data);
      context.commit('setShopLoading', false);
    },

    async requestCommentsData(context){
      context.commit('setCommentsLoading', true);
      const {data} = await http.get(COMMENTS_API);
      context.commit('setCommentsData',data);
      console.log(data);
      context.commit('setCommentsLoading', false);
    },
  }
}