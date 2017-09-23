<template>
  <!--无人机添加-->
  <div class="wrapper">
    <div class="group">
      <label>品牌</label>
      <ul class="selection-list">
        <router-link :to="{path:'/wrjgl/wrjglProductor'}" tag="li">
        <li class="selection">
          <span class="selected">{{selectPro}}</span>
            <i class="iconfont icon-enter common-right"></i>
        </li>
        </router-link>
      </ul>
    </div>
    <div class="group">
      <label>型号</label>
      <ul class="selection-list">
        <router-link :to="{path:'/wrjgl/wrjglType'}" tag="li">
          <li class="selection">
            <span class="selected">{{selectType}}</span>
            <i class="iconfont icon-enter common-right"></i>
          </li>
        </router-link>
      </ul>
    </div>
    <div class="group">
      <label>机身码</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input placeholder="请输入机身码">
          </div>
          <router-link :to="{path:'/wrjglTip'}" tag="i">
            <i class="iconfont q-style icon-31yiwen"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>保险</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box" @click="sheetVisible = true">
            <span>{{!bx==""?bx:"请选择保险"}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>用途</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box" @click="sheetVisible1 = true">
            <span>{{!yt==""?yt:"请选择无人机用途"}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="group border-style">
      <label>无人机照片</label>
      <ul class="selection-list">
        <li class="selection">
        <span class="tips">(请将上传正面照)</span>
          <router-link :to="{path:'/wrjPicTip'}" tag="i">
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

    <div class="common-absolute-footer" @click="submitAdd">
      <span class="absolute-footer-btn">提交</span>
    </div>

    <mt-actionsheet :actions="actions" v-model="sheetVisible" cancelText="取消"></mt-actionsheet>
    <mt-actionsheet :actions="actions1" v-model="sheetVisible1" cancelText="取消"></mt-actionsheet>


  </div>

</template>
<script>
  import bus from '@/assets/eventBus';
  export default {
      data(){
          return{
            selectPro:"请选择无人机品牌",
            selectType:"请选择无人机型号",
            image:null,
            bx:"",
            sheetVisible: false,
            yt:"",
            sheetVisible1: false,
            actions: [],
            actions1: [],
          }
      },
    methods:{
      setBx(selecObj) {
        this.bx = selecObj.name;
      },
      setYt(selecObj) {
        this.yt = selecObj.name;
      },
      submitForm() {
        this.$router.replace("/")
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
      submitAdd(){
        this.$router.back(-1);
      }
    },
    mounted(){
      this.actions = [{
        name: '第三方责任险',
        method: this.setBx
      }, {
        name: '太平洋无人机保险',
        method: this.setBx
      }, {
        name: '泰康无人机保险',
        method: this.setBx
      }, {
        name: '其他保险',
        method: this.setBx
      }];
      this.actions1 = [{
        name: '航拍摄影',
        method: this.setYt
      }, {
        name: '环境监测',
        method: this.setYt
      }, {
        name: '喷洒农药',
        method: this.setYt
      }, {
        name: '其他',
        method: this.setYt
      }];
      var self = this;
      bus.$on("type",function(selectItem){
          self.selectType = selectItem;
      });
      bus.$on("productor",function(selectItem){
          self.selectPro = selectItem;
      });

    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../assets/sass/_base';
  .wrapper {
    background: white;
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    .border-style{
      border: 0px;
    }
    .list-cell {
      .iconfont {
        display: block;
      }
    }
    .selected{
      line-height: 48px;
      padding-left: 20px;
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
    .common-right{
      color: $theme-color;
      line-height: 48px;
      font-size: 24px;
      width: 20px;
      position: absolute;
      right: 10px;

    }
    .tips{
      line-height: 50px;
      color: #6a6a6a;
      font-size: 12px;
    }
  }
</style>
