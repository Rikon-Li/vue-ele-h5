<template>
  <div id="order-food">
    <!-- <app-scroll class="scroll"> -->
    <div class="banner">
      <img src="https://cube.elemecdn.com/9/30/4b7f1c0fb6bf55da263a567c1c270png.png?x-oss-process=image/format,webp/resize,w_686"/>
    </div>
    <div class="menu">
      <div class="category">
        <li v-for="item in data" :key="item.index">
          <span>{{item.name}}</span>
        </li>
      </div>
      <div class="foods">
        <!-- <li v-for="item in ">123</li> -->
      </div>
    </div>
    <!-- </app-scroll> -->

    <!-- {{data}} -->
    
  </div>
</template>
  
<script>
import appScroll from '../../components/common/app-scroll'

export default {
  components:{
    appScroll,
  },
  props:{
    data: Array
  }
};
</script>
  
 
<style lang="scss" scoped>
@import "../../assets/global-style.scss";
#order-food{
  // height: 100%;
  width: 100%;
  .banner{
    padding: 8px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    img{
      width: 94%;
      border-radius: 5px;
    }
  }
  .menu{
    display: flex;
    width: 100%;
    // height: 100%;
    .category{
      
      
      li{
        background-color: #F8F8F8;
        width: 77px;
        height: 63px;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
          display: flex;
          color: #666;
          // background-color: #ff0;
          width: 62px;
          height: 28px;
        }
        
      }
    }
    .foods{
      flex: 1;
      display: flex;
      flex-direction: column;
      background-color: #ff0;
      li{
        height: 20px;
        background-color: #f00;
      }
    }
  }

}
.scroll{
  // height: ;
}
</style>