<template>
  <div class="wrapper">
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px','overflow':'scroll' }">
      <mt-loadmore :top-method="loadTop"  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" @autoFill="false">
        <ul class="mlist">
          <div class="list-cell" v-for="item in datas" @click="pageToDetail(item.droneId)">
            <div class="list-cell-wrapper" >
              <div class="list-cell-image">
                <img :src="'/mDrone'+item.dronePic" width="100%" height="100%">
              </div>
              <div class="list-cell-title">
                <span class="list-cell-text">{{item.droneSn}}</span>
                <span class="list-cell-label">{{item.droneCName}}{{item.droneMName}}</span>
              </div>

            </div>
            <i class="list-cell-allow-right iconfont icon-enter"></i>
          </div>
        </ul>
      </mt-loadmore>
    </div>

      <div class="common-footer" @click="pageToAdd">
        <span class="common-footer-btn">添加无人机</span>
      </div>
    <noData v-if="pager.total == 0"></noData>

    <router-view></router-view>

  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import api from '@/api/API';
  import noData from '@/components/noData.vue'
  import bus from '@/assets/eventBus'

  export default {
      components:{
          noData
      },
    data() {
      return {
        datas: [],
        topStatus: '',
        wrapperHeight: 0,
        allLoaded: false,
        bottomStatus: '',
        pager:{
          pageNo:1,
          pageSize:10,
          total:-1//从后台获取
        },
      }
    },

    methods:{
      _initPage() {
        var self = this;
        this.loadData().then(function(res){
          self.wrapperHeight = document.documentElement.clientHeight - self.$refs.wrapper.getBoundingClientRect().top-"48";
        })

      },
      loadData() {
        var self = this;
        var xhr = api.getUserDroneList({
          "page.pageNo":self.pager.pageNo,
          "page.pageSize":self.pager.pageSize
        }).then(function(res){
          var resData = res.data;
          if(resData && resData.code == 0){
            var data = resData.aaData;
            var total = self.pager.total = resData.iTotalDisplayRecords;
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
        var self = this;
        this.pager.pageNo = 1;
        this.datas = [];
        this.loadData();
        this.$refs.loadmore.onTopLoaded();
      },

      loadBottom() {
        var self = this;
        this.pager.pageNo++;
        this.loadData();
        this.$refs.loadmore.onBottomLoaded();

      },
      pageToDetail(droneId){
          this.$router.push('/wrjgl/wrjglDetail/'+droneId);

      },
      pageToAdd(){
        this.$router.push('/wrjgl/wrjglAdd/');
      },
      listener() {
        var self = this;
        bus.$on("deleteDrone",function(obj){
            var droneId = obj.droneId;
          self.datas.filter(function(item,index) {
            if(item.droneId == droneId){
                self.datas.splice(index,1);
              return item;
            }

          });
        });

        bus.$on("editDrone",function(reData){
          var droneId = reData.droneId;
          self.datas.filter(function(item,index) {
            if(item.droneId == droneId){
                self.datas[index] = reData;
              return item;
            }

          });
        });



      }
    },
    created(){
      this._initPage();
    },
    mounted(){
      this.listener();
    }

  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../assets/sass/_base.scss';
  .wrapper {
    padding-bottom: 48px;
  }
</style>

