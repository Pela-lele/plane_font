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
	    <div class="group">
	    	<label>架数</label>
       		<ul class="selection-list">
	       		<li class="selection">
	       			<div class="input-box">
	       				<!-- <input type="text" placeholder="请输入架数"/> -->
	       				<span>2架</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>飞行区域</label>
       		<ul class="selection-list">
	       		<!-- <li class="selection"> -->
	       		<keep-alive>
	       		<router-link :to="{path:'/map/area'}" tag="li" class="selection">
	       			<div class="input-box">
	       				<span>秦淮区夫子庙</span>
	       				<i class="iconfont icon-coordinates"></i>
	       			</div>
	       		</router-link>
	       		</keep-alive>
	       		<!-- </li> -->
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>起飞点</label>
       		<ul class="selection-list">
	       		<!-- <li class="selection"> -->
	       		<keep-alive>
	       		<router-link :to="{path:'/map/start'}" tag="li" class="selection">
	       			<div class="input-box">
	       				<span>秦淮区夫子庙</span>
	       				<i class="iconfont icon-coordinates"></i>
	       			</div>
	       		</router-link>
	       	</keep-alive>
	       		<!-- </li> -->
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>降落点</label>
       		<ul class="selection-list">
	       		<!-- <li class="selection"> -->
	       		<router-link :to="{path:'/map/end'}" tag="li" class="selection">
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
	       		<li class="selection" @click="openTimepicker($event,'startTime')">
	       			<div class="input-box">
	       				<span>{{! startTime==""?startTime:"请选择开始时间"}}</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>结束时间</label>
       		<ul class="selection-list">
	       		<li class="selection" @click="openTimepicker($event,'endTime')">
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
	    <div class="footer">
	    	<a @click="submitForm" class="sumitBtn">提交</a>
	    </div>
    </div>
    
</template>
<script>
	import bus from '@/assets/eventBus';
	import { Datetime, Group, XButton } from 'vux'
	export default {
		components: {
			Datetime,
			Group,
			XButton
		},
		data() {
			return {
				startPickerValue: new Date(),
				endPickerValue: new Date(),
				startTime:"",
				endTime:"",
				formData:{
					phone:"",
					fxzsObj:{},
					wrjxhObj:{}
				}
			}
		},
		methods: {
			openTimepicker(e,typeTime) {
				var self = this;
				console.log(arguments)
				this.$vux.datetime.show({
			        cancelText: '取消',
			        confirmText: '确定',
			        format: 'YYYY-MM-DD HH:mm',
			        yearRow: "{value}年",
			        monthRow: "{value}月",
			        dayRow: "{value}日",
			        value: '2017-05-20 18',
			        onConfirm (val) {
			          self[typeTime] = val;
			        }
			      })
			},
			submitForm() {
				this.$router.replace("/")
			}
		},
		beforeRouteLeave(to, from, next) {
			console.log(to, from);
			if(to.name == "index"){
				console.log("销毁")
				// this.$destroy()
			}
			next();
		},
		mounted(){
			console.log("mounted");
			var self = this;
			bus.$on("fxzs",function(selectObj){
				console.log(selectObj);
				self.formData.fxzsObj = selectObj;
			});
			
			bus.$on("wrjxh",function(selectObj){
				self.formData.wrjxhObj = selectObj;
			});
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