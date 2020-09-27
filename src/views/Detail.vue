<template>
  <div id="detail">
    <appScroll class="scroll">
      <div class="top">
        <div
          class="background"
          :style="{ backgroundImage: 'url(' + rstData.bg_path + ')' }"
        >
          <div @click="backHome">
            <span class="iconfont icon-arrow-left"></span>
          </div>
          <img class="shopLogo" :src="rstData.image_path" />
        </div>
        <div class="shopDetails">
          <h1 class="name">{{ rstData.name }}</h1>
          <ul class="more">
            <li>评价{{ rstData.rating }}</li>
            <li>月售{{ rstData.recent_order_num }}单</li>
            <li>蜂鸟快送约{{ rstData.order_lead_time }}分钟</li>
          </ul>
          <span class="notice">公告: {{ rstData.promotion_info }}</span>
        </div>
        <div class="tabs">
          <div
            class="tabWrap"
            v-for="(item, index) in tabsItems"
            @click="switchTabs(item, index)"
            :key="index"
          >
            <span class="tab" :class="selectedTab === item ? 'Active' : ''">{{
              item
            }}</span>
          </div>
        </div>
      </div>
      <orderFood v-show="selectedTab === '点餐'" :data="menuData" />
      <evaluate v-show="selectedTab === '评价'" />
      <shopInfo v-show="selectedTab === '商家'" />
    </appScroll>

    <div class="bottom">
      <div class="bottomWrap">
        <div class="cartButton"></div>
        <div class="totalPrice">
          <p>
            <span class="actualPrice">¥{{ this.total }}</span
            ><span class="originalPrice">¥{{ this.originTotal }}</span>
          </p>
          <p>另需配送费9元</p>
        </div>
      </div>
      <div class="account" @click="showBill">去结算</div>
    </div>
    <div class="payPage" v-if="showPay">
      <div class="payHeader">
        <span @click="hideBill" class="iconfont icon-arrow-left"></span
        ><span>确认订单</span>
      </div>
      <div class="payContent">
        <div class="payWrap">
          <div class="addInfoWrap">
            <div class="addInfo">
              <p class="deliveryTo">订单配送至</p>
              <p class="adds">兴围村-南区十一巷</p>
              <p>
                <span class="name">李根(先生)</span
                ><span class="tel">15779078678</span>
              </p>
            </div>
          </div>
          <div class="orderList">
            <div class="shopTitle">{{ currentInfo.rst_name }}</div>
            <div class="foods" v-for="item in shopList" :key="item.id">
              <img :src="item.image_path" alt="" />
              <span class="name">{{ item.name }}</span>
              <span class="num">x{{ item.num }}</span>
              <span class="price">¥{{ item.price }}</span>
            </div>
            <div class="total">小计：{{ total }}元</div>
          </div>
        </div>
      </div>
      <div class="payFooter">
        <div class="price">¥{{ total }}</div>
        <div @click="payBill()" class="payBill">去支付</div>
      </div>
    </div>
  </div>
</template>

<script>
import orderFood from "../components/Detail/order-food";
import evaluate from "../components/Detail/evaluate";
import shopInfo from "../components/Detail/shop-info";
import appScroll from "../components/common/app-scroll";

import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      tabsItems: ["点餐", "评价", "商家"],
      selectedTab: "点餐",
      showPay: false,
    };
  },
  computed: {
    ...mapState({
      shopData: (state) => state.detail.shopData,
      menuData: (state) => state.detail.menuData,
      recommendData: (state) => state.detail.recommendData,
      rstData: (state) => state.detail.rstData,
      shopList: (state) => state.cart.shopList,
      total: (state) => state.cart.total,
      originTotal: (state) => state.cart.originTotal,
      orderList: (state) => state.cart.orderList,
      billTotal: (state) => state.cart.billTotal,
      currentInfo: (state) => state.cart.currentInfo,
    }),
  },
  components: {
    orderFood,
    evaluate,
    shopInfo,
    appScroll,
  },
  methods: {
    ...mapMutations({
      transAction: "cart/transAction",
      setBillList: "cart/setBillList",
    }),
    requestData() {
      this.$store.dispatch("detail/requestShopData");
      this.$store.dispatch("detail/requestCommentsData");
    },
    switchTabs(tabName, index) {
      this.selectedTab = tabName;
    },
    showBill() {
      this.showPay = true;
    },
    hideBill() {
      this.showPay = false;
    },
    payBill() {
      this.hideBill();
      this.transAction();
      this.$router.push("orders");
      this.setBillList();
    },
    backHome() {
      this.$router.push("main");
    },
  },
  created() {
    this.requestData();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/global-style.scss";
#detail {
  display: block;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  position: relative;
  z-index: 100;
  .top {
    width: 100%;
    // background-color: #5ff;
    .background {
      width: 100%;
      height: 100px;
      background-size: 100%;
      background-position: center;
      position: relative;
      &::before {
        content: "";
        width: 100%;
        height: 100px;
        background-color: rgba(0, 0, 0, 0.3);
        position: absolute;
      }
    }
    .icon-arrow-left {
      font-size: 24px;
      font-weight: 700;
      color: #fff;
      margin: 5px 5px;
      position: absolute;
    }
    .shopLogo {
      width: 75px;
      height: 75px;
      position: absolute;
      left: 50%;
      margin-left: -37.5px;
      bottom: -15px;
      border-radius: 5px;
    }
    .shopDetails {
      padding-top: 25px;
      width: 280px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      align-items: center;
      .name {
        font-size: 20px;
        font-weight: 500;
        color: #222;
        line-height: 28px;
      }
      .more {
        color: #666;
        display: flex;
        line-height: 22px;
        li {
          width: fit-content;
          margin: 0 6px;
        }
      }
      .notice {
        line-height: 22px;
        color: #999;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
      }
    }
    .tabs {
      margin-top: 10px;
      display: flex;
      width: 100%;
      height: 40px;
      justify-content: space-around;
      border-bottom: 1px solid #eee;
      .tabWrap {
        flex: 1;

        color: #666;
        font-size: 15px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        // overflow: hidden;
        .tab {
          line-height: 38px;
          border-bottom: 3px solid transparent;
        }
        .Active {
          border-bottom: 3px solid #2395ff;
          font-weight: 500;
          color: #333;
        }
      }
    }
  }
  .bottom {
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(61, 61, 63, 0.9);
    .cartButton {
      position: absolute;
      top: -8px;
      left: 15px;
      width: 40px;
      height: 40px;
      background: #3892e5
        url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTggNTgiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIiBzdGREZXZpYXRpb249IjEuNSIvPjxmZUNvbG9yTWF0cml4IGluPSJzaGFkb3dCbHVyT3V0ZXIxIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA4IDAiLz48ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTcuNjE0IDQuMDUxYy0xLjA2Ni4wODYtMS40NTItLjM5OC0xLjc1Mi0xLjU4NEM1LjU2MiAxLjI4LjMzIDUuODguMzMgNS44OGwzLjcxIDE5LjQ3NmMwIC4xNDgtMS41NiA3LjUxNS0xLjU2IDcuNTE1LS40ODkgMi4xOS4yOTIgNC4yNyAzLjU2IDQuMzIgMCAwIDM2LjkxNy4wMTcgMzYuOTIuMDQ3IDEuOTc5LS4wMTIgMi45ODEtLjk5NSAzLjAxMy0zLjAzOS4wMy0yLjA0My0xLjA0NS0yLjk3OC0yLjk4Ny0yLjk5M0w4LjgzIDMxLjE5MnMuODYtMy44NjUgMS4wNzctMy44NjVjMCAwLTUuNzg4LjEyMiAzMi4wNjUtMS45NTYuNjA2LS4wMzMgMi4wMTgtLjc2NCAyLjI5OC0xLjg0OCAxLjExMy00LjMxNyA0LjAwOC0xMy4yNiA0LjQ1OC0xNS42NC45MzItNC45MjUgMi4wNjEtOC41NTgtNC4yOC03LjQwNSAwIDAtMzUuNzY4IDMuNDg3LTM2LjgzMyAzLjU3M3oiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWx0ZXI9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDM4IDcuODA4KSI+PG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2IiLz48L21hc2s+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYiIvPjxwYXRoIGZpbGw9IiMyMDczQzEiIGQ9Ik01My45NjIgNy43NzRsLTUuNzAxIDE5LjMwNS00MC43OCAxLjU3NHoiIG1hc2s9InVybCgjYykiIG9wYWNpdHk9Ii4xIi8+PC9nPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjYiIGQ9Ik05LjM3NCAxOC43MjJTNy44NjggMTEuMjgzIDcuMzIzIDguNzFDNi43NzggNi4xMzYgNS44NiA1LjMzIDMuOTc4IDQuNTIgMi4wOTYgMy43MTMuMzY3IDIuMjg2LjM2NyAyLjI4NiIvPjxjaXJjbGUgY3g9IjQ2IiBjeT0iNTEiIHI9IjQiIGZpbGw9IiNGRkYiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjUxIiByPSI0IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)
        no-repeat;
      background-size: 58%;
      background-position: center;
      border-radius: 50%;
      border: 5px solid rgba(61, 61, 63, 0.9);
    }
    .totalPrice {
      margin: 10px 80px;
      p {
        margin-top: 5px;
        font-size: 10px;
        color: #999;
        .actualPrice {
          margin-right: 5px;
          font-size: 18px;
          color: #fff;
        }
        .originalPrice {
          font-size: 12px;
          text-decoration: line-through;
        }
      }
    }
    .account {
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
      background-color: #41c976;
    }
  }
  .payPage {
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: #fff;
    left: 0;
    top: 0;
    .payHeader {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 44px;
      background: #2395ff;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 18px;
      }
      .iconfont {
        position: absolute;
        font-size: 20px;
        left: 15px;
        top: 15px;
      }
    }
    .payContent {
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      padding: 44px 0;
      .payWrap {
        height: 100%;
        width: 100%;
        background-image: linear-gradient(
            0deg,
            #f5f5f5,
            #f5f5f5 65%,
            hsla(0, 0%, 96%, 0.3) 75%,
            hsla(0, 0%, 96%, 0)
          ),
          linear-gradient(270deg, #0085ff, #0af);
        .addInfoWrap {
          display: flex;
          padding: 10px 15px;
          box-sizing: border-box;
          width: 100%;
          height: 107px;
          // background-color: #fff;
          .addInfo {
            p {
              font-size: 14px;
              color: #fff;
              margin: 10px 0;
            }
            .adds {
              font-size: 22px;
            }
          }
        }
        .orderList {
          margin: 0 5px;
          padding: 0 20px;
          background-color: #fff;
          color: #333;
          .shopTitle {
            height: 48px;
            font-size: 17px;
            font-weight: 700;
            border-bottom: 2px solid #e6e6e6;
            display: flex;
            align-items: center;
            box-sizing: border-box;
          }
          .foods {
            border-bottom: 1px solid #eee;
            display: flex;
            align-items: center;
            height: 30px;
            padding: 12px 0;
            img {
              width: 36px;
              height: 36px;
            }
            .name {
              width: 150px;
              margin-left: 10px;
              font-size: 14px;
              font-weight: 500;
            }
            .num {
              margin: 0 20px;
              width: 30px;
            }
            .price {
              margin: 0 20px;
              width: 30px;
              color: #ff4a07;
              font-size: 16px;
            }
          }
          .total {
            height: 48px;
            font-size: 17px;
            font-weight: 700;
            border-bottom: 2px solid #e6e6e6;
            display: flex;
            align-items: center;
            box-sizing: border-box;
          }
        }
      }
    }
    .payFooter {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 44px;
      width: 100%;
      background-color: #3c3c3c;
      .price {
        height: 100%;
        line-height: 44px;
        padding: 0 20px;
        font-size: 18px;
        color: #fff;
      }
      .payBill {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 44px;
        width: 110px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 17px;
        background-color: #00e067;
      }
    }
  }
}
.scroll {
  height: 100%;
}
</style>