<template>
	<div>
		<div id="bdmap">
			
		</div>
		<!-- 地图上层页面 -->
		<div class="flow-map-page">
			<div class="map-legend">
				<p class="legend-item"><i class="legend-item-icon forbid"></i>禁飞</p>
				<p class="legend-item"><i class="legend-item-icon limit"></i>限飞</p>
			</div>
			<div class="map-range">
				<mt-picker :slots="rangeData" @change="onRangeChange" visibleItemCount="3"></mt-picker>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default {
		data(){
			return {
				rangeData:[
					{
			          flex: 1,
			          values: ['100', '300', '500', '1000', '2000', '3000'],
			          className: 'range-picker',
			          textAlign: 'center'
			        }
				]
			}
		},
		methods: {
			onRangeChange(picker, values) {
				console.log(values)
			}
		},
		props:{
			// 地图在该视图上的高度
			mapHeight:{
				type:Number,
				default:500
			},
		},
		mounted() {
			var map =new BMap.Map("bdmap");
			var point = new BMap.Point(115.404, 32.915);
			map.centerAndZoom(point, 5);
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
	.flow-map-page{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 2000;
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
			bottom: 0;
			background-color: #fff;
			.range-picker{

			}
		}
	}
</style>
