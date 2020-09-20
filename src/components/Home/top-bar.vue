<template>
  <!-- <div id="top-bar" ref="topbar" :style="isTop?{top:'-45px'}:{top:'-0px'}"> -->
  <div id="top-bar" ref="topbar" :style={top:isTop} >
    <div class="address-bar">
      <span class="iconfont icon-location"></span>
      <span>{{loc}}</span>
      <span class="iconfont icon-caret-bottom"></span>
    </div>
    <div class="search-bar">
      <p>
        <span class="iconfont icon-search"></span>
        <span class="fake-search-text">搜索饿了么商家、商品名称</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    isTop:String
  },
  data() {
    return {
      loc: "未能获取地址",
    };
  },
  methods:{
  },
  mounted(){
    // console.log(this.$refs.topbar.scrollTop);
  }
  
};
</script>

<style lang="scss" scoped>
@import "../../assets/global-style.scss";
#top-bar{
  position: absolute;
  top: -90px;
}
.address-bar {
  display: flex;
  height: 45px;
  box-sizing: border-box;
  padding: 10px 14px 0;
  
  span {
    margin-right: 5px;
    line-height: 30px;
    color: #fff;
    font-size: 17px;
  }
  .icon-location {
    font-size: 18px;
  }
  .icon-caret-bottom {
    font-size: 12px;
    transform: scale(0.8);
  }
}
.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  
  p {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 93%;
    height: 72%;
    color: $font-color-light;
    font-family: "宋体";
    font-size: 14px;
  }
  .iconfont {
    font-weight: 600;
    margin-right: 5px;
  }
}
</style>