<template>
  <div class="wrapper">
    <ul class="mlist">
      <router-link :to="{path:'/wrjglDetail'}" tag="div">
        <div class="list-cell" v-for="item in datas" :class="{selected: selectObj[item.id]}">
          <div class="list-cell-wrapper">
            <div class="list-cell-image">
              <img src="../../assets/img/wrj/demo3.jpg" width="100%" height="100%">
            </div>
            <div class="list-cell-title">
              <span class="list-cell-text">{{item.name}}</span>
              <span class="list-cell-label">{{item.desc}}</span>
            </div>

          </div>
          <i class="list-cell-allow-right iconfont icon-enter"></i>
        </div>
      </router-link>
    </ul>
    <router-link :to="{path:'/wrjglAdd'}" tag="div">
      <div class="common-footer">
        <span class="common-footer-btn">添加无人机</span>
      </div>
    </router-link>
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
          name: "S8029345",
          desc: "大疆PHANTOM4 PRO",
        },{
          id:"2",
          name: "S8029345",
          desc: "大疆PHANTOM4 PRO",
        },{
          id:"3",
          name: "S8029345",
          desc: "大疆PHANTOM4 PRO",
        },{
          id:"4",
          name: "S8029345",
          desc: "大疆PHANTOM4 PRO",
        },{
          id:"5",
          name: "S8029345",
          desc: "大疆PHANTOM4 PRO",
        }]
      }
    },
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../assets/sass/_base.scss';

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
