<template>
  <div id="main">
    <!-- <h1>Main</h1> -->
    <nav class="menu">
      <router-link class="menu-item" to="/home">
        <span class="iconfont icon-eleme"></span>
        <span>首页</span>
      </router-link>
      <router-link class="menu-item" to="/orders">
        <span class="iconfont icon-s-order"></span>
        <span>订单</span>
      </router-link>
      <router-link class="menu-item" to="/personal">
        <span class="iconfont icon-user-solid"></span>
        <span>我的</span>
      </router-link>
    </nav>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/global-style.scss';
.menu {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px -1px 2px rgba(0,0,0,.1);
  z-index: 10;
  .menu-item {
    flex: 1;
    height: 50px;
    color: $font-color-light;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    span{
      padding: 2px 0;
      font-size: 10px;
    }
    .iconfont{
      font-size: 20px;
    }
    &.router-link-active {
      color: $theme-color;
    }
  }
}
</style>

