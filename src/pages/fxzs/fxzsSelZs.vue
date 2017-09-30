<template>
  <div class="wrapper">
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px','overflow':'scroll' }">
      <mt-loadmore :top-method="loadTop"  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" @autoFill="false">
        <ul class="mlist">
          <div class="list-cell" v-for="item in datas" @click="getSelecItem(item)" :class="{selected: selectedItem}">
            <div class="list-cell-wrapper" >
              <div class="list-cell-image">
                <img :src="'/mDrone'+item.licenseIcon" width="100%" height="100%">
              </div>
              <div class="list-cell-title">
                <span class="list-cell-text">{{item.licenseName}}</span>
              </div>

            </div>
            <i class="list-cell-allow-right iconfont icon-gou" v-if="item.licenseName==selectedItem"></i>
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
  import {mapState, mapMutations} from 'vuex'
  import api from '@/api/API';

  export default {
    data() {
      return {
        selectedItem: "",
        selected:"",
        lMId:"",
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
    computed:{
      ...mapState([
        'fxzsgl'
      ]),

    },
    methods:{
      ...mapMutations([
        'RECORD_FXZSTYPE'
      ]),
      _initPage() {
        var self = this;
        this.loadData().then(function(res){
          self.wrapperHeight = document.documentElement.clientHeight - self.$refs.wrapper.getBoundingClientRect().top-"48";
        })

      },
      loadData() {
        var self = this;
        var xhr = api.getLicensemList({
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
      getSelecItem(item){
        this.selectedItem = item.licenseName;
        this.lMId = item.licenseMId;
      },
      submit (){
        this.RECORD_FXZSTYPE({"ZSType":this.selectedItem,"lMId":this.lMId});
        console.log(this.selectedItem);
        this.$router.back(-1);
      }
    },
    created(){
      this._initPage();
      this.selectedItem = this.fxzsgl.chooseZs;
      this.lMId = this.fxzsgl.licenseMId;
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

  }
</style>

