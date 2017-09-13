<template>
  <!--注册用户-->
  <div class="wrapper">
    <div class="input-info">
      <div class="info-list">
        <i class="iconfont icon-shouji icon-style" style="font-weight: bold"></i>
        <div class="text-info">
          <input placeholder="请输入手机号">
        </div>
        <span class="valid-code">验证码</span>
      </div>
      <div class="info-list">
        <i class="iconfont icon-yanzhengma icon-style"></i>
        <div class="text-info">
          <input placeholder="请输入验证码">
        </div>
      </div>
      <div class="info-list">
        <i class="iconfont icon-xiugaimima  icon-style1"></i>
        <div class="text-info">
          <input placeholder="请输入新密码" type="password" v-model="pwd" v-if="isShowpicker">
          <input placeholder="请输入新密码" type="text" v-model="pwd" v-else>
          <i class="iconfont switch-style" :class="{'icon-xianshi':isShowpicker,'icon-yincang':!isShowpicker}" @click="switchStatus"></i>
        </div>
      </div>
      <div class="info-list">
        <i class="iconfont icon-xiugaimima  icon-style1"></i>
        <div class="text-info">
          <input placeholder="请再次输入新密码" type="text">
        </div>
      </div>
      <router-link :to="{path:'/grxx'}" tag="div">
      <div class="tel-valid">
        <span class="valid">完成</span>
      </div>
      </router-link>

    </div>

  </div>
</template>
<script>
  export default{
      data(){
          return{
            isShowpicker: false,
            pwd:""
          }
      },
    methods:{
        switchStatus() {
          this.isShowpicker = !this.isShowpicker;
        }
      }
  }
</script>
  <style rel="stylesheet/scss" lang="scss">
  @import '../../assets/sass/_base';
  .wrapper {
    overflow: hidden;
    .input-info {
      box-sizing: border-box;
      display: block;
      overflow: hidden;
      .info-list {
        background: #ffffff;
        min-height: 48px;
        padding: 5px;
        display: flex;
        border-bottom: 1px solid $border-color;
        .icon-style{
          color: $theme-color;
          height: 50px;
          font-size: 32px;
          width: 50px;
          line-height: 50px;
          text-align: center;
        }
        .icon-style1{
          color: $theme-color;
          height: 50px;
          font-size: 32px;
          width: 50px;
          line-height: 50px;
          text-align: center;
          font-weight: 600;
        }
        .text-info {
          flex: 1;
          display: flex;
          input {
            height: 48px;
            border-radius: 0;
            border: 0;
            line-height: 1.6;
            width: 100%;
          }
          input:-webkit-autofill {

            -webkit-box-shadow: 0 0 0 1000px white inset !important;
          }
          .switch-style {
            font-size: 24px;
            width: 20px;
            color: $theme-color;
            line-height: 50px;
            margin-right: 10px;
          }
        }
        .valid-code{
          padding: 0px 15px;
          line-height: 30px;
          border-radius: 10px;
          background: #2da8e1;
          color: white;
          margin: 10px;
        }
      }
    }
    .tel-valid{
      text-align: center;
      .valid{
        display: inline-block;
        width: 240px;
        margin-top: 50px;
        margin-bottom: 50px;
        text-align: center;
        border-radius: 40px;
        padding: 15px 10px;
        background: #2da8e1;
        color: white;
        box-shadow: 1px 1px #0086b3;
      }
    }
  }
</style>
