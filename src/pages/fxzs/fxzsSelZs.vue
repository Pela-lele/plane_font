<template>
  <div class="wrapper">
    <div class="common-container">
      <div class="common-list" @click="shooseItem">
        <img src="../../assets/img/grxx/zs.jpeg">
        <div class="common-info">
          <div class="common-single-text" >AOPA-CHINA</div>
        </div>
        <i class="iconfont  common-right icon-gou" v-if="selectItem==op1"></i>
      </div>
      <div class="common-list" @click="shooseItem1">
        <img src="../../assets/img/grxx/zs1.jpeg">
        <div class="common-info">
          <div class="common-single-text" >ASFC</div>
        </div>
        <i class="iconfont icon-gou common-right" v-if="selectItem==op2"></i>
      </div>

      <div class="common-footer" @click="submit">
        <span class="common-add">确定</span>
      </div>

    </div>
  </div>
</template>
<script>
  import bus from '@/assets/eventBus';
  export default{
      data(){
          return{
            selectItem: "",
            op1:"AOPA-CHINA",
            op2:"ASFC"
          }
      },
    methods:{
      shooseItem () {
        this.selectItem = this.op1;
      },
      shooseItem1() {
        this.selectItem = this.op2;
      },
      submit (){
        console.log("emit");
        bus.$emit("fxzsSelZs",this.selectItem);
        this.$router.back(-1);
      }

    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  @import '../../assets/sass/_base';
  .common-container{
    padding-bottom: 48px;
    .common-list{
      display: flex;
      background: #ffffff;
      padding: 5px 20px;
      border-bottom: 1px dashed $border-color;
      img{
        width: 80px;
        height: 80px;
        padding: 0 20px;
      }
      .common-info{
        flex: 1;
        font-size: 14px;
        .common-single-text{
          padding: 10px 0px 10px 20px;
          line-height: 60px;

        }
      }
      .common-right{
        color: $theme-color;
        line-height: 80px;
        font-size: 24px;
        width: 20px;

      }

    }
    .common-footer {
      position: fixed;
      bottom: 0;
      height: 48px;
      width: 100%;
      background-color: #fff;
      border-top: 1px solid $theme-color;
      text-align: center;
      .common-add {
        width: 100%;
        height: 100%;
        line-height: 48px;
        background: $theme-color;
        display: inline-block;
        text-align: center;
        color: #fff;

      }

    }
  }


</style>
