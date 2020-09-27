<template>
  <div id="login">
    <span class="title">
      <span class="iconfont icon-platform-eleme"></span>
      <span>饿了么用户登录</span>
    </span>
    <div class="input usr">
      <div class="lable">用户名</div>
      <input
        class="text"
        type="text"
        placeholder="用户名"
        v-model="username"
        @click="messageHide"
      />
    </div>
    <div class="input">
      <div class="lable">密码</div>
      <input
        class="text"
        type="password"
        placeholder="密码"
        v-model="password"
        @click="messageHide"
      />
    </div>
    <div class="button">
      <div @click="handleRegister" class="loginButton">注册</div>
      <div @click="handleLogin" class="loginButton">登录</div>
    </div>
    <div class="message">
      <span v-if="show == 1">注册成功，请登录</span>
      <span v-if="show == 2">账户或密码不能为空</span>
      <span v-if="show == 3">账户或密码错误</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      show: 0,
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapState({
      storeUsername: (state) => state.user.username,
      storePassword: (state) => state.user.password,
    }),
  },
  methods: {
    ...mapMutations({
      setUserData: "user/setUserData",
    }),
    handleLogin() {
      if (this.username === "" || this.password === "") {
        this.show = 2;
      } else if (
        this.username == this.storeUsername &&
        this.password == this.storePassword
      ) {
        this.$router.push("main");
      } else {
        this.username = "";
        this.password = "";
        this.show = 3;
      }
    },
    handleRegister() {
      if (this.username === "" || this.password === "") {
        this.show = 2;
        this.username = "";
        this.password = "";
      } else {
        var userinfo = { username: this.username, password: this.password };
        this.setUserData(userinfo);
        this.username = "";
        this.password = "";
        this.show = 1;
      }
    },
    messageHide() {
      this.show = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
#login {
  background-color: #eee;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  .title {
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(35, 149, 255);
    font-size: 20px;
    .iconfont {
      font-size: 30px;
      margin-right: 10px;
    }
  }

  .usr {
    border-bottom: 1px solid #eee;
  }
  .input {
    width: 100%;
    height: 44px;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    background-color: #fff;
    .lable {
      display: flex;
      align-items: center;
      width: 100px;
      padding-left: 15px;
      box-sizing: border-box;
      color: #646566;
      font-size: 16px;
    }
    input {
      font-size: 16px !important;
      line-height: 20px;
      background: none;
      outline: none;
      border: none;
    }
    .text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      font-size: 14px;
    }
  }
  .button {
    margin-top: 20px;
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .loginButton {
    margin: 0 10px;
    width: 100px;
    height: 40px;
    color: #fff;
    font-size: 20px;
    line-height: 40px;
    letter-spacing: 10px;
    text-indent: 10px;
    text-align: center;
    background: rgb(35, 149, 255);
    border: none;
    border-radius: 10px;
  }
}
.message {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    border: 1px solid rgb(35, 149, 255);
    color: rgb(35, 149, 255);
    padding: 5px 10px;
    font-size: 16px;
    border-radius: 10px;
  }
}
</style>