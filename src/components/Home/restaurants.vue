<template>
  <div id="restaurants">
    
    <div class="shoplist-title"><span>推荐商家</span></div>
    <div class="sort-bar">
      <ul class="sort-bar-items" :style={top:isTop}>
        <li>综合排序<span class="iconfont icon-caret-bottom"></span></li>
        <li>距离最近</li>
        <li>销量最高</li>
        <li>筛选<span class="iconfont icon-sort"></span></li>
      </ul>
    </div>
    <div class="restaurants-list">
      <ul class="restaurants-items">
        <li class="restaurants-item" v-for="item in data" :key="item.id">
          <!-- {{item}} -->
          <div class="restaurant-wrap">
            <img :src="item.image_path" alt="" class="img">
            <div class="info">
              <h3 class="name">{{item.name}}</h3>
              <p class="rating">
                <span>

                  <van-rate 
                    v-model="value" 
                    color="#ffd21e"
                    size="15px"
                    readonly
                  />
                  <span>{{item.rating}}</span>
                </span>
                <span>蜂鸟专送</span>
              </p>
              <p class="delivery">
                <span>
                  <i class="fee">¥{{item.piecewise_agent_fee.fee}}起送</i><i>配送¥{{item.piecewise_agent_fee.price}}</i>
                </span>
                <span>
                  <i class="distance">{{item.distance}}m</i><i>{{item.order_lead_time}}分钟</i>
                </span>
              </p>
              <span class="flavors">{{item.flavors}}</span> 

            </div>
            
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Rate } from 'vant';
Vue.use(Rate);
export default {
  data(){
    return{
      value: 3.7
    }
  },

  props:{
    data: Array,
    isTop: String
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/global-style.scss";
.shoplist-title{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  width: 100%;
  height: 50px;
  color: #333;
  span{
    margin: 0 15px;
  }
  &::before,&::after{
    display: block;
    content: "";
    width: 20px;
    height: 1px;
    background-color: #999;
  }
}
.sort-bar{
  width: 100%;
  height: 40px;
  position: relative;
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
  }
}
.restaurant-wrap{
  border-bottom: 1px solid #EEE;
  padding: 10px;
  display: flex;
  .img{
    // height: ;
    height: 65px;
    height: 65px;
  }
  .info{
    width: 100%;
    margin-left: 10px;
    color: $font-color-light-v2;
    .name{
      color: $font-color-deep;
      font-size: 15px;
      font-weight: 500;
      line-height: 25px;
    }
    .rating{
      width: 100%;
      line-height: 25px;
      display: flex;
      justify-content: space-between;
    }
    .delivery{
      width: 100%;
      line-height: 25px;
      display: flex;
      justify-content: space-between;
      .fee::after{
        content: '';
        margin: 0 3px;
        display: inline-block;
        width: 1px;
        height: 10px;
        background-color: #ccc;
      }

      .distance::after{
        content: '';
        margin: 0 3px;
        display: inline-block;
        width: 1px;
        height: 10px;
        background-color: #ccc;
      }
    }
    .flavors{
      width: fit-content;
      line-height: 25px;
      font-size: 10px;
      padding: 0 5px;
      border: 1px solid #eee;
    }
    
  }
}
.rate{
  width: 50px !important;
  // letter-spacing: 0;
}
</style>