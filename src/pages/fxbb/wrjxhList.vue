<template>
	<div class="wrapper">
		<div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px','overflow':'scroll' }">
    	<mt-loadmore :top-method="loadTop"  @top-status-change="handleTopChange"  :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore" @autoFill="false">
		<ul class="mlist">
			<div class="list-cell" v-for="item in datas" @click="toggleSelect(item)" :class="{selected: selectObj[item.droneId]}">
		        <div class="list-cell-wrapper">
		        	<div class="list-cell-image">
		        		<img :src="'/mDrone'+item.dronePic" width="100%" height="100%">
		        	</div>
		        	<div class="list-cell-title">
		        		<span class="list-cell-text">{{item.droneSn}}</span>
		        		<span class="list-cell-label">{{item.droneMId}}</span>
		        	</div>

		        </div>
		        <i class="list-cell-allow-right iconfont icon-gou"></i>
		    </div>
		</ul>
		</mt-loadmore>
  		</div>
		<div class="footer">
			<div class="selText" v-if="selectNum">
				<span class="left">已选：</span>
				<span class="right">{{selectNum}}</span>
			</div>
			<a class="submitbtn" @click="submit">完成</a>
		</div>
		<noData v-if="pager.total == 0"></noData>
	</div>
</template>

<script>
	import {mapState, mapMutations} from 'vuex'
	import noData from '@/components/noData.vue'
	import api from '@/api/API';
	export default {
		components:{
          noData
      	},
		data() {
			return {
				selectObj: {},
				selectNum: 0,
				pager:{
		          pageNo:1,
		          pageSize:10,
		          total:-1//从后台获取
		        },
		        topStatus: '',
		        wrapperHeight: 0,
		        allLoaded: false,
		        bottomStatus: '',
				datas: []
			}
		},
		computed:{
             ...mapState([
                'fxbbForm'
            ]),
             
        },
		created() {
			var self = this;
			this._initPage();
			this._initSelected();
		},
		methods: {
			...mapMutations([
            	'RECORD_DRONELIST'
            ]),
			_initPage() {
		        var self = this;
		        this.loadData().then(function(res){
		            self.wrapperHeight = document.documentElement.clientHeight - self.$refs.wrapper.getBoundingClientRect().top-48;
		        })

		    },
		    _initSelected() {
		    	for(var i=0,len=this.fxbbForm.droneList.length;i<len;i++){
	        		var temp = this.fxbbForm.droneList[i];
	        		this.selectObj[temp.droneId] = temp;
	        		this.selectNum++
	        	}
		    },
		    loadData() {
		        var self = this;
		        var xhr = api.getUserDroneList({
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
			toggleSelect(item) {
				var selectObj = this.selectObj;
				var id = item.droneId;
				if(this.selectObj[id]){
					this.$delete(this.selectObj,id);
					this.selectNum--;
				}else{
					this.$set(this.selectObj,id,item);
					this.selectNum++
				}
			},
			submit() {
				this.RECORD_DRONELIST(Object.values(this.selectObj))
				this.$router.back(-1);
			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../assets/sass/_base.scss';
	.wrapper{
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
		.footer{
			position: fixed;
			bottom: 0;
			height: 48px;
			width: 100%;
			background-color: #fff;
			border-top: 1px solid $border-color;
			.selText{
				float: left;
				line-height: 48px;
				padding-left: 10px;
				.left{
					
				}
				.right{
					color: $theme-color;
					font-size: 18px;
					// margin-left: 10px;
				}
			}
			.submitbtn{
				width: 80px;
				height: 100%;
				line-height: 48px;
				background: $theme-color;
				display: inline-block;
				text-align: center;
				color: #fff;
				float: right;

			}
		}
	}
</style>