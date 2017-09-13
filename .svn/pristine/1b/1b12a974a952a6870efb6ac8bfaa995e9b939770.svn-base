<template>
  <!--无人机管理详情页-->
  <div class="wrapper">
    <div class="group">
      <label>品牌</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            大疆创新
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>型号</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            PHANTOM4 PRO
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>机身码</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            S8029345
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>保险</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            第三方责任险
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>用途</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            Ⅳ级
          </div>
        </li>
      </ul>
    </div>
    <div class="common-pic">
      <img src="../../assets/img/wrj/demo3.jpg">
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
      deleteSubmit(){
        this.$router.back(-1);
      }
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
