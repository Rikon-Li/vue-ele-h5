<template>
  <div id="home" class="page">
    <top-bar/>
    <category/>
  </div>
</template>

<script>
import topBar from '../components/Home/top-bar'
import category from '../components/Home/category'
import { mapState } from "vuex";
export default {
  components:{
    topBar,
    category
  },
  computed: {
    ...mapState({
      data: (state) => state.home.entriesData,
    })
  },
  methods:{
    requestData(){
    // console.log(111);
      this.$store.dispatch('home/requestEntriesList');
      console.log(this.data);
    },
  },
  created(){
    this.requestData();
  }
}
</script>


<style lang="scss" scoped>
@import '../assets/global-style.scss';
#top-bar{
  width: 100%;
  height: 95px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: $theme-color;
  display: flex;
  flex-direction: column;
}
#category{
  position: absolute;
  top: 95px;
  left: 0;
  width: 100%;
  height: 177px;
  background-color: #f00;
}
</style>