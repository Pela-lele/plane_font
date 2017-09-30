<template>
<!--飞行报备-->
    <div class="wrapper">
    	<!-- <mt-header fixed title="无人机"></mt-header> -->
    	<div class="group">
    		<label>飞行证书</label>
    		<!-- <ul class="selection-list"> -->
    		<router-link :to="{path:'/fxbbEdit/fxzsList'}" tag="ul" class="selection-list">
	    		<template v-if="fxbbForm.licenseList && fxbbForm.licenseList.length>0">
	    			<li class="selection" v-for="(item, index) in fxbbForm.licenseList">
		       			<div class="input-box">
		       				<span>{{item.licenseSn}}</span>
		       			</div>
		       			<i class="iconfont icon-add" v-if="index == fxbbForm.licenseList.length-1"></i>
		       		</li>
	    		</template>
	    		<template v-else>
	    			<li class="selection">
		       			<i class="iconfont icon-add"></i>
		       		</li>
	    		</template>
	       	</router-link>
	       	<!-- </ul> -->
	    </div>
	    <div class="group">
    		<label>无人机</label>
    		<!-- <ul class="selection-list"> -->
    		<router-link :to="{path:'/fxbbEdit/wrjxhList'}" tag="ul" class="selection-list">
    			<template v-if="fxbbForm.droneList && fxbbForm.droneList.length>0">
		       		<li class="selection" v-for="(item, index) in fxbbForm.droneList">
		       			<div class="input-box">
		       				<span>{{item.droneSn}}</span>
		       			</div>
		       			<i class="iconfont icon-add" v-if="index == fxbbForm.droneList.length-1"></i>
		       		</li>
		       	</template>
	    		<template v-else>
	    			<li class="selection">
		       			<i class="iconfont icon-add"></i>
		       		</li>
	    		</template>
	       	</router-link>
	       	<!-- </ul> -->
	    </div>
	    <div class="group" v-if="fxbbForm.droneList">
	    	<label>架数</label>
       		<ul class="selection-list">
	       		<li class="selection">
	       			<div class="input-box">
	       				<span>{{fxbbForm.droneList.length}}架</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>开始时间</label>
       		<ul class="selection-list">
	       		<li class="selection" @click="openTimepicker($event,'startTime',formData.startTime.substring(0,formData.startTime.length-3))">
	       			<div class="input-box">
	       				<span>{{! formData.startTime==""?formData.startTime:"请选择开始时间"}}</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>结束时间</label>
       		<ul class="selection-list">
	       		<li class="selection" @click="openTimepicker($event,'endTime',formData.endTime.substring(0,formData.endTime.length-3))">
	       			<div class="input-box">
						<span>{{! formData.endTime==""?formData.endTime:"请选择结束时间"}}</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>飞行区域</label>
       		<ul class="selection-list">
	       		<li class="selection" @click="goMapPage()">
	       		<!-- <router-link :to="{path:'/map/area'}" tag="li" class="selection"> -->
	       			<div class="input-box">
	       				<span>{{!fxbbForm.flightArea ? "请选择飞行区域" : fxbbForm.flightArea.address}}</span>
	       				<i class="iconfont icon-coordinates"></i>
	       			</div>
	       		<!-- </router-link> -->
	       		</li>
	       	</ul>
	    </div>
	    <!-- <div class="group">
	    	<label>起飞点</label>
	           		<ul class="selection-list">
	       		<li class="selection" @click="goMapPage('start')">
	       			<div class="input-box">
	       				<span>{{flightStartLocation.address == "" ? "请选择起飞点" : flightStartLocation.address}}</span>
	       				<i class="iconfont icon-coordinates"></i>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>降落点</label>
	           		<ul class="selection-list">
	       		<li class="selection" @click="goMapPage('end')">
	       			<div class="input-box">
	       				<span>{{flightEndLocation.address == "" ? "请选择降落点" : flightEndLocation.address}}</span>
	       				<i class="iconfont icon-coordinates"></i>
	       			</div>
	       		</li>
	       	</ul>
	    </div> -->
	    <div class="group">
	    	<label>飞行高度</label>
       		<ul class="selection-list">
	       		<li class="selection" @click="isShowpicker = true">
	       			<div class="input-box">
	       				<span>{{formData.flightHeight[0] || "请选择飞行高度"}}</span>
	       				<!-- <input type="hidden" placeholder="请输入飞行高度" v-model="formData.flightHeight"/> -->
	       				 <!-- name="flightHeight" v-validate="'required'" -->
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    
	    <div class="group">
	    	<label>飞行用途</label>
       		<ul class="selection-list">
	       		<li class="selection">
	       			<div class="input-box" @click="sheetVisible = true">
	       				<span>{{formData.flightPurpose || "请选择飞行用途"}}</span>
	       				<!-- <input type="text" placeholder="请输入飞行用途" readonly="" /> -->
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>联系电话</label>
       		<ul class="selection-list">
	       		<li class="selection">
	       			<div class="input-box">
	       				<input type="text" placeholder="请输入联系电话" name="contactPhone" v-model="formData.telephone" v-validate="'required|phone'"/>
	       				 <!-- v-validate="'required|phone'" -->
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="footer">
	    	<a @click="submitForm" class="sumitBtn">保存编辑</a>
	    </div>
	    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
	    <popup-picker :show.sync="isShowpicker" :show-cell="false" title="飞行高度" :data="[['20', '40', '60', '80', '100', '120']]" v-model="formData.flightHeight"></popup-picker>
	    <router-view></router-view>
    </div>
    
</template>
<script>
	import bus from '@/assets/eventBus';
	import { Datetime, Group, PopupPicker } from 'vux';
	import {mapState, mapMutations} from 'vuex';
	import { Toast } from 'mint-ui';
	import api from '@/api/API.js';
	import {dateFormat} from '@/utils';
	export default {
		components: {
			Datetime,
			Group,
			Toast,
			PopupPicker
		},
		data() {
			return {
				sheetVisible: false,//飞行用途选框显隐
				isShowpicker:false,//飞行高度选择
				actions: [{
			        name: '拍摄风景',
			        value:1,
			        method: this.setFxyt
			    }, {
			        name: '环境监测',
			        value:2,
			        method: this.setFxyt
			    }],//飞行用途选择
				formData:{
					telephone:"",//联系电话
					flightPurpose:"",//飞行用途
					startTime: "",
					endTime: "",
					flightHeight:[]//飞行高度
					
				}
			}
		},
		computed:{
             ...mapState([
                'fxbbForm'
            ]),
             
        },
		methods: {
			...mapMutations([
            	'DELETE_FXBBFORM','SAVE_FXBBFORM'
            ]),
			openTimepicker(e,typeTime,value) {
				console.log(value)
				var self = this;
				var now = new Date();
				var startDate = dateFormat(now,"YYYY-MM-DD");
				this.$vux.datetime.show({
			        cancelText: '取消',
			        confirmText: '确定',
			        format: 'YYYY-MM-DD HH:mm',
			        yearRow: "{value}年",
			        monthRow: "{value}月",
			        dayRow: "{value}日",
			        value: value||"",
			        startDate: startDate,
			        onConfirm (val) {
			          self.formData[typeTime] = val+":00";
			        }
			      })
			},
			setFxyt(val) {
				this.formData.flightPurpose = val.name;
			},
			submitForm() {
				var self = this;
				if(this.fxbbForm.licenseList.length == 0){
					Toast("请选择飞行证书");
					return;
				}
				if(this.fxbbForm.droneList.length == 0){
					Toast("请选择无人机");
					return;
				}
				if(!this.formData.startTime){
					Toast("请选择开始时间");
					return;
				}
				if(!this.formData.endTime){
					Toast("请选择结束时间");
					return;
				}
				if(!this.fxbbForm.flightArea){
					Toast("请选择飞行区域");
					return;
				}
				if(this.formData.flightHeight.length == 0){
					Toast("请选择飞行高度");
					return;
				}
				if(!this.formData.flightPurpose){
					Toast("请选择飞行用途");
					return;
				}
				if(this.formData.endTime<this.formData.startTime){
					Toast("结束时间不能小于开始时间");
				}

				this.$validator.validateAll().then(function(flag){
					if(flag){
						//提交表单
						var data = self.getFormData();

						/*self.editFxjhInfo(data);
						self.$router.go(-2)
						return;*/

						api.updateReportrecord(data).then(function(res){
							var resData = res.data;
							if(resData && resData.code==0){

								self.$router.replace("/")
							}
						})
					}else{
						var ers = self.errors.all();
						if(ers.length>0){
							Toast(ers[0]);
						}
					}
				})
			},
			getFormData() {
				var licenseIds = Array.from(this.fxbbForm.licenseList, function(item){
					return item.licenseId;
				});
				var droneIds = Array.from(this.fxbbForm.droneList, function(item){
					return item.droneId;
				});
				
				var data = {
					"reportRecord.recordId":this.recordId,
				    "licenseIds": licenseIds.join(","),
				    "droneIds": droneIds.join(","),
				    "reportRecord.flightArea": JSON.stringify(this.fxbbForm.flightArea),
				    "reportRecord.flightStartLocation": JSON.stringify(this.fxbbForm.flightStartLocation),
				    "reportRecord.flightEndLocation": JSON.stringify(this.fxbbForm.flightEndLocation),
				    "reportRecord.flightHeight": this.formData.flightHeight[0],
				    "reportRecord.flightStartTime": this.formData.startTime,
				    // "reportRecord.flightStartTimeStr": this.formData.startTime,
				    "reportRecord.flightEndTime": this.formData.endTime,
				    "reportRecord.flightPurpose": this.formData.flightPurpose,
				    "reportRecord.telephone": this.formData.telephone
				};
				console.log(data);
				return data;
			},
			goMapPage() {
				if(!this.formData.startTime){
					Toast('请选择开始时间');
				}else if(!this.formData.endTime){
					Toast('请选择结束时间');
				}else{
					this.$router.push({
						path: "/fxbbEdit/map",
						query: {
							"beginTime":this.formData.startTime,
							"endTime":this.formData.endTime
						}
					})	
				}
					
			},
			editFxjhInfo(data) {
		        var self = this;
		        bus.$emit("editFxjh",data);
		    },
		},
		beforeRouteLeave(to, from, next) {
			if(to.name == "index"){
				console.log("销毁");
				// this.$destroy()
				this.DELETE_FXBBFORM();
			}
			next();
		},
		created() {

			var reportRecord = this.$route.query.reportRecord;
			var droneList = this.$route.query.droneList;
			var licenseList = this.$route.query.licenseList;
			this.formData.telephone = reportRecord.telephone;
			this.formData.flightPurpose = reportRecord.flightPurpose;
			this.formData.startTime = reportRecord.flightStartTimeStr;
			this.formData.endTime = reportRecord.flightEndTimeStr;
			this.formData.flightHeight[0] = reportRecord.flightHeight;

			this.recordId = reportRecord.recordId;
			// telephone:"",//联系电话
			// flightPurpose:"",//飞行用途
			// startTime: "",
			// endTime: "",
			// flightHeight:[]//飞行高度

			this.SAVE_FXBBFORM({
				licenseList:licenseList,
				droneList:droneList,
				flightArea:JSON.parse(reportRecord.flightArea),
				flightStartLocation:JSON.parse(reportRecord.flightStartLocation),
				flightEndLocation:JSON.parse(reportRecord.flightEndLocation),
			})
		}
	}
</script>
<style scoped lang="scss">
	@import '../../assets/sass/_base.scss';
	.wrapper{
		.group{
			display: flex;
			background-color: #fff;
			// margin: 8px 0;
			border-width: 0 0 1px 0;
			border-style: solid;
			border-color: $border-color;
			label{
				vertical-align: middle;
				width: 30%;
				line-height: 48px;
				/* display: flex;
				box-align:center;
				align-items: center; */
				padding-left: 8px;
				text-align: center;
			}
			.selection-list{
				display: flex;
				flex:1;
				flex-flow:column;
				padding-left: 20px;
				.selection{
					width: 100%;
					height: 48px;
					position: relative;
					border-bottom: 1px solid $border-color;
					&:last-child{
						border-bottom: 0 none;
					}
					.input-box{
						padding-right: 20px;
						height: 48px;
						line-height: 48px;
						color: $theme-color;
						// color: #6e6a6a;
						&>*{
							// color: #6e6a6a;
							color: $theme-color;
							border: 0 none;
						}
						input{
							height: 40px;
							line-height: 40px;
						}
					}
					.iconfont{
						width: 20px;
						height: 20px;
						display: inline-block;
						position: absolute;
						top: 50%;
						right: 10px;
						transform: translateY(-50%);
						text-align: center;
						line-height: 20px;
						font-size: 20px;
						color: $theme-color;
					}
				}
			}	
		}	
		.footer{
			background: #fff;
    		padding: 20px 0;
    		.sumitBtn{
			    width: 80%;
			    height: 38px;
			    line-height: 38px;
			    background: #2196f3;
			    color: #fff;
			    display: block;
			    text-align: center;
			    font-size: 16px;
			    border-radius: 5px;
			    margin: 0 auto;
    		}
		}	
		
	}
</style>