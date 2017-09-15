<template>
  <div class="wrapper">
    <div>
      <div class="group">
        <label>举报分类：</label>
      </div>
      <div class="jb-type">
        <mt-checklist
          v-model="value"
          :options="options">
        </mt-checklist>
      </div>
    </div>

    <div class="group">
      <label>更多描述：</label>
    </div>
    <div class="desc">
      <textarea  placeholder="请输入其他描述"></textarea>
    </div>
    <div class="group border-style">
      <label>联系人电话</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text" placeholder="请输入联系人电话"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="common-absolute-footer">
      <span class="absolute-footer-btn">提交</span>
    </div>

  </div>
</template>
<script>
  export default{
      data(){
          return{
              value:[],
            options:['危险飞行','噪声扰民','禁飞区飞行','损坏公共设施','其他'],

          }
      }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../assets/sass/_base.scss';
  .wrapper{
    .jb-title{
      background: white;
      padding: 20px;
    }
    .group{
      border: 0;
    }
    .border-style{
      border-top:1px solid $border-color;
    }
    .desc{
      text-align: center;
      background: white;
      padding-bottom: 20px;
      textarea{
        overflow:hidden;
        resize:none;
        width: 80%;
        margin: 0 auto;
       height: 80px;
        border:1px solid $border-color;
      }
    }

  }
</style>
<style>
  .mint-checklist-title{
    display: none !important;
  }
</style>
