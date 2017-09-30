<template>
  <!--个人信息页包含编辑个人信息及修改密码-->
  <div class="wrapper" v-if="users">
    <div class="group">
      <label>姓名</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text"  value="" v-model="users.userName" v-validate="'required'" name="name"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>身份证号</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text" value="" v-model="users.userIdcard" v-validate="'required|idCard'" name="idCard"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>手机号</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text" value="" v-model="users.userTelephone" v-validate="'required|phone'" name="telephone"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>邮箱</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text" value="hello@163.com" v-model="users.userEmail" v-validate="'required|email'" name="email"/>
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

    <!-- <router-link :to="{path:'/grxx'}" tag="div"> -->
      <div class="common-absolute-footer">
        <span class="absolute-footer-btn" @click="submit">保存修改</span>
      </div>
    <!-- </router-link> -->


  </div>

</template>
<script>
  import personTip from '@/assets/img/grxx/personTip.jpg'
  import api from '@/api/API';
  import { Toast } from 'mint-ui';
  export default {
    data(){
      return{
        isShowpicker: false,
        image:personTip,
        pwd:"",
        id:"111",//用户id
        users:null
      }
    },
    methods:{
      getUserInfo() {
        var self = this;
        api.getUsersDetail(self.id).then(function(res){
          var resData = res.data;
          if(resData && resData.code == 0 && resData.aaData.length>0){
            self.users = resData.aaData[0];
          }
        })
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
          //提交数据
          var data = self.getFormData();
          api.saveUsers(data).then(function(res){
            var resData = res.data;
            if(resData == 0){
              // self.$router.push("/grxx/grxxList")
              self.$router.back(-1)
            }
          })
          
        },function(error){
          Toast(error);
        })
      },
      getFormData() {
        var data = {
          "users.userId":this.id,
          "users.userName": this.users.userName,
          "users.userRegisterTel": this.users.userRegisterTel,
          "users.userIdcard": this.users.userIdcard,
          "users.userTelephone": this.users.userTelephone,
          "users.userEmail": this.users.userEmail,
          "users.photoIdcardUrl": "/c/cxx/idcard.jpg"
        }
        return data;
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
    },
    created() {
      this.getUserInfo();
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
