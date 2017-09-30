<template>
<!--飞行报备-->
    <div class="wrapper" style="overflow: scroll" v-if="reportRecord">
    	<!-- <mt-header fixed title="无人机"></mt-header> -->
    	<div class="group">
    		<label>飞行证书</label>
    		<ul class="selection-list">
    			<li class="selection" v-for="(item,index) in licenseList">
	       			<div class="input-box">
	       				<span>{{item.licenseSn}}</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
    		<label>无人机</label>
    		<ul class="selection-list">
    			<li class="selection" v-for="(item,index) in droneList">
	       			<div class="input-box">
	       				<span>{{item.droneSn}}</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
    		<label>架数</label>
    		<ul class="selection-list">
    			<li class="selection">
	       			<div class="input-box">
	       				<span>{{droneList.length}}架</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>飞行区域</label>
       		<ul class="selection-list">
	       		<!-- <li class="selection"> -->
	       		<router-link :to="{path:'/fxjhList/fxbbDetail/mapShow',query:{flightArea:reportRecord.flightArea,flightStartLocation:reportRecord.flightStartLocation,flightEndLocation:reportRecord.flightEndLocation}}" tag="li" class="selection">
	       			<div class="input-box">
	       				<span>{{reportRecord.address}}</span>
	       				<i class="iconfont icon-coordinates"></i>
	       			</div>
	       		</router-link>
	       		<!-- </li> -->
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>飞行高度</label>
       		<ul class="selection-list">
	       		<li class="selection">
	       			<div class="input-box">
	       				<span>{{reportRecord.flightHeight}}米</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>开始时间</label>
       		<ul class="selection-list">
	       		<li class="selection">
	       			<div class="input-box">
	       				<span>{{reportRecord.flightStartTimeStr}}</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>结束时间</label>
       		<ul class="selection-list">
	       		<li class="selection">
	       			<div class="input-box">
						<span>{{reportRecord.flightEndTimeStr}}</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>飞行用途</label>
       		<ul class="selection-list">
	       		<li class="selection">
	       			<div class="input-box">
	       				<span>{{reportRecord.flightPurpose}}</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>联系电话</label>
       		<ul class="selection-list">
	       		<li class="selection">
	       			<div class="input-box">
	       				<span>{{reportRecord.telephone}}</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>

	    <div class="common-absolute-footer">
	      <span class="absolute-footer-btn" @click="editSubmit">编辑</span>
	      <span class="footer-red-btn" @click="cancelSubmit" v-if="reportRecord.status!==3">取消</span>
	    </div>
	   	<!-- <div class="common-footer-red" @click="cancelSubmit" v-if="reportRecord.status!==3">
	   		      <span class="footer-red-btn">取消</span>
	   		    </div> -->

	   		<a class="code" @click="qrCodePage" :style="{'background-image': reportRecord.qrcode }"></a>
	   	<router-view></router-view>
    </div>

</template>
<script>
	import bus from '@/assets/eventBus';
	import api from '@/api/API';
	import { Toast } from 'mint-ui';
	export default {
		data() {
			return {
				id: "",//记录id
				reportRecord: null//详细
			}
		},
		methods: {
			getInfo() {
				var self = this;
				api.getReportrecordInfo(this.id).then(function(res){
					var resData = res.data;
					if(resData && resData.code == 0){
						self.reportRecord = resData.reportRecord;
						self.droneList = resData.droneList;
						self.licenseList = resData.licenseList
					}
				})
			},
			cancelSubmit() {
				var self = this;
				api.cancelReportrecordInfo(this.id).then(function(res){
					var resData = res.data;
					if(resData && resData.code == 0){
						// self.$router.go(0);
						Toast("操作成功");
						self.reportRecord.status = 3;
						self.changeListStatus();
					}
				})
			},
			editSubmit() {
				this.$router.push({
					path:'/fxbbEdit',
					query:{
						"reportRecord":this.reportRecord,
						"droneList":this.droneList,
						"licenseList":this.licenseList
					}
				})
			},
			changeListStatus() {
				var self = this;
				bus.$emit("changeStatus",{
					id:self.id,
					status:3
				})
			},
			qrCodePage() {
				this.$router.push('/code')
			}
		},
		created(){
			this.id = this.$route.query.id;
			this.getInfo();
		}
	}
</script>
<style scoped lang="scss">
	@import '../../assets/sass/_base.scss';
	.wrapper{
		// padding-bottom: 48px;
		// 二维码
		.code{
			position: fixed;
			right: 10px;
			bottom: 10px;
			display: block;
			width: 50px;
			height: 50px;
			background: url(../../assets/img/code.jpg) no-repeat;
			background-size: cover;
			background-position: center;
			box-shadow: 1px 1px 5px $border-color;
		}
		.footer{
			position: fixed;
			bottom: 0;
			height: 48px;
			width: 100%;
			background-color: #fff;
			border-top: 1px solid $border-color;
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
