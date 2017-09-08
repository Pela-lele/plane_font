<template>
  <!--个人中心列表页-->
  <div class="wrapper">
    <div class="person-info">
      <div class="content">
        <img src="../../assets/img/grxx/pic.jpg">
        <div class="content-right">
          <div>小明</div>
          <div>飞行时间：14h</div>
        </div>
      </div>
    </div>
    <div>
      <div class="info-list">
        <i class="iconfont icon-jihua"></i>
        <span>已报备飞行计划</span>
        <i class="iconfont icon-enter arrow-right"></i>
      </div>
      <div class="info-list">
        <i class="iconfont icon-zhengshu"></i>
        <span>飞行证书管理</span>
        <i class="iconfont icon-enter arrow-right"></i>
      </div>
      <div class="info-list">
        <i class="iconfont icon-wurenji-icon"></i>
        <span>无人机管理</span>
        <i class="iconfont icon-enter arrow-right"></i>
      </div>
      <div class="info-list">
        <i class="iconfont icon-gerenxinxi"></i>
        <span>个人信息管理</span>
        <i class="iconfont icon-enter arrow-right"></i>
      </div>

    </div>

  </div>
</template>

<style rel="stylesheet/scss" lang="scss">
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
        }
      }

    }
    .info-list{
      background: #ffffff;
      height: 48px;
      border-bottom: 1px solid $border-color;
      i{
        line-height: 48px;
        font-size: 24px;
        color: $theme-color;
        padding-left: 20px;
      }
      .arrow-right{
        position: absolute;
        right: 10px;
      }
      span{
        padding: 20px;
      }
    }


  }

</style>
