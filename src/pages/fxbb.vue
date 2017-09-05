<template>
<!--飞行报备-->
    <div class="wrapper">
    	<!-- <mt-header fixed title="无人机"></mt-header> -->
    	<div class="group">
    		<label>飞行证书</label>
    		<ul class="selection-list">
	       		<li class="selection">
	       			<!-- <div class="input-box">
	       				CHINA-BDKICHINA
	       			</div> -->
	       			<i class="iconfont icon-enter"></i>
	       		</li>
	       		<!-- <li class="selection">
	       			<div class="input-box">
	       				CHINA-BDKICHINA
	       			</div>
	       			<i class="pl-icon"></i>
	       		</li> -->
	       	</ul>
	    </div>
	    <div class="group">
       		<ul class="selection-list">
	       		<li class="selection">
	       			<label>架数</label>
	       			<div class="input-box">
	       				
	       			</div>
	       		</li>
	       	</ul>
	    </div>
    </div>
    
</template>

<style scoped lang="scss">
	@import '../assets/sass/_base.scss';
	.wrapper{
		.group{
			display: flex;
			background-color: #fff;
			margin: 8px 0;
			border-width: 1px 0;
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
			}
			.selection-list{
				display: flex;
				flex:1;
				flex-flow:column;
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
					}
					.iconfont{
						width: 20px;
						height: 20px;
						display: inline-block;
						// float: right;
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