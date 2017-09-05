<template>
  <!--个人注册信息填写-->
  <div class="wrapper">
    <div class="group">
      <label>姓名</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text" placeholder="请输入姓名"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>身份证号</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text" placeholder="请输入身份证号"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>手机号</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text" value="18588888888"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>邮箱</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text" placeholder="请输入邮箱"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>飞行时长</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text" placeholder="请输入飞行时长"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>登录密码</label>
      <ul class="selection-list">
          <li class="selection">
            <div class="input-box">
              <input type="text" placeholder="请输入登录密码"/>
              <i class="switch-style">
                <mt-switch v-model="value"></mt-switch>
              </i>
            </div>
          </li>

        <!-- </li> -->
      </ul>
    </div>

  </div>

</template>

<style rel="stylesheet/scss" lang="scss">
  @import '../../assets/sass/_base';
  .wrapper{
  .group{
    display: flex;
    background-color: #fff;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: $border-color;
  label{
    vertical-align: middle;
    width: 30%;
    line-height: 48px;
    padding-left: 8px;
    text-align: center;
  }
  .selection-list{
    display: flex;
    flex:1;
    flex-flow:column;
  .selection{
    width: 100%;
    height: 48px;
    position: relative;
    border-bottom: 1px solid $border-color;
  &:last-child{
     border-bottom: 0 none;
   }
  .input-box{
    padding-right: 20px;
    height: 48px;
    line-height: 48px;
    color: #6e6a6a;
    padding-left: 20px;
  &>*{
      color: $theme-color;
    // font-size: 1.2rem;
      border: 0 none;
    }
  input{
    height: 40px;
    line-height: 40px;
  }
  }
    .switch-style{
      display: inline-block;
    }
  }
  }
  }

  }
</style>
