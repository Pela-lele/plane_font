<template>
  <!--无人机添加-->
  <div class="wrapper">
    <div class="group">
      <label>品牌</label>
      <ul class="selection-list">
        <router-link :to="{path:'/wrjgl/wrjglAdd/wrjglProductor'}" tag="li">
        <li class="selection">
          <span class="selected">{{wrjgl.choosePro==""?"请选择无人机厂商":wrjgl.choosePro}}</span>
            <i class="iconfont icon-enter common-right"></i>
        </li>
        </router-link>
      </ul>
    </div>
    <div class="group">
      <label>型号</label>
      <ul class="selection-list">
        <router-link :to="{path:'/wrjgl/wrjglAdd/wrjglType'}" tag="li">
          <li class="selection">
            <span class="selected">{{wrjgl.chooseType==""?"请选择无人机型号":wrjgl.chooseType}}</span>
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
            <input placeholder="请输入机身码" v-model="droneSn">
          </div>
          <router-link :to="{path:'/wrjgl/wrjglTip'}" tag="i">
            <i class="iconfont q-style icon-31yiwen"></i>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="group border-style">
      <label>无人机照片</label>
      <ul class="selection-list">
        <li class="selection">
        <span class="tips">(请将上传正面照)</span>
          <i class="iconfont add-style icon-addition"></i>
          <input type="file" id="image" capture="camera" accept="image/jpeg,image/gif,image/jpg,image/png" class="choose-pic" @change="onFileChange($event,'image')">
        </li>
      </ul>
    </div>
    <div class="choosen-pic"  @click="chooseImg('1')" :style="{backgroundImage: 'url(' + image + ')'}">
      <!--<img :src="image">-->
    </div>
    <div class="group" style="border-top:1px solid #e8e8e8">
      <label>添加保险</label>
      <ul class="selection-list">
        <li class="selection">
          <span class="tips">(非必须添加)</span>
          <mt-switch v-model="value"></mt-switch>
        </li>
      </ul>
    </div>
    <div v-show="value">
      <div class="group">
        <label>保险单号</label>
        <ul class="selection-list">
          <li class="selection">
            <div class="input-box">
              <input placeholder="请输入保险单号" v-model="droneInsurance">
            </div>
          </li>
        </ul>
      </div>

      <div class="group border-style">
        <label>保险单图片</label>
        <ul class="selection-list">
          <li class="selection">
            <span class="tips">(请尽可能拍摄清晰)</span>
            <i class="iconfont add-style icon-addition"></i>
            <input type="file" id="image1" capture="camera" accept="image/jpeg,image/gif,image/jpg,image/png" class="choose-pic" @change="onFileChange($event,'image1')">
          </li>
        </ul>
      </div>
      <div class="choosen-pic" @click="chooseImg('2')" :style="{backgroundImage: 'url(' + image1 + ')'}">
        <!--<img :src="image1">-->
      </div>
    </div>

    <div class="common-absolute-footer" @click="submitAdd">
      <span class="absolute-footer-btn">提交</span>
    </div>
    <router-view></router-view>

  </div>

</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  import api from '@/api/API';
  import {Toast} from 'mint-ui';

  import wrjPic from "../../assets/img/wrj/demo3.jpg";
  import baodanPic from "../../assets/img/wrj/baodan.jpg";

  export default {
      data(){
          return{
            value:false,
            droneSn:"",
            droneInsurance:"",
            image:wrjPic,
            uploadImage:"",
            image1:baodanPic,
            uploadImage1:""

          }
      },
    computed:{
      ...mapState([
        'wrjgl'
      ]),

    },
    methods:{
      ...mapMutations([
        'DELETE_WRJGLPRO',
        'DELETE_WRJGLTYPE'
      ]),
      chooseImg(index){
          if(1 == index){
            document.getElementById("image").click();
          }else{
            document.getElementById("image1").click();
          }
      },
      onFileChange(e,pic) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;

        var img = files[0];
        var formData = new FormData();
        formData.append('upload',img);
        var vm = this;
        api.uploadDroneImg(formData).then(function (res) {
          var imgData = res.data;
          if(imgData.code == 0 && imgData.filePath){
            if('image' == pic){
              vm.uploadImage = imgData.filePath;
            }else{
              vm.uploadImage1 = imgData.filePath;
            }

          }else{
            Toast("上传图片失败！");
          }
        });
        this.createImage(files[0],pic);
      },
      createImage(file,pic) {
        var image = new Image();
        var reader = new FileReader();
        var vm = this;

        reader.onload = (e) => {
          vm[pic] = e.target.result;
        };
        reader.readAsDataURL(file);
      },
      submitAdd(){
          if(this.wrjgl.choosePro.length == 0){
            Toast("请选择无人机厂商");
            return;
          }
          if(this.wrjgl.chooseType.length == 0){
            Toast("请选择无人机型号");
            return;
          }
          if(this.droneSn.length.length == 0){
            Toast("请填写机身码");
            return;
          }
          if(this.image == wrjPic || !this.image){
            Toast("请上传无人机图片");
            return;
          }
          if(this.value){
            if(this.droneInsurance.length == 0){
              Toast("请填写保险单号");
              return;
            }
            if(this.image1 == baodanPic || !this.image1){
              Toast("请上传保单图片");
              return;
            }
          }

        //提交表单
        var data ={
          "drone.droneSn":this.droneSn,
          "drone.droneCId":this.wrjgl.parentId,
          "drone.droneCName":this.wrjgl.choosePro,
          "drone.droneMId":this.wrjgl.droneId,
          "drone.droneMName":this.wrjgl.chooseType,
          "drone.dronePic":this.uploadImage,
          "drone.droneInsurance":this.droneInsurance,
          "drone.droneInsurancePic":this.uploadImage1,
        };
        var self = this;
        api.SaveDroneInfo(data).then(function(res){
          var resData = res.data;
          if(resData == 0){
            self.$router.push("/wrjgl")
          }
        })
      }
    },
    beforeRouteLeave(to, from, next) {
      if(to.name == "wrjgl"){
        console.log("销毁");
        this.DELETE_WRJGLPRO();
        this.DELETE_WRJGLTYPE();
      }
      next();
    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../assets/sass/_base';
  .wrapper {
    .border-style{
      border: 0px;
      overflow-x: hidden;
    }
    .border-top{
      border-top:1px solid $border-color;
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
    .mint-switch{
      position: absolute;
      top: 10px;
      right: 0px;
    }
    .choosen-pic{
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      width: 300px;
      height: 200px;
      margin: 0 auto;
    }
  }
</style>
