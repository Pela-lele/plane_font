<template>
  <!--无人机管理详情页-->
  <div class="wrapper">
    <div class="group">
      <label>品牌</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            {{datas.droneCName}}
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>型号</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            {{datas.droneMName}}
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>机身码</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            {{datas.droneSn}}
          </div>
        </li>
      </ul>
    </div>

    <div class="common-pic">
      <img :src="'/mDrone'+datas.dronePic">
    </div>

    <div class="group" v-show="datas.droneInsurance">
      <label>保险编号</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            {{datas.droneInsurance}}
          </div>
        </li>
      </ul>
    </div>

    <div class="common-pic" v-show="datas.droneInsurancePic">
      <img :src="'/mDrone'+datas.droneInsurancePic">
    </div>

    <div class="common-absolute-footer">
      <span class="absolute-footer-btn" @click="pageToEdit">编辑</span>

      <span class="footer-red-btn" @click="deleteSubmit">删除</span>
    </div>

    <!--<div class="common-footer-red" @click="deleteSubmit">-->
      <!---->
    <!--</div>-->
  </div>

</template>
<script>
  import api from '@/api/API'
  import {Toast} from 'mint-ui'
  import bus from '@/assets/eventBus'
  export default {
    data(){
      return{
        droneId:"",
        datas:{},
      }
    },
    methods:{

      loadData() {
        var self = this;
        var xhr = api.getUserDroneDetail({
          "drone.droneId":self.droneId,
        }).then(function(res){
          var resData = res.data;
          if(resData && resData.code == 0){
            self.datas = resData.aaData[0];
          }
        })
        return xhr;
      },
      pageToEdit(){
          this.$router.push({
              path: '/wrjgl/wrjglDetailEdit',
              query: {
                WrjDetail: this.datas
              }
        });
      },
      deleteDroneInfo() {
        var self = this;
        console.log("==="+self.droneId);
        bus.$emit("deleteDrone",{
          droneId:self.droneId
        })
      },
      deleteSubmit(){
          var self = this;
        api.deleteUserDrone({
          "drone.droneId":this.datas.droneId
        }).then(function (res) {
          if(1 == res){
            Toast("删除无人机失败！");
          }else{
            Toast("成功删除无人机！");
            //记录删除的数据
            self.deleteDroneInfo();
            self.$router.back(-1);
          }
        })

      },

    },
    created(){
        this.droneId = this.$route.params.droneId;
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
