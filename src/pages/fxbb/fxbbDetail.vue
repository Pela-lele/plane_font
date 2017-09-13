<template>
<!--飞行报备-->
    <div class="wrapper">
    	<!-- <mt-header fixed title="无人机"></mt-header> -->
    	<div class="group">
    		<label>飞行证书</label>
    		<ul class="selection-list">
    			<li class="selection">
	       			<div class="input-box">
	       				<span>小明  AOPA-CHINA</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
    		<label>无人机</label>
    		<ul class="selection-list">
    			<li class="selection">
	       			<div class="input-box">
	       				<span>大疆精灵PHANTOM4 PRO</span>
	       			</div>
	       		</li>
	       	</ul>
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
	       		<router-link :to="{path:'/map/area'}" tag="li" class="selection">
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
	       				<span>500米</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>开始时间</label>
       		<ul class="selection-list">
	       		<li class="selection">
	       			<div class="input-box">
	       				<span>2017-08-28 09:23:00</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>结束时间</label>
       		<ul class="selection-list">
	       		<li class="selection">
	       			<div class="input-box">
						<span>2017-08-28 11:23:00</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>飞行用途</label>
       		<ul class="selection-list">
	       		<li class="selection">
	       			<div class="input-box">
	       				<span>拍摄风景</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	    <div class="group">
	    	<label>联系电话</label>
       		<ul class="selection-list">
	       		<li class="selection">
	       			<div class="input-box">
	       				<span>13813487646</span>
	       			</div>
	       		</li>
	       	</ul>
	    </div>
	   <!-- <div class="footer">
	   			<a class="submitbtn" @click="submit">二维码</a>
	   		</div> -->
	   		<a class="code" @click="submit"></a>
    </div>
    
</template>
<script>
	import bus from '@/assets/eventBus';
	export default {
		data() {
			return {
			}
		},
		methods: {
			submit() {
				this.$router.push("/code")
			}
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
		// padding-bottom: 48px;
		// 二维码
		.code{
			position: fixed;
			right: 10px;
			bottom: 10px;
			display: block;
			width: 30px;
			height: 30px;
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