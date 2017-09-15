<template>
  <!--飞行证书详情页-->
  <div class="wrapper">
    <div class="group">
      <label>证书类型</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            ASFC证书
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>证书编号</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            23543548512
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>签证日期</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            2017-01-23
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>有效期</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            2020-01-22
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>证书级别</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            Ⅳ级
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>持证人</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            小明
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>身份证号</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            320682199611231140
          </div>
        </li>
      </ul>
    </div>
    <div class="common-pic">
      <img src="../../assets/img/grxx/personTip.jpg">
    </div>


    <div class="common-footer-red" @click="deleteSubmit">
      <span class="footer-red-btn">删除</span>
    </div>
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
      deleteSubmit(){
        this.$router.back(-1);
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
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

    .border-style{
      border: 0px;
    }
    .common-pic{
      padding: 10px 20px;
      text-align: center;
      img{
        width: 160px;
        height: auto;
      }
    }



  }
</style>
