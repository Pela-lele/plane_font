<template>
  <div class="wrapper">
    <ul class="mlist">
      <router-link :to="{path:'/fxbbjb'}" tag="div">
        <div class="list-cell" v-for="item in datas" :class="{selected: selectObj[item.id]}">
          <div class="list-cell-wrapper">
            <div class="list-cell-image">
              <img src="../../assets/img/wrj/demo3.jpg" width="100%" height="100%">
            </div>
            <div class="list-cell-title">
              <span class="list-cell-text">{{item.name}}</span>
              <span class="list-cell-label":class="item.fontColor">{{item.desc}}</span>
            </div>

          </div>
          <i class="list-cell-allow-right iconfont icon-enter"></i>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import bus from '@/assets/eventBus';
  export default {
    data() {
      return {
        selectObj: {},
        selectNum: 0,
        datas: [{
          id:"1",
          name: "2017-08-28 15:00",
          desc: "待审核",
          fontColor:"approve"
        },{
          id:"2",
          name: "2017-08-28 15:00",
          desc: "已审核",
          fontColor:""
        },{
          id:"3",
          name: "2017-08-28 15:00",
          desc: "待审核",
          fontColor:"approve"
        },{
          id:"4",
          name: "2017-08-28 15:00",
          desc: "已驳回",
          fontColor:"reject"
        },{
          id:"5",
          name: "2017-08-28 15:00",
          desc: "待审核",
          fontColor:"approve"
        }]
      }
    },
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../assets/sass/_base';

  .wrapper {
    padding-bottom: 48px;
    .list-cell {
        .iconfont {
          display: block;
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
