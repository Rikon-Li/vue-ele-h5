import { ENTRIES_API } from '../../api/url';
import http from "../../api/http";
export default{
  namespaced: true,
  state: {
    loading: false,
    entriesData: []
  },
  mutations: {
    setLoading(state, payload){
      state.loading = payload;
    },
    setEntriesData(state, data){
        state.entriesData = data;
    }
  },
  actions: {
    async requestEntriesList(context){
      context.commit('setLoading', true);
      // const {data: {artists}} = await http.get(ENTRIES_API);
      const {data:{entries}} = await http.get(ENTRIES_API);
      // console.log(entries);
      const result = entries.map(item=>({
        id: item.id,
        name: item.name,
        picUrl: `https://cube.elemecdn.com/${item.image_hash}.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed`,
      }));
      // console.log(result);
      context.commit('setEntriesData');
      // 重置loading
      context.commit('setLoading', false);
    }
  },
  modules: {
  }
}