<template>
  <div class="wrapper">
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px','overflow':'scroll' }">
      <mt-loadmore :top-method="loadTop"  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" @autoFill="false">
        <ul class="mlist">
          <div class="list-cell" v-for="item in datas" @click="getSelecItem(item)" :class="{selected: selectedItem}">
            <div class="list-cell-wrapper" >
              <div class="list-cell-image">
                <img :src="'/mDrone'+item.droneIcon" width="100%" height="100%">
              </div>
              <div class="list-cell-title">
                <span class="list-cell-text">{{item.droneName}}</span>
              </div>

            </div>
            <i class="list-cell-allow-right iconfont icon-gou" v-if="item.droneName==selectedItem"></i>
          </div>
        </ul>
      </mt-loadmore>
    </div>

    <div class="common-footer" @click="submit">
      <span class="common-footer-btn">确定</span>
    </div>
  </div>
</template>

<script>
  import bus from '@/assets/eventBus';
  import api from '@/api/API';


  export default {
    data() {
      return {
        selectedItem: "",
        selected:"",
        datas: [],
        topStatus: '',
        wrapperHeight: 0,
        allLoaded: false,
        bottomStatus: '',
        pager:{
          pageNo:1,
          pageSize:10,
          total:0//从后台获取
        },
      }
    },
    methods:{
      _initPage() {
        var self = this;
        this.loadData().then(function(res){
          self.wrapperHeight = document.documentElement.clientHeight - self.$refs.wrapper.getBoundingClientRect().top;
        })

      },
      loadData() {
        var self = this;
        var xhr = api.getDronemList({
          params: {
            "type":1,
            "page.pageNo":self.pager.pageNo,
            "page.pageSize":self.pager.pageSize
          }
        }).then(function(res){
          var resData = res.data;
          if(resData && resData.code == 0){
            var data = resData.aaData;
            var total = self.pager.total = resDate.iTotalDisplayRecords;
            self.datas = self.datas.concat(data);
            if(self.pager.pageNo * self.pager.pageSize >= self.pager.total){
              self.allLoaded = true;
            }else{
              self.allLoaded = false;
            }
          }
        })
        return xhr;
      },
      loadTop() {
        console.log("loadTop")
        var self = this;
        this.pager.pageNo = 1;
        this.datas = [];
        this.loadData();
        this.$refs.loadmore.onTopLoaded();
      },

      loadBottom() {
        console.log("loadBottom");
        var self = this;
        this.pager.pageNo++;
        this.loadData();
        this.$refs.loadmore.onBottomLoaded();

      },
//      getData(){
//          var _this = this;
//        this.$ajax.get("/mDrone/dronem/list.action",{params: { 'type': '1' }}).then(function (res) {
//          console.log(res.data.data);
//          _this.datas = res.data.data;
//        })
//      },
//      getSelecItem(item){
//          this.selectedItem = item.droneName;
//      },
    submit (){
      bus.$emit("productor",this.selectedItem);
      this.$router.back(-1);
    }

    },
    mounted(){
      this._initPage();
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

<!--<template>-->
  <!--<div class="wrapper">-->
    <!--<div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px','overflow':'scroll' }">-->
      <!--<mt-loadmore :top-method="loadTop"  @top-status-change="handleTopChange"  :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">-->
        <!--<ul class="page-loadmore-list">-->
          <!--<li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>-->
        <!--</ul>-->
      <!--</mt-loadmore>-->
    <!--</div>-->
  <!--</div>-->

<!--</template>-->

<!--<style scoped lang="scss" type="text/scss">-->


<!--</style>-->

<!--<script>-->
  <!--export default {-->
    <!--data() {-->
      <!--return {-->
        <!--list: [],-->
        <!--topStatus: '',-->
        <!--wrapperHeight: 0,-->
        <!--allLoaded: false,-->
        <!--bottomStatus: '',-->
      <!--};-->
    <!--},-->

    <!--methods: {-->
      <!--handleTopChange(status) {-->
        <!--this.topStatus = status;-->
      <!--},-->
      <!--handleBottomChange(status) {-->
        <!--this.bottomStatus = status;-->
        <!--console.log(status);-->
      <!--},-->
      <!--loadTop() {-->
        <!--setTimeout(() => {-->
          <!--let firstValue = this.list[0];-->
          <!--for (let i = 1; i <= 10; i++) {-->
            <!--this.list.unshift(firstValue - i);-->
          <!--}-->
          <!--this.$refs.loadmore.onTopLoaded();-->
        <!--}, 1500);-->
      <!--},-->

      <!--loadBottom() {-->
          <!--console.log(123);-->
        <!--setTimeout(() => {-->
          <!--let lastValue = this.list[this.list.length - 1];-->
          <!--if (lastValue < 60) {-->
            <!--for (let i = 1; i <= 10; i++) {-->
              <!--this.list.push(lastValue + i);-->
            <!--}-->
          <!--} else {-->
            <!--this.allLoaded = true;-->
            <!--console.log("我是有底线的");-->
          <!--}-->
          <!--this.$refs.loadmore.onBottomLoaded();-->
        <!--}, 1500);-->
      <!--}-->

    <!--},-->


    <!--created() {-->
      <!--for (let i = 1; i <= 20; i++) {-->
        <!--this.list.push(i);-->
      <!--}-->
    <!--},-->
    <!--mounted() {-->
      <!--this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;-->
    <!--}-->
  <!--};-->
<!--</script>-->

