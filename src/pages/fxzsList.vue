<template>
	<div class="wrapper">
		<ul class="mlist">
			<li class="mlist-item selected">
				<div class="item-image"></div>
				<div class="item-content">
					<p class="item-content-line-1">
						李阿吉
					</p>
					<p class="item-content-line-2">
						CHSKSi
					</p>
					<i class="iconfont icon-gou"></i>
				</div>
			</li>
			<li class="mlist-item">
				<div class="item-image"></div>
				<div class="item-content">
					<p class="item-content-line-1">
						李阿吉
					</p>
					<p class="item-content-line-2">
						CHSKSi
					</p>
					<i class="iconfont icon-gou"></i>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		
	}
</script>
<style scoped lang="scss">
	.wrapper{
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
	}
</style>