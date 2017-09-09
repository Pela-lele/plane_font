<template>
  <!--个人信息-->
  <div class="wrapper">
    <div class="grxx-bg">
      <span>个人中心</span>
      <!--<i class="icon-icon4 iconfont"></i>-->
    </div>
    <div class="input-info">
      <div class="info-list">
        <i class="iconfont icon-shouji icon-style"></i>
        <div class="text-info">
          <input placeholder="请输入手机号">
        </div>
      </div>
      <div class="info-list border-style">
        <i class="iconfont icon-xiugaimima icon-style"></i>
        <div class="text-info">
          <input placeholder="请输入密码">
        </div>
      </div>
      <div class="footer-bg">
        <router-link :to="{path:'/grxxList'}" tag="span">
        <span class="log-in">登录</span>
        </router-link>
        <div class="res-text">
          <router-link :to="{path:'/yhzcTel'}" tag="span">
            <span class="text-style">用户注册</span>
          </router-link>
          <router-link :to="{path:'/yhzcPwd'}" tag="span">
            <span class="text-style">忘记密码？</span>
          </router-link>
        </div>
      </div>

    </div>

  </div>
</template>

<style rel="stylesheet/scss" lang="scss">
  @import '../../assets/sass/_base';
  .wrapper{
    overflow: hidden;

    .grxx-bg{
    background:url(../../assets/img/grxx/bg.jpg) repeat;
    height: 180px;
    margin: -8px;
    text-align: center;
   span{
     color: white;
     font-size: 24px;
     font-weight: bold;
     display: block;
     padding-top: 80px;
   }

  }
    .input-info{
      box-sizing: border-box;
      display: block;
      overflow: hidden;
      .info-list{
        background: #ffffff;
        min-height: 48px;
        padding:5px;
        display: flex;
        border-bottom: 1px solid $border-color;
        .icon-style{
          color: $theme-color;
          height: 32px;
          font-size: 32px;
          width: 50px;
          line-height: 50px;
        }
        .text-info{
          flex: 1;
          display: flex;
          input{
            height: 48px;
            border-radius: 0;
            border: 0;
            line-height: 1.6;
            width: 100%;
          }
        }

      }
      .border-style{
        border: 0px;
      }


    }
    .footer-bg{
      background: #e3f3ff repeat;
      text-align: center;
      position: absolute;
      top: 287px;
      bottom: 0px;
      left: 0px;
      right: 0px;
      .log-in{display: inline-block;
        width: 40%;
        margin-top: 50px;
        margin-bottom: 50px;
        text-align: center;
        border-radius: 40px;
        padding: 15px 10px;
        background: #2da8e1;
        color: white;
        box-shadow: 1px 1px #0086b3;
      }
      .res-text{
        color: gray;
        padding: 10px;
        .text-style{
          padding: 0px 30px;
        }
      }

    }

  }

</style>
