<template>
  <div class="wrapper">
    <ul class="mlist">
      <div class="list-cell"  @click="shooseItem">
        <div class="list-cell-wrapper" >
          <div class="list-cell-image">
            <img src="../../assets/img/grxx/zs.jpeg" width="100%" height="100%">
          </div>
          <div class="list-cell-title">
            <span class="list-cell-text">AOPA-CHINA</span>
          </div>

        </div>
        <i class="list-cell-allow-right iconfont icon-gou" v-if="selectItem==op1"></i>
      </div>
      <div class="list-cell"  @click="shooseItem1">
        <div class="list-cell-wrapper" >
          <div class="list-cell-image">
            <img src="../../assets/img/grxx/zs1.jpeg" width="100%" height="100%">
          </div>
          <div class="list-cell-title">
            <span class="list-cell-text">ASFC</span>
          </div>

        </div>
        <i class="list-cell-allow-right iconfont icon-gou" v-if="selectItem==op2"></i>
      </div>
    </ul>
    <div class="common-footer" @click="submit">
      <span class="common-footer-btn">确定</span>
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
<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../assets/sass/_base';
  .wrapper{
    padding-bottom: 48px;
  }


</style>
