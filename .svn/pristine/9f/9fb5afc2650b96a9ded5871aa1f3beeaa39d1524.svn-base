<template>
	<div class="wrapper">
		<ul class="mlist">
			<li v-for="item in datas" class="mlist-item" @click="toggleSelect(item)" :class="{selected: selectObj[item.id]}">
				<div class="item-image"></div>
				<div class="item-content">
					<p class="item-content-line-1">
						{{item.name}}
					</p>
					<p class="item-content-line-2">
						{{item.desc}}
					</p>
					<i class="iconfont icon-gou"></i>
				</div>
			</li>
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
	@import '../assets/sass/_base.scss';
	.wrapper{
		padding-bottom: 48px;
		.mlist{
			.mlist-item{
				display: flex;
				background-color: #fff;
				border-width: 0 0 1px 0;
				border-style: solid;
				border-color: #e8e8e8;
				padding: 10px;
				&.selected{
					.item-content{
						.iconfont{
							display: block;
						}
					}
					
				}
				.item-image{
					display: inline-block;
					vertical-align: middle;
					// width: 30%;
					// padding-right: 10px;
					line-height: 48px;
					height: 48px;
					width: 48px;
					// padding-left: 8px;
					text-align: center;
					background-repeat: no-repeat;
					background-size: cover;
					background-image:url(../assets/img/no-img.png);
				}
				.item-content{
					padding-left: 15px;
					padding-right: 30px;
					width: 100%;
					position: relative;
					flex: 1;
					p{
						line-height: 16px;
					}
					p.item-content-line-1{
						font-size: 18px;
						line-height: 30px;
					}
					p.item-content-line-2{
						font-size: 14px;
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
					    color: #2196f3;
					    display: none;
					}
				}
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