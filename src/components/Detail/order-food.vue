<template>
  <div id="order-food">
    <!-- <app-scroll class="scroll"> -->
    <div class="banner">
      <img
        src="https://cube.elemecdn.com/9/30/4b7f1c0fb6bf55da263a567c1c270png.png?x-oss-process=image/format,webp/resize,w_686"
      />
    </div>
    <div class="menu">
      <div v-for="item in data" :key="item.index">
        <div class="category">
          <span @click="selectCategory(item.id)">{{ item.name }}</span>
        </div>
        <div class="foodslist">
          <li v-for="food in item.foods" :key="food.id" v-show="food.category_id===selectedID" >
            <div class="food">
              <img :src="food.image_path" alt="">
              <div class="foodDetail">
                <h3 class="name">{{food.name}}</h3>
                <p class="description">{{food.description}}</p>
                <p><span class="month_sale">月售{{food.month_sales}}份</span><span class="satisfy_rate">好评率{{food.satisfy_rate}}%</span></p>
                <p><span class="discount_rate">{{food.discount_rate}}折</span><span class="limit">每单限1份优惠</span></p>
                <p><span class="price">¥{{food.price}}</span><span class="origin">¥{{food.origin_price}}</span></p>
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
    <!-- </app-scroll> -->

    <!-- {{data}} -->
  </div>
</template>
  
<script>
import appScroll from "../../components/common/app-scroll";

export default {
  data(){
    return{
      selectedID: 300000000832544900,
    }
  },
  components: {
    appScroll,
  },
  props: {
    data: Array,
  },
  methods: {
    selectCategory(id){
      this.selectedID = id;
      console.log(id);
    }
  }
};
</script>
  
 
<style lang="scss" scoped>
@import "../../assets/global-style.scss";
#order-food {
  // height: 100%;
  width: 100%;
  .banner {
    padding: 8px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      width: 94%;
      border-radius: 5px;
    }
  }
  .menu {
    display: flex;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    .category {
      background-color: #f8f8f8;
      width: 77px;
      height: 63px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        display: flex;
        color: #666;
        // background-color: #ff0;
        width: 62px;
        height: 28px;
      }
    }
    .foodslist{
      position: absolute;
      left: 90px;
      top: 0;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      .food{
        display: flex;
        img{
          width: 95px;
          height: 95px;
        }
        .foodDetail{
          width: 170px;
          display: flex;
          flex-direction: column;
          color: #999;

          p{
            height: 20px;
            overflow:hidden;
            text-overflow: ellipsis; 
            white-space: nowrap;
          }
          .name{
            font-size: 15px;
            font-weight: 700px;
            color: #333;
            overflow:hidden;
            text-overflow: ellipsis; 
            white-space: nowrap;
          }
          .description{
            font-size: 10px;
          }
          .month_sale, .satisfy_rate{
            font-size: 10px;
          }
          .discount_rate{
            line-height: 12px;
            font-size: 10px;
            padding: 0 2px;
            border: 1px solid #FF5339;
            color: #FF5339;
          }
          .limit{
            font-size: 10px;
            color: #FF5339;
          }
          .price{
            font-size: 15px;
            color: #FF5339;
          }
          .origin{
            text-decoration: line-through;
          }
        }
      }
    }
  }
}
</style>