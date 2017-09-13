<template>
  <!--个人信息页包含编辑个人信息及修改密码-->
  <div class="wrapper">
    <div class="group">
      <label>姓名</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text"  value="张三"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>身份证号</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text" value="320882199611281140"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>手机号</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text" value="15888888888"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>邮箱</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text" value="hello@163.com"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="pic">
      <div class="pic-style">
        <input type="file"  capture="camera" accept="image/jpeg,image/gif,image/jpg,image/png" style="opacity: 0" @change="onFileChange">
        <i class="icon-zhaoxiangji1 iconfont" v-if="!image"></i>
        <img :src="image" v-else/>
      </div>
    </div>
    <!--<img src="../../assets/img/grxx/personTip.jpg">-->

    <router-link :to="{path:'/grxx'}" tag="div">
      <div class="tel-valid">
        <span class="valid">保存修改</span>
      </div>
    </router-link>


  </div>

</template>
<script>
  import personTip from '@/assets/img/grxx/personTip.jpg'
  export default {
    data(){
      return{
        isShowpicker: false,
        image:personTip,
        pwd:"",
      }
    },
    methods:{
      switchStatus() {
        this.isShowpicker = !this.isShowpicker;
      },
      onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.createImage(files[0]);
      },
      createImage(file) {
        var image = new Image();
        var reader = new FileReader();
        var vm = this;

        reader.onload = (e) => {
          vm.image = e.target.result;
        };
        reader.readAsDataURL(file);
      },
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../assets/sass/_base';
  .wrapper {
    overflow-y: auto;
    overflow-x: hidden;
    background: white;
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    .group {
      display: flex;
      background-color: #fff;
      border-width: 0 0 1px 0;
      border-style: solid;
      border-color: $border-color;
      label {
        vertical-align: middle;
        width: 30%;
        line-height: 48px;
        padding-left: 8px;
        text-align: center;
      }
      .selection-list {
        display: flex;
        flex: 1;
        flex-flow: column;
        .selection {
          width: 100%;
          height: 48px;
          position: relative;
          border-bottom: 1px solid $border-color;
          &:last-child {
            border-bottom: 0 none;
          }
          .input-box {
            padding-right: 20px;
            height: 48px;
            line-height: 48px;
            color: #6e6a6a;
            padding-left: 20px;
            & > * {
              color: $theme-color;
              border: 0 none;
            }
            input {
              height: 40px;
              line-height: 40px;
              font-size: 14px;
            }
            input:-webkit-autofill {

              -webkit-box-shadow: 0 0 0 1000px white inset !important;
            }
          }
          .tips{
            line-height: 50px;
            color: #6a6a6a;
            font-size: 12px;
          }
          .switch-style {
            font-size: 24px;
            width: 20px;
            position: absolute;
            right: 10px;
            color: $theme-color;
          }
          .q-style{
            font-size: 24px;
            width: 20px;
            position: absolute;
            top:12px;
            right: 10px;
            color: $theme-color;
          }
        }
      }
    }
    .border-style{
      border: 0px;
    }
    .pic{
      display: flex;
      background-color: #fff;
      height: 180px;
      text-align: center;
      padding-top: 20px;
      .pic-style{
        height: 160px;
        width: 160px;
        border: 1px dashed $border-color;
        margin: 0 auto;
        position: relative;
        text-align: center;
        i{
          font-size: 100px;
          line-height: 160px;
          color: #6a6a6a;
        }
        input{
          position: absolute;
          left: 0px;
          top: 0px;
          height: 160px;
          width: 160px;
        }
        img{
          width: 160px;
          height: 160px;
          margin: 0 auto;
        }
      }
    }
    .tel-valid{
      text-align: center;
      background: #ffffff;
      .valid{
        display: inline-block;
        width: 40%;
        margin-top: 20px;
        margin-bottom: 20px;
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
