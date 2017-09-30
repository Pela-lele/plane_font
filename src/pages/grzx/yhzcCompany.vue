<template>
  <!--单位用户注册信息填写-->
  <div class="wrapper">
    <div class="group">
      <label>负责人</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text" placeholder="请输入负责人姓名"/>
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
      <label>企业名称</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text" placeholder="请输入企业名称"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>企业邮箱</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text" placeholder="请输入企业邮箱"/>
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
    <div class="group">
      <label>社会信用代码</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text" placeholder="请输入统一社会信用代码"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="group border-style">
      <label>营业执照</label>
      <ul class="selection-list">
        <li class="selection">
          <span class="tips">(请将营业执照放置取景框内)</span>
          <i class="iconfont add-style icon-addition"></i>
          <input type="file"  capture="camera" accept="image/jpeg,image/gif,image/jpg,image/png" class="choose-pic" @change="onFileChange">
        </li>
      </ul>
    </div>
    <div class="choosen-pic">
      <img :src="image">
    </div>
    <!--<div class="pic">-->
      <!--<div class="pic-style">-->
        <!--<input type="file"  capture="camera" accept="image/jpeg,image/gif,image/jpg,image/png" style="opacity: 0" @change="onFileChange">-->
        <!--<i class="icon-zhaoxiangji1 iconfont" v-if="!image"></i>-->
        <!--<img :src="image" v-else/>-->
      <!--</div>-->
    <!--</div>-->
    <router-link :to="{path:'/grxx'}" tag="div">
    <div class="common-absolute-footer">
      <span class="absolute-footer-btn">完成</span>
    </div>
    </router-link>

  </div>

</template>
<script>
  import personTip from '../../assets/img/grxx/personTip.jpg'
  export default {
      data(){
          return{
            isShowpicker: false,
            type:"text",
            image:personTip,
            pwd:"",
          }
      },
    methods:{
      switchStatus() {
        this.isShowpicker = !this.isShowpicker;
        if(this.type=="text"){
          this.type = "password";
        }else{
          this.type = "text";
        }
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
   overflow-x: hidden;
    .border-style{
      border: 0px;
    }

  }
</style>
