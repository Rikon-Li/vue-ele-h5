<template>
  <div id="evaluate">
    <div class="commentsWrap" v-for="(item, index) in commentsData" :key="index">
      <img :src="item.avatar" alt="">
      <div>
        <p class="username">{{item.username}}<span class="rated_at">{{item.rated_at}}</span></p>
        <p class="rating">{{item.rating}}</p>
        <p class="rating_text">{{item.rating_text}}</p>
      </div>
    </div>
    <div class="placeholder"></div>
  </div>
</template>


<script>
import { mapState } from "vuex"
export default {
  computed: {
    ...mapState({
      commentsData: (state) => state.detail.commentsData,
    })
  },
}
</script>

<style lang="scss" scoped>
#evaluate{
  background-color: #fff;
}
.commentsWrap{
  padding: 15px 0;
  margin: 0 15px;
  box-sizing: border-box;
  display: flex;
  // width: 100%;
  background-color: #fff;
  border-top: 1px solid #eee;
  img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  div{
    flex: 1;
    margin-left: 10px;
    color: #333;

    .username{
      margin-bottom: 8px;
      font-size: 13px;
      .rated_at{
        color: #999;
        font-size: 11px;
      }
    }
    .rating{
      margin-bottom: 8px;
      color: #FB9A0B;
    }
    .rating_text{
      font-size: 14px;
      line-height: 16px;
    }
  }
}
.placeholder{
  height: 50px;
}
</style>