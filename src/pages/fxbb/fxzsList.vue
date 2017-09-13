<template>
	<div class="wrapper">
		<ul class="mlist">
			<div class="list-cell" v-for="item in datas" @click="toggleSelect(item)" :class="{selected: selectObj[item.id]}">
		        <div class="list-cell-wrapper">
		        	<div class="list-cell-image">
		        		<img src="../../assets/img/wrj/demo1.jpg" width="100%" height="100%">
		        	</div>
		        	<div class="list-cell-title">
		        		<span class="list-cell-text">{{item.name}}</span>
		        		<span class="list-cell-label">{{item.desc}}</span>
		        	</div>

		        </div>
		        <i class="list-cell-allow-right iconfont icon-gou"></i>
		    </div>
		</ul>
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
	export default {
		data() {
			return {
				selectObj: {},
				selectNum: 0,
				datas: [{
					id:"1",
					name: "小红",
					desc: "CHSKSi"
				},{
					id:"2",
					name: "小黄",
					desc: "XXXXXX"
				},{
					id:"3",
					name: "小红",
					desc: "CHSKSi"
				},{
					id:"4",
					name: "小黄",
					desc: "XXXXXX"
				},{
					id:"5",
					name: "小红",
					desc: "CHSKSi"
				},{
					id:"6",
					name: "小黄",
					desc: "XXXXXX"
				},{
					id:"7",
					name: "小红",
					desc: "CHSKSi"
				},{
					id:"8",
					name: "小黄",
					desc: "XXXXXX"
				},{
					id:"9",
					name: "小红",
					desc: "CHSKSi"
				},{
					id:"10",
					name: "小黄",
					desc: "XXXXXX"
				},{
					id:"11",
					name: "小红",
					desc: "CHSKSi"
				},{
					id:"12",
					name: "小黄",
					desc: "XXXXXX"
				}]
			}
		},
		methods: {
			toggleSelect(item) {
				var selectObj = this.selectObj;
				console.log(item)
				if(this.selectObj[item.id]){
					this.$delete(this.selectObj,item.id);
					this.selectNum--;
				}else{
					this.$set(this.selectObj,item.id,item);
					this.selectNum++
				}
			},
			submit() {
				console.log("emit")
				bus.$emit("fxzs",this.selectObj);
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