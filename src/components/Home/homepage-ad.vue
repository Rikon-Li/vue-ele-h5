<template>
  <div id="homepage-ad">
    <div class="homepage-ad-wrap">

      <div class="ad-bar">
        <h3>品质套餐</h3>
        <p>搭配齐全吃得好</p>
        <b>立即抢购></b>
        <img src="https://cube.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?x-oss-process=image/format,webp/resize,w_282,h_188,m_fixed" alt="ad-bar-pic">
      </div>
      <div class="vip-bar">
        <p>

          <img src="https://cube.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?x-oss-process=image/format,webp/resize,w_34" alt="">
          <b>超级会员 </b>
          <span>· 每月领20元红包</span>
        </p>
          <i>限时1.99元开通</i>
    
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../../assets/global-style.scss";

.ad-bar{
  height: 110px;
  display: flex;
  margin: 25px 10px 0;
  padding: 12px 0 0 15px;
  box-sizing: border-box;
  position: relative;
  background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);flex-direction: column;
  h3{
    font-size: 17px;
    line-height: 24px;
    color: $font-color-deep;
  }
  p{
    font-size: 13px;
    line-height: 16px;
    color: $font-color-light;
  }
  b{
    font-size: 12px;
    line-height: 30px;
    color: #AF8260;
  }
  img{
    position: absolute;

    right: 10px;
    width: 141px;
    height: 94px;
  }
}
.vip-bar{
  padding: 0 15px;
  display: flex;
  margin: 3px 10px;
  height: 40px;
  background-color: #ffefc4;
  align-items: center;
  justify-content: space-between;
  color: #644f1b;
  p{
    display: flex;
    align-items: center;
    img{
      width: 17px;
      height: 17px;
    }
    b{
      font-size: 14px;
      font-weight: 500;
    }
    span{
      font-size: 12px;
    }
  }
  i{
    font-size: 12px;
  }
}
</style>