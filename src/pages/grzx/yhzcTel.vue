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
      <router-link :to="{path:'/yhzcType'}" tag="div">
        <div class="tel-valid">
          <span class="valid">下一步</span>
        </div>
      </router-link>


    </div>

  </div>
</template>
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
