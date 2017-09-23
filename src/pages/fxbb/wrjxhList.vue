<template>
	<div class="wrapper">
		<div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px','overflow':'scroll' }">
    	<mt-loadmore :top-method="loadTop"  @top-status-change="handleTopChange"  :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore" @autoFill="false">
		<ul class="mlist">
			<div class="list-cell" v-for="item in datas" @click="toggleSelect(item)" :class="{selected: selectObj[item.droneMId]}">
		        <div class="list-cell-wrapper">
		        	<div class="list-cell-image">
		        		<img :src="'/mDrone'+item.droneIcon" width="100%" height="100%">
		        	</div>
		        	<div class="list-cell-title">
		        		<span class="list-cell-text">{{item.droneName}}</span>
		        		<span class="list-cell-label">{{item.droneName}}</span>
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
	</div>
</template>

<script>
	import bus from '@/assets/eventBus';
	import api from '@/api/API';
	export default {
		data() {
			return {
				selectObj: {},
				selectNum: 0,
				pager:{
		          pageNo:1,
		          pageSize:10,
		          total:0//从后台获取
		        },
		        topStatus: '',
		        wrapperHeight: 0,
		        allLoaded: false,
		        bottomStatus: '',
				datas: []
			}
		},
		created() {
			var self = this;
			this._initPage();
		},
		methods: {
			_initPage() {
		        var self = this;
		        this.loadData().then(function(res){
		            self.wrapperHeight = document.documentElement.clientHeight - self.$refs.wrapper.getBoundingClientRect().top-48;
		        })

		    },
		    loadData() {
		        var self = this;
		        var xhr = api.getDronemList({
			        "type":1,
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
				if(this.selectObj[item.droneMId]){
					this.$delete(this.selectObj,item.droneMId);
					this.selectNum--;
				}else{
					this.$set(this.selectObj,item.droneMId,item);
					this.selectNum++
				}

				
				console.log(this.selectObj)
			},
			submit() {
				console.log("emit")
				bus.$emit("wrjxh",this.selectObj);
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