<template>
  <!--飞行证书添加-->
  <div class="wrapper">
    <div class="container">
      <div class="group">
        <label>证书类型</label>
        <ul class="selection-list">
          <router-link :to="{path:'/fxzs/fxzsAdd/fxzsSelZs'}" tag="li">
          <li class="selection">
            <span class="selected">{{fxzsgl.chooseZs==""?"请选择证书类型":fxzsgl.chooseZs}}</span>
              <i class="iconfont icon-enter common-right"></i>
          </li>
          </router-link>
        </ul>
      </div>
      <div class="group">
        <label>证书编号</label>
        <ul class="selection-list">
          <li class="selection">
            <div class="input-box">
              <input type="text" placeholder="请输入证书编号" v-model="licenseSn"/>
            </div>
          </li>
        </ul>
      </div>
      <div class="group">
        <label>签证日期</label>
        <ul class="selection-list">
          <li class="selection" @click="openTimepicker($event,'signDate')">
            <div class="input-box">
              <span>{{! signDate==""?signDate:"请选择签证日期"}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="group">
        <label>有效日期</label>
        <ul class="selection-list">
          <li class="selection" @click="openTimepicker($event,'validDate')">
            <div class="input-box">
              <span>{{! validDate==""?validDate:"请选择有效期"}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="group">
        <label>证书级别</label>
        <ul class="selection-list">
          <li class="selection">
            <div class="input-box" @click="sheetVisible = true">
              <span>{{! zsLevel==""?zsLevel:"请选择证书级别"}}</span>

            </div>
          </li>
        </ul>
      </div>
      <div class="group">
        <label>持证人</label>
        <ul class="selection-list">
          <li class="selection">
            <div class="input-box">
              <input type="text" placeholder="请输入持证人姓名" value="小明" v-model="holderName"/>
            </div>
          </li>
        </ul>
      </div>
      <div class="group">
        <label>身份证号</label>
        <ul class="selection-list">
          <li class="selection">
            <div class="input-box">
              <input type="text" placeholder="请输入身份证号" value="32068219961140" v-model="holderIdcard"/>
            </div>
          </li>
        </ul>
      </div>
      <div class="group border-style">
        <label>证书照片</label>
        <ul class="selection-list">
          <li class="selection">
          <span class="tips">(请将人脸和证书置于取景框中)</span>
            <i class="iconfont add-style icon-addition"></i>
            <input name="upload" type="file"  capture="camera" accept="image/jpeg,image/gif,image/jpg,image/png" class="choose-pic" @change="onFileChange($event,'image')">
          </li>
        </ul>
      </div>

      <!--<div class="pic">-->
        <!--<div class="pic-style">-->
          <!--<input type="file"  capture="camera" accept="image/jpeg,image/gif,image/jpg,image/png" style="opacity: 0" @change="onFileChange">-->
          <!--<i class="icon-zhaoxiangji1 iconfont" v-if="!image"></i>-->
          <!--<img :src="image" v-else/>-->
        <!--</div>-->
      <!--</div>-->
      <div class="choosen-pic"  @click="chooseImg" :style="{backgroundImage: 'url(' + image + ')'}">
        <!--<img :src="image">-->
      </div>

      <div class="common-absolute-footer" @click="submitAdd($event)">
        <span class="absolute-footer-btn">提交</span>
      </div>
      <mt-actionsheet :actions="actions" v-model="sheetVisible" cancelText="取消"></mt-actionsheet>
    </div>

    <router-view></router-view>
  </div>

</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  import { Datetime } from 'vux'
  import api from '@/api/API'
  import personTip from '../../assets/img/grxx/personTip.jpg'
  import {Toast} from 'mint-ui'
  export default {
    components: {
      Datetime
    },
      data(){
          return{
            licenseSn:"",
            signDate:"",
            validDate:"",
            image:personTip,
            uploadImgUrl:'',
            selectItem:"请选择证件类型",
            sheetVisible: false,
            actions: [{
              name: 'Ⅰ级',
              method: this.setZsLevel
            }, {
              name: 'Ⅱ级',
              method: this.setZsLevel
            },{
              name: 'Ⅲ级',
              method: this.setZsLevel
            },{
              name: 'Ⅳ级',
              method: this.setZsLevel
            },{
              name: 'Ⅴ级',
              method: this.setZsLevel
            },{
              name: 'Ⅵ级',
              method: this.setZsLevel
            }],
            zsLevel:"",
            file:"",
            holderName:"",
            holderIdcard:""
          }
      },
    computed:{
      ...mapState([
        'fxzsgl'
      ]),

    },
    methods:{
      ...mapMutations([
        'DELETE_FXZSTYPE'
      ]),
      openTimepicker(e,typeTime) {
        var self = this;
        console.log(arguments)
        this.$vux.datetime.show({
          cancelText: '取消',
          confirmText: '确定',
          format: 'YYYY-MM-DD',
          yearRow: "{value}年",
          monthRow: "{value}月",
          dayRow: "{value}日",
          value: '2017-05-20 18',
          onConfirm (val) {
            self[typeTime] = val;
          }
        })
      },
      setZsLevel(selecObj) {
        this.zsLevel = selecObj.name;
      },
      onFileChange(e) {
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
            vm.uploadImgUrl = imgData.filePath;
          }else{
            Toast("上传图片失败！");
          }
        });
        this.createImage(img);
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
      chooseImg(){

          document.querySelector('.choose-pic').click();
      },
      submitAdd(){
        if(this.fxzsgl.chooseZs.length == 0){
          Toast("请选择飞行证书类型");
          return;
        }
        if(this.licenseSn.length == 0){
          Toast("请输入证书编号");
          return;
        }
        if(this.signDate.length == 0){
          Toast("请选择签发日期");
          return;
        }
        if(this.validDate.length == 0){
          Toast("请选择有效日期");
          return;
        }
        if(this.validDate < this.signDate){
          Toast("有效日期不能晚于签发日期");
          return;
        }
        if(this.zsLevel.length == 0){
          Toast("请选择证书级别");
          return;
        }
        if(this.holderName.length == 0){
          Toast("请输入持卡人姓名");
          return;
        }
        if(this.holderIdcard.length == 0){
          Toast("请输入持卡人身份证号");
          return;
        }
//        var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
//        if(!regIdNo.test(this.holderIdcard)){
//          Toast("身份证号填写有误");
//          return;
//        }
        if(this.uploadImgUrl.length == 0){
          Toast("请上传飞行证书图片");
          return;
        }
        var data = {
            "license.licenseMId":this.fxzsgl.licenseMId,
            "license.licenseName":this.fxzsgl.chooseZs,
            "license.licenseSn":this.licenseSn,
            "license.issueDate":this.signDate,
            "license.expiryDate":this.validDate,
            "license.licenseLevel":this.zsLevel,
            "license.holderName":this.holderName,
            "license.holderIdcard":this.holderIdcard,
            "license.licensePic":this.uploadImgUrl
        };
        var self = this;
        api.saveLicenseInfo(data).then(function(res){
          var resData = res.data;
          if(resData == 0){
            self.$router.push("/fxzs")
          }
        })
        this.DELETE_FXZSTYPE();
        this.$router.back(-1);
      }
    },
    created(){
      //默认带入用户信息可编辑
      this.holderName = "小明";
      this.holderIdcard ="32068219961140";
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
    .common-right{
      color: $theme-color;
      line-height: 48px;
      font-size: 24px;
      width: 20px;
      position: absolute;
      right: 10px;

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
