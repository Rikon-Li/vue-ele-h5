import { ENTRIES_API, RESTAURANTS_API } from '../../api/url';
import http from "../../api/http";
export default{
  namespaced: true,
  state: {
    entriesData: [],
    restaurnatsData: [],
    entriesLoading: false,
    restaurnatsLoading: false,
  },
  mutations: {
    setEntriesLoading(state, payload){
      state.entriesLoading = payload;
    },
    setEntriesData(state, data){
        state.entriesData = data;
    },
    setRestaurnatsLoading(state, payload){
      state.entriesLoading = payload;
    },
    setRestaurnatsData(state, data){
        state.restaurnatsData = data;
    },
  },
  actions: {
    async requestEntriesList(context){
      context.commit('setEntriesLoading', true);
      // const {data: {artists}} = await http.get(ENTRIES_API);
      const {data:{entries}} = await http.get(ENTRIES_API);
      // console.log(entries);
      const result = entries.map(item=>({
        id: item.id,
        name: item.name,
        picUrl: `https://cube.elemecdn.com/${item.image_hash}.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed`,
      }));
      // console.log(result);
      context.commit('setEntriesData',result);
      // 重置loading
      context.commit('setEntriesLoading', false);
    },
    async requestRestaurnatsList(context){
      context.commit('setRestaurnatsLoading', true);
      // const {data: {artists}} = await http.get(ENTRIES_API);
      const data = await http.get(RESTAURANTS_API);
      // console.log(data);
      const {data: {items}} = await http.get(RESTAURANTS_API);
      console.log(items);
      const result = items.map(item=>({
        id: item.restaurant.id,
        name: item.restaurant.name,
        image_path: `https://cube.elemecdn.com/${item.restaurant.image_path.slice(0, 1) + '/' + item.restaurant.image_path.slice(1, 3) + '/' + item.restaurant.image_path.slice(3)}.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed`,
        rating: item.restaurant.rating,
        recent_order_num: item.restaurant.recent_order_num,
        piecewise_agent_fee: {
          fee :item.restaurant.piecewise_agent_fee.rules[0].fee,
          price: item.restaurant.piecewise_agent_fee.rules[0].price
        },
        distance: item.restaurant.distance,
        order_lead_time: item.restaurant.order_lead_time,
        flavors: item.restaurant.flavors[0].name,
        activities:{
          icon_name: item.restaurant.activities[0].icon_name,
          description: item.restaurant.activities[0].description,
        },
        supports: item.restaurant.supports[0],
      }));
      console.log(result);
      context.commit('setRestaurnatsData',result);
      // 重置loading
      context.commit('setRestaurnatsLoading', false);
    }
  },
  modules: {
  }
}