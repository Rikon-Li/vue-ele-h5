<template>
  <div id="shop-info">
    <div class="baseInfo">
      <div class="line1">
        <div class="line1_l">
          <h3 class="name">{{rstData.name}}</h3>
          <p class="addr">{{rstData.address}}</p>
        </div>
        <div class="line1_r">
          <span class="iconfont icon-phone-outline"></span>
        </div>
      </div>
      <div class="line2">
        <h3>商家信息</h3>
        <p>商家品类：<span v-for="(item,index) in rstData.flavors" :key="index">{{item.name}}</span></p>
        <p>营业时间：00:00-23:59</p>
      </div>
      <div class="license">
        <span>查看营业资质</span>
      </div>
    </div>
    <div class="shopService">
      <h3>商家服务</h3>
      <p v-for="(item,index) in rstData.supports" :key="index">
        <span>{{item.name}}: </span>
        <span>{{item.description}}</span>
      </p>
    </div>
    <div class="report">
      <span>举报商家</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  computed: {
    ...mapState({
      rstData: (state) => state.detail.rstData,
    })
  },
}
</script>

<style lang="scss" scoped>
.baseInfo, .shopService, .report{
  box-sizing: border-box;
  margin: 10px 10px;
  padding: 15px 10px;
  background-color: #fff;
  border-radius: 8px;
  h3{
    color: #191919;
    font-weight: 700;
    font-size: 14px;
    margin: 0 0 8px;
  }
  p{
    font-size: 12px;
    color: #666;
    margin: 0 0 8px;
    line-height: 16px;
  }
  .line1{
    display: flex;
    margin-bottom: 10px;
    .line1_l{
      width: 80%;
      border-right: 1px solid #eee;
    }
    .line1_r{
      flex:1;
      display: flex;
      justify-content: center;
      align-items: center;
      .iconfont{
        font-size: 30px;
        color: #02B6FD;
      }
    }
  }
  .license{
    display: flex;
    justify-content: center;
    align-self: center;
    span{
      color: #666;
      padding: 5px 16px;
      border: 1px solid #ccc;
      border-radius: 16px;
    }
  }
}
.report{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 14px;
  
}

</style>