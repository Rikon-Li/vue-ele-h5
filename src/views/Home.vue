<template>
  <div id="home" class="page">
    <div class="shade" v-show="shadeShow" @click="shadeOff"></div>
    <top-bar ref='top' :isTop='top'/>
    <div class="sort-bar"  v-if="sortIsTop">
      <ul class="sort-bar-items" >
        <li class="sort-buttons" @click="sortShowAction">综合排序<span class="iconfont icon-caret-bottom"></span>
          <ul class="sort-button" v-show="sortShow">
            <li>综合排序</li>
            <li>好评优先</li>
            <li>起送价最低</li>
            <li>配送最快</li>
            <li>配送费最低</li>
            <li>人均从低到高</li>
            <li>人均从高到低</li>
            <li>通用排序</li>
          </ul>
        </li>
        <li>距离最近</li>
        <li>销量最高</li>
        <li class="filter-button" @click="filterShowAction">筛选<span class="iconfont icon-sort"></span>
          <div class="filter-bar"  v-if="filterShow">  
              <span>商家服务</span>
            <ul>
              <li v-for="item in MerchantService" :key="item.index">{{item}}</li>
            </ul>
              <span>优惠活动</span>
            <ul>
              <li v-for="item in Promotion" :key="item.index">{{item}}</li>
            </ul>
              <span>人均消费</span>
            <ul>
              <li v-for="item in PerCost" :key="item.index">{{item}}</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <appScroll :handleScroll="handleScroll" ref="scroll">
      <category :data="entriesData"/>
      <homepage-ad/>
      <restaurants :data="restaurnatsData" :isTop='sortIsTop' @sortShowAction="sortShowAction" @filterShowAction="filterShowAction"/>
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
    appScroll,
  },
  data(){
    return{
      top:'0',
      sortIsTop: false,
      shadeShow: false,
      sortShow: false,
      filterShow: false,
      MerchantService: ['蜂鸟专送','到店自取','品牌商家','新店','接受预定','食无忧'],
      Promotion: ['首单立减','首次光顾立减','满减优惠','下单返红包','进店领红包','配送费优惠','赠品优惠','特价商品','品质联盟红包'],
      PerCost: ['¥20以下','¥20 - ¥40','¥40 - ¥60','¥60 - ¥80','¥80 - ¥100','¥100以上'],
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
      this.$store.dispatch('home/requestEntriesList');
      this.$store.dispatch('home/requestRestaurnatsList');
    // console.log(this.restaurnatsData);
    },
    // shadeShowOn(){
    // },
    shadeOff(){
      this.shadeShow = false;
      this.sortShow = false;
      this.filterShow = false;
    },
    sortShowAction(){
      this.$refs.scroll.scrollToSort();
      setTimeout(()=>{
        this.shadeShow = true;
        this.sortShow = true;
      },0)
    },
    filterShowAction(){
      this.$refs.scroll.scrollToSort();
      setTimeout(()=>{
        this.shadeShow = true;
        this.filterShow = true;
      },0)
    },
    scrollToSort(){
      this.$refs.scroll.scrollToSort();
      setTimeout(()=>{
        this.shadeShow = true;
      },0)
    },
    handleScroll({x,y}){
      this.top = y+'px';
      if (y < -45){
        this.top = -45+'px';
      } 
      const FontSize = parseInt (document.documentElement.style.fontSize);
      if (y < -443*FontSize/37.5){
        this.sortIsTop = true;
      }
      else{
         this.sortIsTop = false;
      }
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
.sort-bar{
  width: 100%;
  height: 40px;
  position: absolute;
  top:50px;
  background-color: #fff;
  .sort-bar-items{
    height: 40px;
    width: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    z-index: 10;
    li{
      color: $font-color-light;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .icon-caret-bottom{
      font-size: 12px;
    }
    .sort-buttons{
      .sort-button{
        width: 100%;
        position: absolute;
        top: 40px;
        left: 0;
        background-color: #fff;
        li{
          color: $font-color-deep;
          display: flex;
          justify-content: flex-start;
          font-size: 14px;
          padding: 0 25px;
          box-sizing: border-box;
          height: 43px;
        }
      }
    }
    .filter-bar{
      background-color: #fff;
      position: absolute;
      top: 40px;
      left: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 10px;
      box-sizing: border-box;
      ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        box-sizing: border-box;
        li{
          height: 30px;
          width: 30%;
          margin: 5px 0;
          box-sizing: border-box;
          background-color: #eee;
          color: $font-color-deep;
        }
      }
    }
  }
}
.shade{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  z-index: 10;
}
</style>