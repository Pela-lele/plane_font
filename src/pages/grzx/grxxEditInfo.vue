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

    <router-link :to="{path:'/grxx'}" tag="div">
      <div class="common-absolute-footer">
        <span class="absolute-footer-btn">保存修改</span>
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
