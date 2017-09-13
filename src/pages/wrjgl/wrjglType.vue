<template>
  <div class="wrapper">
    <ul class="mlist">

      <div class="list-cell" v-for="item in datas" @click="getSelecItem(item)" :class="{selected: selectedItem}">
        <div class="list-cell-wrapper" >
          <div class="list-cell-image">
            <img src="../../assets/img/wrj/demo3.jpg" width="100%" height="100%">
          </div>
          <div class="list-cell-title">
            <span class="list-cell-text">{{item.name}}</span>
          </div>

        </div>
        <i class="list-cell-allow-right iconfont icon-gou" v-if="item.name==selectedItem"></i>
      </div>

    </ul>
    <router-link :to="{path:'/wrjglAdd'}" tag="div">
      <div class="common-footer">
        <span class="common-footer-btn">确定</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  import bus from '@/assets/eventBus';
  import djPic from '../../assets/img/wrjgl/dj.jpg';
  import xmPic from '../../assets/img/wrjgl/xm.jpg';


  export default {
    data() {
      return {
        selectedItem: "",
        selected:"",
        datas: [{
          id:"1",
          name: "大疆PHANTOM4",

        },{
          id:"2",
          name: "大疆PHANTOM4 xxx",

        },{
          id:"3",
          name: "大疆PHANTOM4 aaa",

        },{
          id:"4",
          name: "大疆PHANTOM5",

        },{
          id:"5",
          name: "大疆PHANTOM6",

        }]
      }
    },
    methods:{
        getSelecItem(item){
            this.selectedItem = item.name;
        }

    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../assets/sass/_base.scss';

  .wrapper {
    padding-bottom: 48px;
    .list-cell{
      &.selected{
        .iconfont{
          display: block;
        }

      }
      .iconfont{
        display: none;
      }
    }
    .approve{
      color: $theme-color;
    }
    .reject{
      color: $reject-color;
    }


  }
</style>
