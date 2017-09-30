<template>
	<div class="wrapper">
		<div id="bdmap">
			
		</div>
		<!-- 地图上层页面 -->
		<!-- <div class="map-legend">
			<p class="legend-item"><i class="legend-item-icon forbid"></i>禁飞</p>
			<p class="legend-item"><i class="legend-item-icon limit"></i>限飞</p>
			<p class="legend-item"><i class="legend-item-icon eable"></i>可飞</p>
		</div> -->
	</div>
	
</template>

<script>
	// import bus from '@/assets/eventBus';
	import {mapState, mapMutations} from 'vuex';
	import { Toast } from 'mint-ui';
	import planeIcon from '../../assets/img/map/uPlane-red.png'
	import startIcon from '../../assets/img/map/up.png'
	import endIcon from '../../assets/img/map/down.png'
	import api from '@/api/API.js';
	export default {
		methods: {
			_initPage() {
				var self = this;
				var query = this.$route.query;
				var flightArea = JSON.parse(query.flightArea);
				var flightStartLocation = JSON.parse(query.flightStartLocation);
				var flightEndLocation = JSON.parse(query.flightEndLocation);
				//飞行区域
				this.initFlightArea(flightArea);
				this.initSEPoint(flightStartLocation,flightEndLocation)
				// this.initSEPoint();
			},
			//初始化起飞点降落点
			initSEPoint(flightStartLocation,flightEndLocation){
				var start_point = new BMap.Point(flightStartLocation.longitude, flightStartLocation.latitude);
				var end_point = new BMap.Point(flightEndLocation.longitude, flightEndLocation.latitude);

				this._drawSatrtPoint(start_point)
				this._drawEndPoint(end_point)

			},
			//初始化飞行区域
			initFlightArea(flightArea){
				// console.log(flightArea)
				var self = this;
				var point = new BMap.Point(flightArea.longitude, flightArea.latitude);
				var map = this.map;
				var marker;//飞行区域中心点
				var circle;//飞行区域圆
				circle = new BMap.Circle(point,flightArea.radius,{fillColor:"blue", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
				var point_icon = new BMap.Icon(planeIcon, new BMap.Size(32,32));
				marker = new BMap.Marker(point);
				marker.setIcon(point_icon);
				// marker.enableDragging();
				map.addOverlay(marker);  
				map.addOverlay(circle);
				this.refreshZoom(circle,true);
			},
			_drawSatrtPoint(point){
				var map = this.map;
				var startMarker;
				var point_icon = new BMap.Icon(startIcon, new BMap.Size(32,32));
				startMarker = new BMap.Marker(point);
				startMarker.setIcon(point_icon);
				// startMarker.enableDragging();
				map.addOverlay(startMarker);  
				
			},
			_drawEndPoint(point){
				var map = this.map;
				var endMarker;
				var point_icon = new BMap.Icon(endIcon, new BMap.Size(32,32));
				endMarker = new BMap.Marker(point);
				endMarker.setIcon(point_icon);
				// endMarker.enableDragging();
				map.addOverlay(endMarker);  

			},
			//绘制禁飞限飞区域
			_drawArea(type, points, options, flightType) {
				var areaLayer;
				if(type == "Circle"){
					var pt = new BMap.Point(points[0].longitude, points[0].latitude)
					areaLayer = new BMap.Circle(pt,points[0].radius,options);
				}else{
					var bt_points = [];
					for(var i=0,len=points.length;i<len;i++){
						bt_points.push(new BMap.Point(points[i].longitude, points[i].latitude))
					}
					areaLayer = new BMap.Polygon(bt_points,options);
				}
				areaLayer.flightType=flightType;
				this.map.addOverlay(areaLayer);
			},
			refreshZoom(overlay,isZoom) {
				var map = this.map;
				var cirBounds = overlay.getBounds();
				var Ll = cirBounds.Ll;
				var ul = cirBounds.ul;
				var _m = map.getViewport([Ll,ul]);
				if(isZoom){
					map.setZoom(_m.zoom-1);
				}
				// map.setZoom(_m.zoom-1);
				map.panTo(_m.center);
			}
		},
		mounted() {
			var self = this;
			if(!BMap){
				Toast("地图加载失败");
				return;
			}
			var map = this.map = new BMap.Map("bdmap");
			map.centerAndZoom(new BMap.Point(115.404, 32.915), 5);
			map.enableScrollWheelZoom(true);
			


			this._initPage();

			
		}
	}
</script>

<style scoped lang="scss">
	@import '../../assets/sass/_base.scss';
	#bdmap{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.map-searcher{
		display: flex;
		background-color: rgba(239,239,244,0.6);
		position: relative;
		padding: 8px 10px;
		.search-box{
			position: relative;
			flex: auto;
			background-color: #fff;
    		.search-input{
    			position: relative;
			    // padding-left: 35px;
			    // padding-right: 30px;
			    height: 100%;
			    width: 100%;
			    z-index: 1;
			    .iconfont.icon-search{
					position: absolute;
					left: 10px;
					top: 0;
					line-height: 28px;
					font-size: 18px;
					color: #ccc;
			    }
			    .icon-clear{
					position: absolute;
				    top: 0;
				    right: 0;
				    padding: 0 10px;
				    line-height: 28px;
				    color: #ccc;
			    }
			    input{
					padding: 4px 10px;
					width: 100%;
					height: 28px;
					border: 0;
					font-size: 14px;
					line-height: 28px;
					box-sizing: border-box;
					background: transparent;
					outline: 0;
					padding-left: 35px;
			    	padding-right: 30px;
			    }
    		}
		}
		.search-bar{
			margin-left: 10px;
			line-height: 28px;
			color: $theme-color;
			white-space: nowrap;
		}
	}
	.map-legend{
		background-color: #fff;
		border: 1px solid $border-color;
		position: absolute;
		top: 60px;
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
					background-color: red;
				}
				&.limit{
					background-color: yellow;
				}
				&.eable{
					background-color: green;
				}
			}
		}
	}
	.map-range{
		position: absolute;
		width: 100%;
		bottom: 0;
		background-color: #fff;
		transition: all .5s;
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
				font-size: 15px;
				vertical-align: middle;
			}
		}
	}
	.submitBtn{
		position: absolute;
		right: 16px;
		bottom: 56px;
		font-size: 20px;
		color: #fff;
		background: #393D49;
		padding: 9px 7px;
		border-radius: 5px;
	}
</style>
