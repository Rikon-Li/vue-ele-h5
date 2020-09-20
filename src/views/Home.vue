<template>
  <div id="home" class="page">
    

      <top-bar ref='top' :isTop='top'/>
    <appScroll :handleScroll="handleScroll">
      <category :data="entriesData"/>
      <homepage-ad/>
      <restaurants :data="restaurnatsData" :isTop='sortIsTop'/>
    </appScroll>


  </div>
</template>

<script>
import topBar from '../components/Home/top-bar'
import category from '../components/Home/category'
import homepageAd from '../components/Home/homepage-ad'
import restaurants from '../components/Home/restaurants'
import appScroll from '../components/common/app-scroll'

import { mapState } from "vuex";
export default {
  components:{
    topBar,
    category,
    homepageAd,
    restaurants,
    appScroll
  },
  data(){
    return{
      top:'0',
      sortIsTop: '0',
    }
  },
  computed: {
    ...mapState({
      entriesData: (state) => state.home.entriesData,
      restaurnatsData: (state) => state.home.restaurnatsData,
    })
  },
  methods:{
    requestData(){
    // console.log(111);
      this.$store.dispatch('home/requestEntriesList');
      this.$store.dispatch('home/requestRestaurnatsList');
    // console.log(this.restaurnatsData);
    },
    handleScroll({x,y}){
      // console.log(x,y);
      this.top = y+'px';
      // this.sortIsTop = y+'px'
      if (y < -45){
        // console.log(11);
        this.top = -45+'px';
      }
      if (y < -440){
        // console.log(11);
        this.sortIsTop = -y-440 +'px'
      }
      // console.log(this.top);
    }

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
  z-index: 10;
}
#category{
  width: 100%;
}
#homepage-ad{
  width: 100%;
  // height: 200px;
  // background-color: #f00;
}
.scroll-view{
  height: 100%;
}
</style>