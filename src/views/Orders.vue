<template>
  <div id="orders" class="page">
    <div class="noOrder">
      <h1 v-if='billList.length==0'>
        <span class="iconfont icon-s-comment"></span>
        <span>
          您还没有下过订单哦～
        </span>
      </h1>
    </div>
    <div class="items">
      <div class="item" v-for="item in billList" :key="item.date">
        <div class="line1">
          <img :src="item.rst_img" alt="">
          <div>
            <p class="name">{{item.rst_name}}<span>已送达</span></p>
            <p class="time">{{item.time}}</p>
          </div>
        </div>
        <div class="line2">
          <!-- <p> -->
            <span class="price">¥{{item.total}}</span>
            <span @click="orderMore" class="more">再来一单</span>
          <!-- </p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      billList: (state) => state.cart.billList,
    })
  },
  methods: {
    orderMore(){
      this.$router.push('/detail')
    }
  }

}
</script>

<style lang="scss" scoped>
#orders{
  background-color: #eee;
}
.noOrder{
  margin-top: 150px;
  text-align: center;
  position: absolute;
  top: 150px;
  left: 50%;
  margin-left: -100px;
  color: #4DA6F0;
  font-size: 20px;
  .iconfont{
    font-size: 20px;
  }
}
.item{
  width: 100%;
  // height: 150px;
  margin-top: 20px;
  padding: 5px 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  box-sizing: border-box;
  color: #333;
  .line1{
    margin: 15px 0;
    width: 100%;
    display: flex;
    img{
      height: 50px;
      width: 50px;
    }
    div{
      width: 100%;
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      border-bottom: 1px solid #eee;
      .name{
        font-size: 16px;
        font-weight: 500;
        span{
          font-weight: normal;
          position: absolute;
          right: 20px;
          line-height: 20px;
          font-size: 13px;
          align-self: flex-end;
        }
      }
    }

  }
  .line2{
    margin: 5px 0;
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .price{
      font-size: 20px;
    }
    .more{
      font-size: 15px;
      color: #0089DC;
      border: 1px solid #0089DC;
      line-height: 24px;
      padding: 0 5px;
      border-radius: 5px;
    }

  }
}
</style>