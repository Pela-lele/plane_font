<template>
	<div class="wrapper">
		<div id="bdmap">

		</div>
		<div class="map-footer" @click="goFxjh">
			周边2起飞行计划
		</div>
	</div>

</template>

<script>
	import pointIcon from '../../assets/img/map/point-red.png'
	import planeIcon from '../../assets/img/map/uPlane-red.png'

	export default {
		data(){
			return {
				range: "300",
				rangeSlot: [{
					flex: 1,
					values: ['100', '300', '500', '1000', '2000', '3000'],
					className: 'slot1',
					textAlign: 'center'
			    }],
			    isShowpicker: false,
			    map: null,
			    overlays:{
			    	marker: null,
			    	circle: null,
			    	startMarker: null,
			    	endMarker: null
			    },
			    marker: null,
			    circle: null,
			    pageType: "area"//页面功能，起始点、结束点、划区域
			}
		},
		props:["showRange"],
		methods: {
			refreshZoom() {
				var map = this.map;
				var cirBounds = this.circle.getBounds();
				var Ll = cirBounds.Ll;
				var ul = cirBounds.ul;
				var _m = map.getViewport([Ll,ul]);
				// console.log(cirBounds,_m)
				map.setZoom(_m.zoom-1);
				map.panTo(_m.center);
			},
			goFxjh() {
				this.$router.push("/fxjhAroundList")
			},
			initOverlays() {

			}
		},
		mounted() {
			var self = this;
			var type = this.pageType = this.$route.params.type;
			var map = this.map = new BMap.Map("bdmap");
			map.centerAndZoom(new BMap.Point(115.404, 32.915), 5);

			this.initOverlays();
			var geolocation = new BMap.Geolocation();
			geolocation.getCurrentPosition(function(res){
				console.log(res)
				if(this.getStatus() == "0" && res.point){
					var longitude = res.point.longitude;
					var latitude = res.point.latitude;
					var point = res.point;
					map.setZoom(13);
					map.panTo(point);
					//地图标点
					var point_icon = new BMap.Icon(pointIcon, new BMap.Size(32,32));
					var marker = self.marker = new BMap.Marker(point);
					marker.setIcon(point_icon);
					marker.disableDragging();
					map.addOverlay(marker);

					//标注飞机点位118.74358306026  32.007347809188
					for(var i=0;i<2;i++){
						var lng = Math.random()/20;
						var lat = Math.random()/20;
						var plane_point = new BMap.Point(118.74358306026+lng,32.007347809188+lat);
						var plane_icon = new BMap.Icon(planeIcon, new BMap.Size(32,32));
						var plane_marker = new BMap.Marker(plane_point);
						plane_marker.setIcon(plane_icon);
						map.addOverlay(plane_marker);
					}



				}else{

				}
			},{enableHighAccuracy: true})
		}
	}
</script>

<style scoped lang="scss">
	@import '../../assets/sass/_base.scss';
	.wrapper{
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
	}
	#bdmap{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.map-footer{
		width: 100%;
	    line-height: 48px;
	    background: #2196f3;
	    display: inline-block;
	    text-align: center;
	    color: #fff;
	    position: absolute;
	    bottom: 0;
	}
</style>
