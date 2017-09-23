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
            <input type="text" placeholder="请输入邮箱"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>登录密码</label>
      <ul class="selection-list">
          <li class="selection">
            <div class="input-box">
              <input  placeholder="请输入登录密码" type="password" v-show="isShowpicker" v-model="pwd">
              <input  placeholder="请输入登录密码" type="text" v-show="!isShowpicker" v-model="pwd">
              <i class="iconfont switch-style" :class="{'icon-xianshi':isShowpicker,'icon-yincang':!isShowpicker}" @click="switchStatus"></i>
            </div>
          </li>
      </ul>
    </div>
    <div class="group">
      <label>再次输入密码</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text" placeholder="请再次输入登录密码"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="group border-style">
      <label>证件照片</label>
      <ul class="selection-list">
        <li class="selection">
        <span class="tips">(请将人脸和身份证置于取景框中)</span>
          <router-link :to="{path:'/yhzcPersonTip'}" tag="i">
            <i class="iconfont q-style icon-31yiwen"></i>
          </router-link>

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
    <router-link :to="{path:'/grxx'}" tag="div">
      <div class="common-absolute-footer">
        <span class="absolute-footer-btn">完成</span>
      </div>
    </router-link>


  </div>

</template>
<script>
  export default {
      data(){
          return{
            isShowpicker: false,
            image:null,
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

        console.log(file.size);

        reader.onload =function (e) {
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
    background: white;
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    .border-style{
      border: 0px;
    }

  }
</style>
