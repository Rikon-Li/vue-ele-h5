<template>
  <div id="category" >
    <!-- <div>{{data}}</div> -->
    <div class="fake-div"></div>
    <ul class="itemlist">
      <li v-for="item in data" :key="item.id" class="item">
        <img :src="item.picUrl" alt="picUrl" class="pic">
        <span class="name">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  },
  watch:{
    data(){
      // console.log(this.data);
    }
  },
  mounted(){
    
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/global-style.scss";
.fake-div{
  width: 100%;
  height: 95px;
}
.itemlist{
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;

  .item{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    color: $font-color-light;
    .pic{
      width: 45px;
    }
    .name{
      font-size: 12px;
      line-height: 25px;
    }
  }
}

</style>