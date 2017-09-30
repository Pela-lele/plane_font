<template>
  <div class="wrapper">
  <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px','overflow':'scroll' }">
    <mt-loadmore :top-method="loadTop"  @top-status-change="handleTopChange"  :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore" @autoFill="false">
      <ul class="mlist">
      <router-link :to="{path:'/fxjhList/fxbbDetail',query:{id:item.recordId}}" tag="div" class="list-cell" v-for="item in datas" :key="item.recordId">
        <!-- <div class="list-cell" v-for="item in datas"> -->
          <div class="list-cell-wrapper">
            <div class="list-cell-image">
              <img src="../../assets/img/wrj/demo3.jpg" width="100%" height="100%">
            </div>
            <div class="list-cell-title">
              <span class="list-cell-text">{{item.flightStartTimeStr}}</span>
              <span class="list-cell-label" :class="item.fontColor">{{item.status | transStatus}}</span>
            </div>

          </div>
          <i class="list-cell-allow-right iconfont icon-enter"></i>
        <!-- </div> -->
      </router-link>
      </ul>
    </mt-loadmore>
  </div>
  <noData v-if="pager.total == 0"></noData>
  <router-view></router-view>
  </div>
</template>

<script>
  import bus from '@/assets/eventBus';
  import api from '@/api/API';
  import noData from '@/components/noData.vue'
  export default {
    components:{
      noData
    },
    data() {
      return {
        pager:{
          pageNo:1,
          pageSize:10,
          total:-1//从后台获取
        },
        datas:[],//fontColor:"approve""reject"
        topStatus: '',
        wrapperHeight: 0,
        allLoaded: false,
        bottomStatus: '',
      }
    },
    filters:{
      transStatus(status) {//审核状态 0待审核1审核中2已通过3已驳回4已取消
        var result = ""
        switch(status) {
          case 0:
            result = "待审核";
            break;
          case 1:
            result = "已通过";
            break;
          case 2:
            result = "已驳回";
            break;
          case 3:
            result = "已取消";
            break;
        }
        return result;
      }
    },
    methods: {
      _initPage() {
        var self = this;
        this.loadData().then(function(res){
            self.wrapperHeight = document.documentElement.clientHeight - self.$refs.wrapper.getBoundingClientRect().top;
        })

      },
      loadData() {
        var self = this;
        var xhr = api.getReportrecordList({
          "page.pageNo":self.pager.pageNo,
          "page.pageSize":self.pager.pageSize
        }).then(function(res){
          var resDate = res.data;
          if(resDate && resDate.code == 0){
            var data = resDate.aaData;
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
      handleTopChange(status) {//drop->loading->pull
        this.topStatus = status;
        console.log("handleTopChange="+status)
      },
      handleBottomChange(status) {//drop->pull
        this.bottomStatus = status;
        console.log("handleBottomChange="+status)
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
      listener() {
        var self = this;
        bus.$on("changeStatus",function(obj){
          var id = obj.id,status = obj.status;
          self.datas.filter(function(item) {
            if(item.recordId == id){
              item.status = status;
              return item;
            }
            
          });
        });
        
        bus.$on("editFxjh",function(data){
          var id = data["reportRecord.recordId"];
          // console.log(id)
          self.datas.filter(function(item,index) {
            if(item.recordId == id){
                self.datas[index] = data;
                return item;
            }

          });
        });
      }
    },
    mounted(){
      this._initPage();
      this.listener();
      // this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../assets/sass/_base.scss';

  .wrapper {
    .page-loadmore-wrapper{
      height: 100%;
      overflow: scroll;
    }
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
