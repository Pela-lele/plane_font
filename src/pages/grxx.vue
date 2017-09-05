<template>
  <!--个人信息-->
  <div class="wrapper">
    <div class="grxx-bg">
      <span>个人中心</span>
    </div>
    <div class="input-info">
      <div class="tel">
        <label class="tel-icon"></label>
        <div class="text-info">
          <input placeholder="请输入手机号">
        </div>

      </div>

    </div>

  </div>
</template>

<style rel="stylesheet/scss" lang="scss">
  .wrapper{
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
      margin-top:20px;
      box-sizing: border-box;
      min-height: 48px;
      display: block;
      overflow: hidden;
      position: relative;

      .tel-icon{
        background: url("../assets/img/grxx/phone.png");
        width: 32px;
        height: 32px;
        display: block;
      }
      .text-info{
        flex: 1;
        display: flex;
        input{
          border: 0px;
          flex: 1;
          color: inherit;
          display: flex;

        }
      }
    }

  }

</style>
