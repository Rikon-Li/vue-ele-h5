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
                <p class="description"><span>{{food.description}}</span></p>
                <p><span class="month_sale">月售{{food.month_sales}}份</span><span class="satisfy_rate">好评率{{food.satisfy_rate}}%</span></p>
                <p><span class="discount_rate">{{food.discount_rate}}折</span><span class="limit">每单限1份优惠</span></p>
                <p>
                  <span class="price">¥{{food.price}}</span>
                  <span class="origin">¥{{food.origin_price}}</span>
                  <span class="addCart" @click="addCart({'category_id':food.category_id,'item_id':food.item_id,'name': food.name,'image_path': food.image_path, 'price': food.price},item.rst_name,item.rst_img)">加入购物车</span>
                </p>
                
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
import { mapState,mapMutations } from "vuex"

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
  computed: {
    ...mapState({
      menuData: (state) => state.detail.shopData,
      shopList: (state) => state.cart.shopList,
    })
  },
  methods: {
    ...mapMutations({
      setShopList: 'cart/setShopList' ,
      addShopList: 'cart/addShopList' ,
      setBillInfo: 'cart/setBillInfo'
    }),
    selectCategory(id){
      this.selectedID = id;
      console.log(id);
    },
    addCart( food, rst_name, rst_img ){
      var shopInfo = {'rst_name':rst_name, 'rst_img': rst_img}
      this.setBillInfo(shopInfo);
      let flag = false;
      this.shopList.forEach( (element, index) => {
        if (food.item_id === element.id){
          this.addShopList(index);
          flag = true;
          // console.log(this.shopList); 
        }
      })
      if (!flag){
        const newItem = {'id':food.item_id, 'name':food.name, num:'1', price:food.price, image_path: food.image_path};
        this.setShopList(newItem);
        // console.log(this.shopList); 
      }
    }
  }
};
</script>
  
 
 
<style lang="scss" scoped>
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
        margin: 10px 0;
        img{
          width: 95px;
          height: 95px;
        }
        .foodDetail{
          padding: 0 5px; 
          width: 170px;
          display: flex;
          flex-direction: column;
          color: #999;

          p{
            height: 20px;
            display: flex;
            align-items: center;
            position: relative;
            span{
              overflow:hidden;
              text-overflow: ellipsis; 
              white-space: nowrap;
            }
          }
          .name{
            font-size: 15px;
            font-weight: 700px;
            color: #333;
            overflow:hidden;
            text-overflow: ellipsis; 
            white-space: nowrap;
            margin-bottom: 5px;
          }
          .description{
            font-size: 10px;
          }
          .month_sale, .satisfy_rate{
            font-size: 10px;
            margin-right: 10px;
          }
          .discount_rate{
            line-height: 12px;
            font-size: 10px;
            padding: 0 2px;
            border: 1px solid #FF5339;
            color: #FF5339;
            margin-right: 10px;
          }
          .limit{
            font-size: 10px;
            color: #FF5339;
          }
          .price{
            font-size: 15px;
            color: #FF5339;
            margin-right: 10px;
          }
          .origin{
            text-decoration: line-through;
          }
          .addCart{
            position: absolute;
            right: 0;
            font-size: 12px;
            height: 20px;
            background-color: #3892E5;
            color: #fff;
            line-height: 20px;
            padding: 0 10px;
            border-radius: 10px;
          }
        }
      }
    }
  }
}
</style>