<template>
  <!--个人注册信息填写-->
  <div class="wrapper">
    <div class="group">
      <label>姓名</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text" placeholder="请输入姓名" v-model="formData.userName" v-validate="'required'" name="name"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>身份证号</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text" placeholder="请输入身份证号" v-model="formData.userIdcard" v-validate="'required|idCard'" name="idCard"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>手机号</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text" placeholder="请输入手机号" v-model="formData.userRegisterTel" v-validate="'required|phone'" name="telephone"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>邮箱</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text" placeholder="请输入邮箱" v-model="formData.userEmail" v-validate="'required|email'" name="email"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>登录密码</label>
      <ul class="selection-list">
          <li class="selection">
            <div class="input-box">
              <input  placeholder="请输入登录密码" type="password" v-show="isShowpicker" v-model="formData.password" v-validate="'required'" name="password">
              <input  placeholder="请输入登录密码" type="text" v-show="!isShowpicker" v-model="formData.password"  v-validate="'required'" name="password">
              <i class="iconfont switch-style" :class="{'icon-xianshi':isShowpicker,'icon-yincang':!isShowpicker}" @click="isShowpicker = !isShowpicker"></i>
            </div>
          </li>
      </ul>
    </div>
    <div class="group">
      <label>再次输入密码</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="password" placeholder="请再次输入登录密码" v-model="formData.password2"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="group border-style">
      <label>证件照片</label>
      <ul class="selection-list">
        <li class="selection">
        <span class="tips">(请将人脸和身份证置于取景框中)</span>
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
    <!-- <router-link :to="{path:'/grxx'}" tag="div"> -->
      <div class="common-absolute-footer">
        <span class="absolute-footer-btn" @click="submit">完成</span>
      </div>
    <!-- </router-link> -->


  </div>

</template>
<script>
  import personTip from '../../assets/img/grxx/personTip.jpg'
  import api from '@/api/API';
  import { Toast } from 'mint-ui';
  export default {
      data(){
          return{
            isShowpicker: false,
            image:personTip,
            formData:{
              userName:"zhangq",
              userIdcard:"420505199102093358",
              userRegisterTel:"15912345678",
              userTelephone:"15912345678",
              userEmail:"8325923@qq.com",
              password:"11",
              password2:"222",
              flightTime:"",
              photoIdcardUrl:""
            }
            
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
      validate() {
        var self = this;
        var promise = new Promise(function(resolve, reject){
          self.$validator.validateAll().then(function(flag){
            if(flag){
              resolve();
            }else{
              var ers = self.errors.all();
              reject(ers[0]);
            }
          })
        });
        return promise;
      },
      submit(){
        var self = this;
        var valid = this.validate();
        valid.then(function(){
          //下一步
          //提交数据
          
          var data = self.getFormData();
          api.saveUsers(data).then(function(res){
            var resData = res.data;
            if(resData == 0){
              self.$router.push("/grxx")
            }
          })
          
        },function(error){
          Toast(error);
        })
      },
      getFormData() {
        var data = {
          "users.userName": this.formData.userName,
          "users.userRegisterTel": this.formData.userRegisterTel,
          "users.userIdcard": this.formData.userIdcard,
          "users.userTelephone": this.formData.userTelephone,
          "users.userEmail": this.formData.userEmail,
          "users.photoIdcardUrl": "/c/cxx/idcard.jpg"
        }
        return data;
      }
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
