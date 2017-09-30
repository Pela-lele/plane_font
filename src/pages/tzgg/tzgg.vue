<template>
	<div class="wrapper">
	    <!-- <mt-navbar v-model="selected">
	      <mt-tab-item id="tab-container1">选项一</mt-tab-item>
	      <mt-tab-item id="tab-container2">选项二</mt-tab-item>
	    </mt-navbar> -->
		<ul class="tabbar animate-oneline">
            <li class="tab" @click="selected = 'tab-container1'" :class="{active: selected == 'tab-container1'}">
                <label class="tab-label">报备审核</label>
            </li>
            <li class="tab" @click="selected = 'tab-container2'" :class="{active: selected == 'tab-container2'}">
                <label class="tab-label">政策公告</label>
            </li>
        </ul>

	    <mt-tab-container v-model="selected" swipeable class="tab-container">
	      <mt-tab-container-item id="tab-container1" class="tab-item-container">
		    <div class="list-cell">
		      	<!-- <div class="list-cell-wrapper"> -->
		      	<router-link :to="{path:'/fxjhList/fxbbDetail',query:{'id':'e792c07883b8459c8482d105faccabd9'}}" tag="div" class="list-cell-wrapper">
		        	<div class="list-cell-title">
		        		<span class="list-cell-text">飞行计划审核通过<i class="right-time">2017-08-21 10:54</i></span>
		        		<span class="list-cell-label">请按规定进行飞行操作</span>
		        	</div>
		        </router-link>
		        <!-- </div> -->
		        <div class="list-cell-wrapper">
		        	<div class="list-cell-title">
		        		<span class="list-cell-text">飞行计划已驳回<i class="right-time">2017-08-21 10:54</i></span>
		        		<span class="list-cell-label">该区域申报飞行计划已达到最大值</span>
		        	</div>
		        </div>
		    </div>

	      </mt-tab-container-item>
	      <mt-tab-container-item id="tab-container2" class="tab-item-container">
	      	<div class="list-cell">
		      	<!-- <div class="list-cell-wrapper"> -->
		      	<router-link :to="{path:'/zcggDetail'}" tag="div" class="list-cell-wrapper">
	        		<div class="list-cell-title">
		        		<span class="list-cell-text">政府政策<i class="right-time">2017-08-21 10:54</i></span>
		        		<span class="list-cell-label">关于《2017广州市无人机管理条例的解释》</span>
		        	</div>
		        </router-link>
		        <!-- </div> -->
		        <div class="list-cell-wrapper">
	        		<div class="list-cell-title">
		        		<span class="list-cell-text">临时管制公告<i class="right-time">2017-08-21 10:54</i></span>
		        		<span class="list-cell-label">9月1日天河体育中心举办大型赛事，临时禁止......</span>
		        	</div>
		        </div>
		    </div>
	      </mt-tab-container-item>
	    </mt-tab-container>
	</div>
</template>

<script>
export default {
  data() {
    return {
      selected: 'tab-container1'
    };
  }
};
</script>

<style scoped lang="scss">
	@import '../../assets/sass/_base.scss';
	.wrapper{
		@include wrapper
		.tabbar{
			display: table;
			position: absolute;
			top: 0;
			z-index: 100;
			.tab{
				position: relative;
				display: table-cell;
				width: 1%;
				text-align: center;
				box-sizing: border-box;
				height: 40px;
				line-height: 40px;
				border-width: 0px 0px 1px 0;
				&.active{
					color: $theme-color;
					&:before{
						-webkit-transform: scale3d(1, 1, 1);
						transform: scale3d(1, 1, 1);
						-webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
						transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
						-webkit-transition-duration: 0.3s;
						transition-duration: 0.3s;
					}
				}
				&:before{
					content: '';
				    position: absolute;
				    bottom: 0;
				    left: 0;
				    width: 100%;
				    height: 2px;
				    -webkit-transform: scale3d(0, 1, 1);
				    transform: scale3d(0, 1, 1);
				    -webkit-transition: -webkit-transform 0.1s;
				    transition: transform 0.1s;
				    background: $theme-color;
					height: 2px;
					width: 70%;
					left: 13%;
				}
				.tab-label{
					display: inline-block;
					font-size: 13px;
					height: 13px;
					line-height: 13px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					pointer-events: none;
				}
			}
		}

		.list-cell-wrapper{
			.right-time{
				float: right;
				color: $grey-color;
				font-size: 12px;
			}
		}
	}
</style>
<style lang="scss">
	.tab-container{
		height: 100%;
		.mint-tab-container-wrap{
			height: 100%;
			padding-top: 40px;
		}
		.tab-item-container{
			height: calc(100% - 40px);
			overflow: auto;
		}
	}
</style>
