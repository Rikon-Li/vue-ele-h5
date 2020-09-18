<template>
  <div id="home" class="page">
    <top-bar/>
    <category :data="data"/>
    <homepage-ad/>
    <restaurants/>
  </div>
</template>

<script>
import topBar from '../components/Home/top-bar'
import category from '../components/Home/category'
import homepageAd from '../components/Home/homepage-ad'
import restaurants from '../components/Home/restaurants'

import { mapState } from "vuex";
export default {
  components:{
    topBar,
    category,
    homepageAd,
    restaurants
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
      this.$store.dispatch('home/requestRestaurnatsList');
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
  width: 100%;
}
#homepage-ad{
  width: 100%;
  // height: 200px;
  // background-color: #f00;
}
</style>