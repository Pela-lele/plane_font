<template>
<!--飞行报备-->
    <div class="wrapper">
    	<!-- <mt-header fixed title="无人机"></mt-header> -->
    	<div class="group">
    		<label>飞行证书</label>
    		<!-- <ul class="selection-list"> -->
    		<router-link :to="{path:'/fxzsList'}" tag="ul" class="selection-list">
	       		<li class="selection">
	       			<div class="input-box">
	       				<!-- <span>CHINA-BDKICHINA</span> -->
	       			</div>
	       			<i class="iconfont icon-add"></i>
	       		</li>
	       	</router-link>
	       	<!-- </ul> -->
	    </div>
	    <div class="group">
    		<label>无人机型号</label>
    		<!-- <ul class="selection-list"> -->
    		<router-link :to="{path:'/wrjxhList'}" tag="ul" class="selection-list">
	       		<li class="selection">
	       			<div class="input-box">
	       				<span>CHINA-BDKICHINA</span>
	       			</div>
	       			
	       		</li>
	       		<li class="selection">
	       			<div class="input-box">
	       				<span>CHINA-BDKICHINA</span>
	       			</div>
	       			<i class="iconfont icon-add"></i>
	       		</li>
	       	</router-link>
	       	<!-- </ul> -->
	    </div>
	    <div class="group">
	    	<label>架数</label>
       		<ul class="selection-list">
	       		<li class="selection">
	       			<div class="input-box">
	       				<span>2架</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>飞行区域</label>
       		<ul class="selection-list">
	       		<!-- <li class="selection"> -->
	       		<router-link :to="{path:'/map'}" tag="li" class="selection">
	       			<div class="input-box">
	       				<span>秦淮区夫子庙</span>
	       				<i class="iconfont icon-coordinates"></i>
	       			</div>
	       		</router-link>
	       		<!-- </li> -->
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>起飞点</label>
       		<ul class="selection-list">
	       		<!-- <li class="selection"> -->
	       		<router-link :to="{path:'/map'}" tag="li" class="selection">
	       			<div class="input-box">
	       				<span>秦淮区夫子庙</span>
	       				<i class="iconfont icon-coordinates"></i>
	       			</div>
	       		</router-link>
	       		<!-- </li> -->
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>降落点</label>
       		<ul class="selection-list">
	       		<!-- <li class="selection"> -->
	       		<router-link :to="{path:'/map'}" tag="li" class="selection">
	       			<div class="input-box">
	       				<span>秦淮区夫子庙</span>
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
	       				<input type="text" placeholder="请输入飞行高度"/>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>开始时间</label>
       		<ul class="selection-list">
	       		<li class="selection" @click="openStartTimepicker">
	       			<div class="input-box">
	       				<span>{{! startTime==""?startTime:"请选择开始时间"}}</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>结束时间</label>
       		<ul class="selection-list">
	       		<li class="selection" @click="openEndTimepicker">
	       			<div class="input-box">
						<span>{{! endTime==""?endTime:"请选择结束时间"}}</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>飞行用途</label>
       		<ul class="selection-list">
	       		<li class="selection">
	       			<div class="input-box">
	       				<input type="text" placeholder="请输入飞行用途"/>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>联系电话</label>
       		<ul class="selection-list">
	       		<li class="selection">
	       			<div class="input-box">
	       				<input type="text" placeholder="请输入联系电话" v-model="formData.phone"/>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
		<mt-datetime-picker 
			ref="endTimePicker" 
			type="datetime" 
			v-model="endPickerValue"
			@confirm="handleEndTimepicker">
		</mt-datetime-picker>
		<mt-datetime-picker 
			ref="startTimePicker" 
			type="datetime" 
			v-model="startPickerValue"
			@confirm="handleStartTimepicker">
		</mt-datetime-picker>
    </div>
    
</template>
<script>
	
	export default {
		data() {
			return {
				startPickerValue: new Date(),
				endPickerValue: new Date(),
				startTime:"",
				endTime:"",
				formData:{
					phone:""
				}
			}
		},
		methods: {
			openEndTimepicker() {
				this.$refs.endTimePicker.open();
			},
			openStartTimepicker() {
				this.$refs.startTimePicker.open();
			},
			handleEndTimepicker(date) {
				var str = date.Format("YYYY-MM-DD hh:mm");
				this.endTime = str;
			},
			handleStartTimepicker(date) {
				var str = date.Format("YYYY-MM-DD hh:mm");
				this.startTime = str;
			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../assets/sass/_base.scss';
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
			
		
	}
</style>