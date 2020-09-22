<template>
  <div id="detail">
    <div class="top">
      <div class="background" style="background-image: url('https://cube.elemecdn.com/5/99/5c8409b6a9d7c3f05fad9da84fc86png.png?x-oss-process=image/format,webp/resize,w_750');">
        <div><span class="iconfont icon-arrow-left"></span></div>
        <img class="shopLogo" src="https://cube.elemecdn.com/5/35/ad5c50300565b5e6371ee8accb131JPEG.JPEG">
      </div>
      <div class="shopDetails">
        <h1 class="name">益禾堂</h1>
        <ul class="more">
          <li>评价4.2</li>
          <li>月售221单</li>
          <li>蜂鸟快送约40分钟</li>
        </ul>
        <span class="notice">公告。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。</span>
      </div>
      <div class="tabs">
        <div class="tabWrap" v-for="(item, index) in tabsItems" @click=switchTabs(item,index) :key=index ><span class="tab" :class="selectedTab === item ? 'Active' : ''">{{item}}</span></div>
      </div>
    </div>
    <orderFood v-show="selectedTab === '点餐'"/>
    <evaluate v-show="selectedTab === '评价'"/>
    <shopInfo v-show="selectedTab === '商家'"/>
    <div class="bottom">
      <div class="bottomWrap">
        <div class="cartButton"></div>
        <div class="totalPrice">
          <p><span class="actualPrice">¥69</span><span class="originalPrice">¥88.6</span></p>
          <p>另需配送费9元</p>
        </div>
      </div>
      <div class="account">去结算</div>
    </div>
    
  </div>
</template>

<script>
import orderFood from '../components/Detail/order-food'
import evaluate from '../components/Detail/evaluate'
import shopInfo from '../components/Detail/shop-info'

import { mapState } from "vuex";
export default {
  data(){
    return{
      tabsItems: ['点餐','评价','商家'],
      selectedTab: '点餐',
    }
  },
  computed: {
    ...mapState({
      shopData: (state) => state.detail.shopData,
    })
  },
  components:{
    orderFood,
    evaluate,
    shopInfo
  },
  methods:{
    requestData(){
      this.$store.dispatch('detail/requestShopData');
    },
    switchTabs(tabName,index){
      this.selectedTab = tabName;
    }
  },
  created(){
    this.requestData();
  },
  mounted(){
    console.log(this.shopData);
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/global-style.scss";
#detail{
  display: block;
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;
  z-index: 100;
  .top{
    width: 100%;
    // background-color: #5ff;
    .background{
      width: 100%;
      height: 100px;
      background-size: 100%;
      background-position: center;
      position: relative;
      &::before{
        content: "";
        width: 100%;
        height: 100px;
        background-color: rgba(0,0,0,0.3);
        position: absolute;
      }
    }
    .icon-arrow-left{
      font-size: 24px;
      font-weight: 700;
      color: #fff;
      margin: 5px 5px;
      position: absolute;
    }
    .shopLogo{
      width: 75px;
      height: 75px;
      position: absolute;
      left: 50%;
      margin-left: -37.5px;
      bottom: -15px;
      border-radius: 5px;
    }
    .shopDetails{
      padding-top: 25px;
      width: 280px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      align-items: center;
      .name{
        font-size: 20px;
        font-weight: 500;
        color: #222;
        line-height: 28px;
      }
      .more{
        color: #666;
        display: flex;
        line-height: 22px;
        li{
          width: fit-content;
          margin: 0 6px;
        }
      }
      .notice{
        line-height: 22px;
        color: #999;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
      }
    }
    .tabs{
      margin-top: 10px;
      display: flex;
      width: 100%;
      height: 40px;
      justify-content: space-around;
      border-bottom: 1px solid #eee;
      .tabWrap{
        flex:1;
        
        color: #666;
        font-size: 15px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        // overflow: hidden;
        .tab{
          line-height: 38px;
          border-bottom: 3px solid transparent;
        }
        .Active{
          border-bottom: 3px solid #2395ff;
          font-weight: 500;
          color: #333;
        }
      }
    }
  }
  .bottom{
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(61,61,63,.9);
    .cartButton{
      position: absolute;
      top: -8px;
      left: 15px;
      width: 40px;
      height: 40px;
      background: #3892E5 url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTggNTgiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIiBzdGREZXZpYXRpb249IjEuNSIvPjxmZUNvbG9yTWF0cml4IGluPSJzaGFkb3dCbHVyT3V0ZXIxIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA4IDAiLz48ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTcuNjE0IDQuMDUxYy0xLjA2Ni4wODYtMS40NTItLjM5OC0xLjc1Mi0xLjU4NEM1LjU2MiAxLjI4LjMzIDUuODguMzMgNS44OGwzLjcxIDE5LjQ3NmMwIC4xNDgtMS41NiA3LjUxNS0xLjU2IDcuNTE1LS40ODkgMi4xOS4yOTIgNC4yNyAzLjU2IDQuMzIgMCAwIDM2LjkxNy4wMTcgMzYuOTIuMDQ3IDEuOTc5LS4wMTIgMi45ODEtLjk5NSAzLjAxMy0zLjAzOS4wMy0yLjA0My0xLjA0NS0yLjk3OC0yLjk4Ny0yLjk5M0w4LjgzIDMxLjE5MnMuODYtMy44NjUgMS4wNzctMy44NjVjMCAwLTUuNzg4LjEyMiAzMi4wNjUtMS45NTYuNjA2LS4wMzMgMi4wMTgtLjc2NCAyLjI5OC0xLjg0OCAxLjExMy00LjMxNyA0LjAwOC0xMy4yNiA0LjQ1OC0xNS42NC45MzItNC45MjUgMi4wNjEtOC41NTgtNC4yOC03LjQwNSAwIDAtMzUuNzY4IDMuNDg3LTM2LjgzMyAzLjU3M3oiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWx0ZXI9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDM4IDcuODA4KSI+PG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2IiLz48L21hc2s+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYiIvPjxwYXRoIGZpbGw9IiMyMDczQzEiIGQ9Ik01My45NjIgNy43NzRsLTUuNzAxIDE5LjMwNS00MC43OCAxLjU3NHoiIG1hc2s9InVybCgjYykiIG9wYWNpdHk9Ii4xIi8+PC9nPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjYiIGQ9Ik05LjM3NCAxOC43MjJTNy44NjggMTEuMjgzIDcuMzIzIDguNzFDNi43NzggNi4xMzYgNS44NiA1LjMzIDMuOTc4IDQuNTIgMi4wOTYgMy43MTMuMzY3IDIuMjg2LjM2NyAyLjI4NiIvPjxjaXJjbGUgY3g9IjQ2IiBjeT0iNTEiIHI9IjQiIGZpbGw9IiNGRkYiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjUxIiByPSI0IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==) no-repeat ;
      background-size: 58%;
      background-position: center;
      border-radius: 50%;
      border: 5px solid rgba(61,61,63,.9);
    }
    .totalPrice{
      margin: 10px 80px;
      p{
        margin-top: 5px;
        font-size:10px;
        color: #999;
        .actualPrice{
          margin-right: 5px;
          font-size: 18px;
          color: #fff;
        }
        .originalPrice{
          font-size: 12px;
          text-decoration: line-through;
        }
      }
    }
    .account{
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 16px;
      height: 100%;
      width: 105px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background-color: #41C976;
    }
  }
}
</style>