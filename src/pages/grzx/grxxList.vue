<template>
  <!--个人中心列表页-->
  <div class="wrapper">
    <div class="person-info">
      <div class="content">
        <img src="../../assets/img/grxx/pic.jpg">
        <div class="content-right">
          <div class="user-name">小明</div>
          <div>飞行时间：14h</div>
        </div>
      </div>
    </div>
    <div class="list">
      <router-link :to="{path:'/fxjhList'}" tag="div">
        <div class="grxx-list">
          <i class="iconfont icon-jihua icon-list"></i>
          <span>已报备飞行计划</span>
          <i class="iconfont icon-enter arrow-right"></i>
        </div>
      </router-link>
      <router-link :to="{path:'/fxzs'}" tag="div">
        <div class="grxx-list">
          <i class="iconfont icon-zhengshu icon-list"></i>
          <span>飞行证书管理</span>
          <i class="iconfont icon-enter arrow-right"></i>
        </div>
      </router-link>
      <router-link :to="{path:'/wrjgl'}" tag="div">
        <div class="grxx-list">
          <i class="iconfont icon-wurenji-icon icon-list"></i>
          <span>无人机管理</span>
          <i class="iconfont icon-enter arrow-right"></i>
        </div>
      </router-link>
      <router-link :to="{path:'/grxxEditInfo'}" tag="div">
        <div class="grxx-list">
          <i class="iconfont icon-gerenxinxi icon-list"></i>
          <span>编辑个人信息</span>
          <i class="iconfont icon-enter arrow-right"></i>
        </div>
      </router-link>
      <router-link :to="{path:'/grxxEditPwd'}" tag="div">
        <div class="grxx-list">
          <i class="iconfont icon-xiugaimima icon-list"></i>
          <span>修改密码</span>
          <i class="iconfont icon-enter arrow-right"></i>
        </div>
      </router-link>

      <router-link :to="{path:'/grxx'}" tag="div">
        <div class="common-absolute-footer">
          <span class="absolute-footer-btn">注销登录</span>
        </div>
      </router-link>

    </div>


  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../assets/sass/_base';
  .wrapper{
    overflow: hidden;
    .person-info{
      text-align: center;
      background: #ffffff;
      padding-top: 20px;
      border-bottom: 1px solid $border-color;
      .content{
        width: 240px;
        margin: 0 auto;
        display: flex;
        img{
          width: 100px;
          height: 100px;
          border-radius: 10px;
        }
        .content-right{
          margin: 20px;
          div{
            margin: 20px auto;
          }
          .user-name{
            font-size: 16px;
          }
        }
      }

    }
    .list{
      padding: 20px;
      background: url("../../assets/img/grxx/timg.jpg") repeat;
      position: absolute;
      top:152px;
      left: 0;
      right: 0;
      bottom: 0;
      .grxx-list{
        background: #ffffff;
        height: 48px;
        margin: 10px 0;
        border-bottom: 1px solid $border-color;
        i{
          line-height: 48px;
          font-size: 24px;
          color: $theme-color;
          padding-left: 20px;
        }
        .icon-list{
          font-weight: bold;
        }
        .arrow-right{
          position: absolute;
          right: 20px;
        }
        span{
          padding: 20px;
        }
      }
    }
    .common-absolute-footer{
      background: none;
    }




  }

</style>
