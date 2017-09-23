<template>
<!--飞行报备-->
    <div class="wrapper">
    	<!-- <mt-header fixed title="无人机"></mt-header> -->
    	<div class="group">
    		<label>飞行证书</label>
    		<!-- <ul class="selection-list"> -->
    		<router-link :to="{path:'/fxzsList'}" tag="ul" class="selection-list">
	    		<template v-if="Object.keys(formData.fxzsObj).length>0">
	    			<li class="selection" v-for="(item, key, index) in formData.fxzsObj">
		       			<div class="input-box">
		       				<span>{{item.name}}</span>
		       			</div>
		       			<i class="iconfont icon-add" v-if="index == Object.keys(formData.fxzsObj).length-1"></i>
		       		</li>
	    		</template>
	    		<template v-else>
	    			<li class="selection">
		       			<i class="iconfont icon-add"></i>
		       		</li>
	    		</template>
	       		<!-- <li class="selection">
	       			<i class="iconfont icon-add"></i>
	       		</li> -->
	       	</router-link>
	       	<!-- </ul> -->
	    </div>
	    <div class="group">
    		<label>无人机</label>
    		<!-- <ul class="selection-list"> -->
    		<router-link :to="{path:'/wrjxhList'}" tag="ul" class="selection-list">
    			<template v-if="Object.keys(formData.wrjxhObj).length>0">
		       		<li class="selection" v-for="(item, key, index) in formData.wrjxhObj">
		       			<div class="input-box">
		       				<span>{{item.name}}</span>
		       			</div>
		       			<i class="iconfont icon-add" v-if="index == Object.keys(formData.wrjxhObj).length-1"></i>
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
	    <div class="group" v-if="Object.keys(formData.wrjxhObj).length>0">
	    	<label>架数</label>
       		<ul class="selection-list">
	       		<li class="selection">
	       			<div class="input-box">
	       				<!-- <input type="text" placeholder="请输入架数"/> -->
	       				<span>{{Object.keys(formData.wrjxhObj).length}}架</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>开始时间</label>
       		<ul class="selection-list">
	       		<li class="selection" @click="openTimepicker($event,'startTime')">
	       			<div class="input-box">
	       				<span>{{! formData.startTime==""?formData.startTime:"请选择开始时间"}}</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>结束时间</label>
       		<ul class="selection-list">
	       		<li class="selection" @click="openTimepicker($event,'endTime')">
	       			<div class="input-box">
						<span>{{! formData.endTime==""?formData.endTime:"请选择结束时间"}}</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>飞行区域</label>
       		<ul class="selection-list">
	       		<li class="selection" @click="goMapPage('area')">
	       		<!-- <router-link :to="{path:'/map/area'}" tag="li" class="selection"> -->
	       			<div class="input-box">
	       				<span>{{flightArea.laititude == ""||flightArea.longitude == "" ? "请选择飞行区域" : flightArea.address}}</span>
	       				<i class="iconfont icon-coordinates"></i>
	       			</div>
	       		<!-- </router-link> -->
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>起飞点</label>
       		<ul class="selection-list">
	       		<li class="selection" @click="goMapPage('start')">
	       		<!-- <router-link :to="{path:'/map/start'}" tag="li" class="selection"> -->
	       			<div class="input-box">
	       				<span>{{flightStartLocation.address == "" ? "请选择起飞点" : flightStartLocation.address}}</span>
	       				<i class="iconfont icon-coordinates"></i>
	       			</div>
	       		<!-- </router-link> -->
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>降落点</label>
       		<ul class="selection-list">
	       		<li class="selection" @click="goMapPage('end')">
	       		<!-- <router-link :to="{path:'/map/end'}" tag="li" class="selection"> -->
	       			<div class="input-box">
	       				<span>{{flightEndLocation.address == "" ? "请选择降落点" : flightEndLocation.address}}</span>
	       				<i class="iconfont icon-coordinates"></i>
	       			</div>
	       		<!-- </router-link> -->
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>飞行高度</label>
       		<ul class="selection-list">
	       		<li class="selection">
	       			<div class="input-box">
	       				<input type="text" placeholder="请输入飞行高度" v-model="formData.flightHeight"/>
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
	       				<input type="text" placeholder="请输入联系电话" v-model="formData.telephone"/>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="footer">
	    	<a @click="submitForm" class="sumitBtn">提交</a>
	    </div>
	    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
	    <router-view></router-view>
    </div>
    
</template>
<script>
	import bus from '@/assets/eventBus';
	import { Datetime, Group, XButton } from 'vux'
	import { Toast } from 'mint-ui';
	import api from '@/api/API.js';
	// import fxzsList from "./fxzsList.vue";
	export default {
		components: {
			Datetime,
			Group,
			XButton,
			Toast
		},
		data() {
			return {
				sheetVisible: false,//飞行用途选框显隐
				actions: [],//飞行用途选择
				formData:{
					telephone:"",//联系电话
					flightPurpose:"",//飞行用途
					startTime: "2017-09-20 15:30",
					endTime: "2017-09-23 15:30",
					fxzsObj:{},
					wrjxhObj:{},
					flightHeight:""//飞行高度
					
				},
				flightArea: {
					"address":"",
					"laititude": "",
			        "longitude": "",
			        "radius": 0
				},
				flightStartLocation:{
					"address":"",
					"longitude":"",
					"laititude":""
				},
				flightEndLocation:{
					"address":"",
					"longitude":"",
					"laititude":""
				}
			}
		},
		
		methods: {
			openTimepicker(e,typeTime) {
				var self = this;
				// console.log(arguments)
				this.$vux.datetime.show({
			        cancelText: '取消',
			        confirmText: '确定',
			        format: 'YYYY-MM-DD HH:mm',
			        yearRow: "{value}年",
			        monthRow: "{value}月",
			        dayRow: "{value}日",
			        value: '2017-05-20 18',
			        onConfirm (val) {
			          self.formData[typeTime] = val;
			        }
			      })
			},
			setFxyt(val) {
				this.formData.flightPurpose = val.name;	
			},
			submitForm() {
				var self = this;
				var data = {
				    "licenseIds": "1,2,3",
				    "droneIds": "3,2,1",
				    "reportRecord.flightArea": JSON.stringify({
				        "laititude": "118.364545",
				        "longitude": "32.544654",
				        "radius": "500",
				        "address": "中国江苏省南京市建邺区云龙山路88号"
				    }),
				    "reportRecord.flightStartLocation": JSON.stringify({
				        "laititude": "118.364545",
				        "longitude": "32.544654",
				        "address": "中国江苏省南京市建邺区云龙山路88号"
				    }),
				    "reportRecord.flightEndLocation": JSON.stringify({
				        "laititude": "118.364545",
				        "longitude": "32.544654",
				        "address": "中国江苏省南京市建邺区云龙山路88号"
				    }),
				    "reportRecord.flightHeight": "500",
				    "reportRecord.flightStartTime": "2017-09-01 12:00:00",
				    "reportRecord.flightEndTime": "2017-09-01 13:00:00",
				    "reportRecord.flightPurpose": "拍摄风景",
				    "reportRecord.telephone": "18888888888"
				};
				api.saveReportrecord(data).then(function(res){
					var resData = res.data;
					if(resData && resData.code==0){
						self.$router.replace("/")
					}
				})
				/*this.$ajax.post("/mDrone/app/reportrecord/save.action",data).then(function(res){
					var resData = res.data;
					if(resData && resData.code==0){
						this.$router.replace("/")
					}
				})*/
				// this.$router.replace("/")
			},
			goMapPage(pageType) {
				if(pageType == "area"){
					if(!this.formData.startTime){
						Toast('请选择开始时间');
					}else if(!this.formData.endTime){
						Toast('请选择结束时间');
					}else{
						this.$router.push({
							path: "/map/area",
							query: {
								"beginTime":this.formData.startTime,
								"endTime":this.formData.endTime
							}
						})	
					}
					
				}else{
					if(!this.flightArea.laititude || !this.flightArea.longitude || !this.flightArea.radius){
						Toast('请选择飞行区域');
					}else{
						this.$router.push({
							path: "/map/"+pageType
						})
					}
					
					
				}
			}
		},
		/*beforeRouteLeave(to, from, next) {
			console.log(this)
			console.log(to, from);
			if(to.name == "index"){
				console.log("销毁");
				console.log(this.$route)
				this.$route.meta.keepAlive = false;
				this.$destroy()

			}
			next();
		},*/
		/*beforeRouteEnter(to, from, next){
			to.meta.keepAlive = true;

			next(function(vm){
				console.log(vm)
				vm.destory = false;
			})
		},*/
		mounted(){
			console.log("mounted");
			console.log(this);
			// console.log(this.$store.state.fxbb.doing)
			var self = this;
			bus.$on("fxzs",function(selectObj){
				console.log(selectObj);
				self.formData.fxzsObj = selectObj;
			});
			
			bus.$on("wrjxh",function(selectObj){
				self.formData.wrjxhObj = selectObj;
			});
			//
			bus.$on("flightArea",function(flightArea){
				console.log(flightArea)
				self.flightArea = flightArea;
			});
			bus.$on("flightStartLocation",function(flightStartLocation){
				console.log(flightStartLocation)
				self.flightStartLocation = flightStartLocation;
			});
			bus.$on("flightEndLocation",function(flightEndLocation){
				console.log(flightEndLocation)
				self.flightEndLocation = flightEndLocation;
			});
			this.actions = [{
		        name: '拍摄风景',
		        value:1,
		        method: this.setFxyt
		    }, {
		        name: '环境监测',
		        value:2,
		        method: this.setFxyt
		    }];
		},
		deactivated(){
			// this.$destroy()
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