<template>
  <!--飞行证书添加-->
  <div class="wrapper">
    <div class="group">
      <label>证书类型</label>
      <ul class="selection-list">
        <router-link :to="{path:'/fxzsSelZs'}" tag="li">
        <li class="selection">
          <span class="selected">{{selectItem}}</span>
            <i class="iconfont icon-enter common-right"></i>
        </li>
        </router-link>
      </ul>
    </div>
    <div class="group">
      <label>证书编号</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text" placeholder="请输入证书编号"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>签证日期</label>
      <ul class="selection-list">
        <li class="selection" @click="openTimepicker($event,'signDate')">
          <div class="input-box">
            <span>{{! signDate==""?signDate:"请选择签证日期"}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>有效日期</label>
      <ul class="selection-list">
        <li class="selection" @click="openTimepicker($event,'validDate')">
          <div class="input-box">
            <span>{{! validDate==""?validDate:"请选择有效期"}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>证书级别</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box" @click="sheetVisible = true">
            <span>{{! zsLevel==""?zsLevel:"请选择证书级别"}}</span>

          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>持证人</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text" placeholder="请输入持证人姓名" value="小明"/>
          </div>
        </li>
      </ul>
    </div>
    <div class="group">
      <label>身份证号</label>
      <ul class="selection-list">
        <li class="selection">
          <div class="input-box">
            <input type="text" placeholder="请输入身份证号" value="32068219961140"/>
          </div>
        </li>
      </ul>
    </div>

    <div class="group border-style">
      <label>证书照片</label>
      <ul class="selection-list">
        <li class="selection">
        <span class="tips">(请将人脸和证书置于取景框中)</span>
          <router-link :to="{path:'/yhzcPersonTip'}" tag="i">
            <i class="iconfont q-style icon-31yiwen"></i>
          </router-link>

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


    <div class="common-absolute-footer" @click="submitAdd">
      <span class="absolute-footer-btn">提交</span>
    </div>

    <mt-actionsheet :actions="actions" v-model="sheetVisible" cancelText=""></mt-actionsheet>


  </div>

</template>
<script>
  import bus from '@/assets/eventBus';
  import { Datetime } from 'vux'
  export default {
    components: {
      Datetime
    },
      data(){
          return{
            signDate:"",
            validDate:"",
            image:null,
            selectItem:"请选择证件类型",
            sheetVisible: false,
            actions: [{
              name: 'Ⅰ级',
              method: this.setZsLevel
            }, {
              name: 'Ⅱ级',
              method: this.setZsLevel
            },{
              name: 'Ⅲ级',
              method: this.setZsLevel
            },{
              name: 'Ⅳ级',
              method: this.setZsLevel
            },{
              name: 'Ⅴ级',
              method: this.setZsLevel
            },{
              name: 'Ⅵ级',
              method: this.setZsLevel
            }],
            zsLevel:""
          }
      },
    methods:{
      openTimepicker(e,typeTime) {
        var self = this;
        console.log(arguments)
        this.$vux.datetime.show({
          cancelText: '取消',
          confirmText: '确定',
          format: 'YYYY-MM-DD HH:mm',
          yearRow: "{value}年",
          monthRow: "{value}月",
          dayRow: "{value}日",
          value: '2017-05-20 18',
          onConfirm (val) {
            self[typeTime] = val;
          }
        })
      },
      setZsLevel(selecObj) {
        this.zsLevel = selecObj.name;
      },
      submitForm() {
        this.$router.replace("/")
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
      submitAdd(){
        this.$router.back(-1);
      }
    },
    mounted(){
      var self = this;
      bus.$on("fxzsSelZs",function(selectItem){
          self.selectItem = selectItem;
      });
    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../assets/sass/_base';
  .wrapper {
    .border-style{
      border: 0px;
    }
    .list-cell {
      .iconfont {
        display: block;
      }
    }
    .selected{
      line-height: 48px;
      padding-left: 20px;
      color: $theme-color;
    }
    .common-right{
      color: $theme-color;
      line-height: 48px;
      font-size: 24px;
      width: 20px;
      position: absolute;
      right: 10px;

    }

  }
</style>
