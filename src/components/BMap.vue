<template>
	<div>
		<div id="bdmap">
			
		</div>
		<!-- 地图上层页面 -->
		<div class="map-legend">
			<p class="legend-item"><i class="legend-item-icon forbid"></i>禁飞</p>
			<p class="legend-item"><i class="legend-item-icon limit"></i>限飞</p>
		</div>
		<div class="map-range" :class="{showPicker:isShowpicker}">
		<!--  visibleItemCount="3" -->
			<div class="toolbar" @click="togglePicker">
				<i class="iconfont" :class="{'icon-unfold':isShowpicker,'icon-packup':!isShowpicker}"></i>
				飞行范围：{{range}}
			</div>
			<mt-picker :slots="rangeSlot" @change="onRangeChange" :visible-item-count="3"></mt-picker>
		</div>
	</div>
	
</template>

<script>
	export default {
		data(){
			return {
				range: "100",
				rangeSlot: [{
					flex: 1,
					values: ['100', '300', '500', '1000', '2000', '3000'],
					className: 'slot1',
					textAlign: 'center'
			    }],
			    isShowpicker: false
			}
		},
		methods: {
			onRangeChange(picker, values) {
				this.range = values[0];
			},
			togglePicker() {
				this.isShowpicker = !this.isShowpicker;
			}
		},
		mounted() {
			var map =new BMap.Map("bdmap");
			var point = new BMap.Point(115.404, 32.915);
			map.centerAndZoom(point, 10);

			var pt = new BMap.Point(116.417, 39.909);
			// var myIcon = new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/fox.gif", new BMap.Size(300,157));
			var marker = new BMap.Marker(point/*,{
				offset: new BMap.size(10,10)
			}*/);  // 创建标注
			map.addOverlay(marker);  
			marker.enableDragging();
			marker.setOffset(new BMap.Size(0, 10))

			// var circle = new BMap.Circle(point,10000);
			var circle = new BMap.Circle(point,10000,{fillColor:"blue", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
			map.addOverlay(circle);  
		}
	}
</script>

<style scoped lang="scss">
	@import '../assets/sass/_base.scss';
	#bdmap{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
	
	.map-legend{
		background-color: #fff;
		border: 1px solid $border-color;
		position: absolute;
		top: 10px;
		left: 10px;
		box-shadow: 2px 3px 10px #888888;
		.legend-item{
			line-height: 28px;
			padding: 0 15px 0 10px;

			.legend-item-icon{
				display: inline-block;
				width: 20px;
				height: 20px;
				border-radius: 50%;
				background-color: #ccc;
				vertical-align: middle;
				margin-right: 10px;
				position: relative;
				top: -1px;
				&.forbid{
					background-color: #f44336;
				}
				&.limit{
					background-color: #ff8f00;
				}
			}
		}
	}
	.map-range{
		position: absolute;
		width: 100%;
		bottom: -108px;
		background-color: #fff;
		&.showPicker{
			bottom: 0px;
		}
		.toolbar{
			text-align: center;
			height: 40px;
			line-height: 40px;
			border-bottom: 1px solid $border-color;
			border-top: 1px solid $border-color;
			color: $theme-color;
			.iconfont{
				font-size: 20px;
				vertical-align: middle;
			}
		}
	}
</style>
