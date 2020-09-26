<template>
  <div id="personal" class="page">
    <div class="user">
      <img src="https://cube.elemecdn.com/c/6b/8384f98b8dedfd87fc1450926648cjpeg.jpeg?x-oss-process=image/format,webp/resize,w_120,h_120,m_fixed" alt="">
      <div>
        <span class="username">测试用户</span>
        <span><span class="iconfont icon-mobile-phone"></span> 157****8678</span>
      </div>
    </div>
    
    <div class="list">
    <ul>
      <li>
        <span class="iconfont icon-location-information" style="color: rgb(74, 165, 240)"></span>
        <span class="text">我的地址</span>
      </li>
    </ul>

    <ul>
      <li>
        <span class="iconfont icon-shopping-bag-" style="color: rgb(148, 217, 74)"></span>
        <span class="text">金币商城</span>
      </li>
      <li>
        <span class="iconfont icon-present" style="color: rgb(252, 123, 83)"></span>
        <span class="text">分享拿20元现金</span>
      </li>
    </ul>

    <ul>
      <li>
        <span class="iconfont icon-service" style="color: rgb(74, 165, 240)"></span>
        <span class="text">我的客服</span>
      </li>
      <li>
        <span class="iconfont icon-platform-eleme" style="color: rgb(74, 165, 240)"></span>
        <span class="text">下载饿了么APP</span>
      </li>
      <li>
        <span class="iconfont icon-document" style="color: rgb(74, 165, 240)"></span>
        <span class="text">规则中心</span>
      </li>
    </ul>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#personal{
  background-color: #eee;
}
.user{
  width: 100%;
  height: 110px;
  padding: 25px 25px;
  box-sizing: border-box;background-image: linear-gradient(90deg,#0af,#0085ff);
  display: flex;
  color: #fff;
  img{
    height: 60px;
    width: 60px;
    border-radius: 50%;
  }
  div{
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    span{
      display: flex;
    }
    .username{
      font-size: 20px;
    }
    .iconfont{
      font-size: 10px;
      margin-right: 3px;
    }
  }
}
.list{
  ul{
    border: 1px solid #ddd;
    margin-top: 20px;
    li{
      color: #333;
      display: flex;
      align-items: center;
      height: 45px;
      background-color: #fff;
      .iconfont{
        font-size: 18px;
        width: 50px;
        text-align: center;
      }
      .text{
        font-size: 16px;
        box-sizing: border-box;
        flex: 1;
        line-height: 45px;
        border-bottom: 1px solid #eee;
      }
    }
  }
}

</style>