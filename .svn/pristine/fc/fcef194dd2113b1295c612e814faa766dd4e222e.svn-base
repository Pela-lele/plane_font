<template>
  <!--无人机添加-->
  <div class="wrapper">
    <div class="group">
      <label>品牌</label>
      <ul class="selection-list">
        <router-link :to="{path:'/wrjglProductor'}" tag="li">
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
        <router-link :to="{path:'/wrjglType'}" tag="li">
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


    <div class="submit-bg" @click="submitAdd">
      <span class="submit-style">提交</span>
    </div>

    <mt-datetime-picker
      ref="SignDatePicker"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleSignDatePicker">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="ValidDatePicker"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleValidDatepicker">
    </mt-datetime-picker>
    <mt-actionsheet :actions="actions" v-model="sheetVisible" cancelText=""></mt-actionsheet>
    <mt-actionsheet :actions="actions1" v-model="sheetVisible1" cancelText=""></mt-actionsheet>


  </div>

</template>
<script>
  import bus from '@/assets/eventBus';
  export default {
      data(){
          return{
            selectPro:"请选择无人机品牌",
            selectType:"请选择无人机型号",
            SignDatePicker: new Date(),
            ValidDatePicker:new Date(),
            signDate:"",
            validDate:"",
            image:null,
            bx:"",
            sheetVisible: false,
            yt:"",
            sheetVisible1: false,
            actions: [{
              name: '第三方责任险',
              method: this.setBx
            }, {
              name: '太平洋无人机保险',
              method: this.setBx
            },{
              name: '泰康无人机保险',
              method: this.setBx
            },{
              name: '其他保险',
              method: this.setBx
            }],
            actions1: [{
              name: '航拍摄影',
              method: this.setYt
            }, {
              name: '环境监测',
              method: this.setYt
            },{
              name: '喷洒农药',
              method: this.setYt
            },{
              name: '其他',
              method: this.setYt
            }],

          }
      },
    methods:{
      setBx(selecObj) {
        this.bx = selecObj.name;
      },
      setYt(selecObj) {
        this.yt = selecObj.name;
      },
      openStartTimepicker() {
        this.$refs.SignDatePicker.open();
      },
      openValidTimepicker() {
        this.$refs.ValidDatePicker.open();
      },
      handleSignDatePicker(date) {
        var str = date.Format("YYYY-MM-DD");
        this.signDate = str;
      },
      handleValidDatepicker(date) {
        var str = date.Format("YYYY-MM-DD");
        this.validDate = str;
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
      created(){
        console.log("created");
        var self = this;
        bus.$on("fxzsSelZs",function(selectItem){
          console.log("hhhhh");
//          self.formData.fxzsObj = selectItem;
        });
      },
//      mounted() {
//        this.actions = [{
//          name: 'Ⅰ级',
//          method: this.takePhoto
//        }, {
//          name: 'Ⅱ级',
//          method: this.openAlbum
//        },{
//          name: 'Ⅲ级',
//          method: this.openAlbum
//        },{
//          name: 'Ⅳ级',
//          method: this.openAlbum
//        },{
//          name: 'Ⅴ级',
//          method: this.openAlbum
//        },{
//          name: 'Ⅵ级',
//          method: this.openAlbum
//        }];
//      },
      submitAdd(){
        this.$router.back(-1);
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import '../../assets/sass/_base';
  .wrapper {
    overflow-y: auto !important;
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
          .selected{
            line-height: 48px;
            padding-left: 20px;
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

            .common-sel{
              width: 100%;
              line-height: 40px;
              height: 40px;
              font-size: 14px;
              option{
                width: 100%;
                line-height: 40px;
                height: 40px;
                font-size: 14px;
              }
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
    .submit-bg{
      text-align: center;
      background: #ffffff;
      .submit-style{
        display: inline-block;
        width: 40%;
        margin-top: 20px;
        margin-bottom: 20px;
        text-align: center;
        border-radius: 40px;
        padding: 15px 10px;
        background: #2da8e1;
        color: white;
      }
    }

  }
</style>
