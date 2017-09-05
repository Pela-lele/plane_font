<template>
  <!--个人信息-->
  <div class="wrapper">
    <div class="grxx-bg">
      <span>个人中心</span>
    </div>
    <div class="input-info">
      <div class="tel">
        <i class="icon-shouji tel-icon"></i>
        <div class="text-info">
          <input placeholder="请输入手机号">
        </div>
      </div>

      <div class="boxcontainer">
        <a href="javsscript:;">搜索</a>
        <div>
          <input placeholder="请输入手机号">
        </div>


      </div>

    </div>

  </div>
</template>

<style rel="stylesheet/scss" lang="scss">
  @import '../assets/sass/_base.scss';
  .wrapper{

    .boxcontainer{
      display: box;
      border: 1px solid red;
      height: 32px;
      min-width: 100px;
      background: #ffffff;
    }
    .boxcontainer>div{
      box-flex: 1;
      -webkit-box-flex: 1;
      -moz-box-flex: 1;
    }
    .boxcontainer>div>input{
      min-width: 50px;
      width: 100%;
      box-sizing: border-box;
      height: 32px;
      border: 0;
    }
    .boxcontainer>a{
      min-width: 50px;
      display: inline-block;
      border: 1px solid red;
      height: 32px;
      line-height: 28px;
      text-align: center;
    }
  .grxx-bg{
    background:url(../assets/img/grxx/bg.jpg) repeat;
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
      position: relative;
      .tel{
        background: #ffffff;
        min-height: 48px;
        padding:5px;
        display: flex;
        .tel-icon{
          font-size: 24px;
          color: $theme-color;
          width: 32px;
          height: 32px;
          display: inline-block;
          position: absolute;
          top: 50%;
          left: 10px;
          transform: translateY(-50%);
        }
        .text-info{
          flex: 1;
          display: flex;
          input{
            box-sizing: border-box;
            height: 48px;
            border-radius: 0;
            border: 0;
            line-height: 1.6;
            width: 100%;
          }
        }

      }


    }

  }

</style>
