<template>
  <!--用户无人机证书管理详情页-->
  <div class="wrapper">
    <div class="group">
      <label>证书类型</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            {{datas.licenseName}}
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>证书编号</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            {{datas.licenseSn}}
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>签发日期</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            {{datas.issueDate}}
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>有效日期</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            {{datas.expiryDate}}
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>持证人</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            {{datas.holderName}}
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>身份证号</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            {{datas.holderIdcard}}
          </div>
        </li>
      </ul>
    </div>

    <div class="common-pic" v-show="datas.licensePic">
      <img :src="'/mDrone'+datas.licensePic">
    </div>

    <div class="common-absolute-footer">
      <span class="absolute-footer-btn" @click="pageToEdit">编辑</span>

      <span class="footer-red-btn" @click="deleteSubmit">删除</span>
    </div>
  </div>

</template>
<script>
  import api from '@/api/API'
  import {Toast} from 'mint-ui'
  import bus from '@/assets/eventBus'
  export default {
    data(){
      return{
        licenseId:"",
        datas:{},
      }
    },
    methods:{

      loadData() {
        var self = this;
        var xhr = api.getUserLicenseDetail({
          "license.licenseId":self.licenseId,
        }).then(function(res){
          var resData = res.data;
          if(resData && resData.code == 0){
            self.datas = resData.aaData;
          }
        })
        return xhr;
      },
      pageToEdit(){
        this.$router.push({
          path: '/fxzs/fxzsDetailEdit',
          query: {
            fxzsDetail: this.datas
          }
        });
      },
      deleteLicenseInfo() {
        var self = this;
        bus.$emit("deleteLicense",{
          licenseId:self.licenseId
        })
      },
      deleteSubmit(){
        var self = this;
        api.deleteUserLicense({
          "license.licenseId":this.datas.licenseId
        }).then(function (res) {
          if(1 == res){
            Toast("删除无人机证书失败！");
          }else{
            Toast("成功删除无人机证书！");
            //记录删除的数据
            self.deleteLicenseInfo();
            self.$router.back(-1);
          }
        })

      },

    },
    created(){
      this.licenseId = this.$route.params.licenseId;
      this.loadData();
    },
    mounted(){

    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import '../../assets/sass/_base';
  .wrapper {
    overflow-y: auto;
    overflow-x: hidden;
    background: white;
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    .font-color{
      color: $theme-color;
    }
    .common-pic{
      text-align: center;
      padding-top: 20px;
      img{
        width: 160px;
        height: auto;
        margin: 0 auto;
      }
    }
    .border-style{
      border: 0px;
    }


  }
</style>
