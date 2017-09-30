<template>
  <!--注册用户-->
  <div class="wrapper">
    <div class="input-info">
      <div class="info-list">
        <i class="iconfont icon-shouji icon-style" style="font-weight: bold"></i>
        <div class="text-info">
          <input placeholder="请输入手机号" v-model="telephone" v-validate="'required|phone'" name="telephone">
        </div>
        <span class="valid-code" @click="sendIdentifyCode" v-if="!isSendCode">验证码</span>
        <span class="valid-code disable" v-else>{{countDownText}}</span>
      </div>
      <div class="info-list">
        <i class="iconfont icon-yanzhengma icon-style"></i>
        <div class="text-info">
          <input placeholder="请输入验证码">
        </div>
      </div>
      <!-- <router-link :to="{path:'/grxx/yhzcType'}" tag="div"> -->
        <div class="common-absolute-footer" @click="submit">
          <span class="absolute-footer-btn">下一步</span>
        </div>
      <!-- </router-link> -->


    </div>

  </div>
</template>
<script>
  import { Toast } from 'mint-ui';
  import {mapState} from 'vuex';
  export default {
    data(){
      return {
        telephone:"15912345678",
        isSendCode: false,
        countDownNum:10,
        countDownText:"发送中"//倒计时
      }
    },
    computed:{
       ...mapState([
          'enterType'
      ]),
    },
    methods: {
      sendIdentifyCode() {
        var self = this;
        this.isSendCode = true;
        var times = this.countDownNum;
        var interval = setInterval(function(){
          times--;
          self.countDownText = times+" s";
          if(times == 0){
            clearInterval(interval);
            self.isSendCode = false;
          }
        },1000)
      },
      validate() {
        var self = this;
        var promise = new Promise(function(resolve, reject){
          self.$validator.validateAll().then(function(flag){
            if(flag){
              resolve();
              
            }else{
              var ers = self.errors.all();
              if(ers.length>0){
                
              }
              reject(ers[0]);
            }
          })
        });
        return promise;
      },
      submit() {
        var self = this;
        var valid = this.validate();
        valid.then(function(){
          //下一步
          if(self.enterType == "geren"){
            self.$router.push("/grxx/yhzcPerson")
          }else if(self.enterType == "qiye"){
            self.$router.push("/grxx/yhzcCompany")
          }
          
        },function(error){
          Toast(error);
        })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../assets/sass/_base';
  .wrapper {
    .input-info {
      box-sizing: border-box;
      display: block;
      overflow: hidden;
      .info-list {
        background: #ffffff;
        min-height: 48px;
        padding: 5px;
        display: flex;
        border-bottom: 1px solid $border-color;
        .icon-style{
          color: $theme-color;
          height: 50px;
          font-size: 32px;
          width: 50px;
          line-height: 50px;
          text-align: center;
        }
        .text-info {
          flex: 1;
          display: flex;
          input {
            height: 48px;
            border-radius: 0;
            border: 0;
            line-height: 1.6;
            width: 100%;
          }
        }
        .valid-code{
          padding: 0px 15px;
          line-height: 30px;
          border-radius: 10px;
          background: #2da8e1;
          color: white;
          margin: 10px;
          &.disable{
            background: #ccc;
          }
        }
      }
    }

  }
</style>
