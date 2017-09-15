<template>
	<div class="wrapper">
		<div id="bdmap">
			
		</div>
		<!-- 地图上层页面 -->
		<div class="map-searcher">
			<div class="search-box">
				<div class="search-input">
					<i class="iconfont icon-search"></i>
					<input type="search" v-model="searchInput" id="searchInput" />
					<a href="javascript:" class="icon-clear" @click="searchInput = ''" v-show="searchInput !== ''">
						<i class="iconfont icon-delete"></i>
					</a>
				</div>
			</div>
			<!-- <label class="search-bar">搜索</label> -->
		</div>
		<div class="map-legend">
			<p class="legend-item"><i class="legend-item-icon forbid"></i>禁飞</p>
			<p class="legend-item"><i class="legend-item-icon limit"></i>限飞</p>
		</div>
		<div class="map-range" :class="{showPicker:isShowpicker}" v-if="showRange">
			<div class="toolbar" @click="togglePicker">
				<i class="iconfont icon-gengduo"></i>
				飞行范围：{{range[0]}}
			</div>
			<!-- <mt-picker :slots="rangeSlot" @change="onRangeChange" :visible-item-count="3"></mt-picker> -->
		</div>
			<popup-picker :show.sync="isShowpicker" :show-cell="false" title="飞行范围" :data="[['100', '300', '500', '1000', '2000', '3000']]" v-model="range"></popup-picker>
	</div>
	
</template>

<script>
	import planeIcon from '../assets/img/map/uPlane-red.png'
	import { PopupPicker } from 'vux'
	export default {
		components: {
			PopupPicker
		},
		data(){
			return {
				range: ["500"],
				searchInput: "",
				/*rangeSlot: [{
					flex: 1,
					values: ['100', '300', '500', '1000', '2000', '3000'],
					className: 'slot1',
					textAlign: 'center'
			    }],*/
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
		watch: {
			range(curVal){
				this.changeRange(curVal)
			}
		},
		props:["showRange"],
		methods: {
			changeRange(range) {
				console.log("onRangeChange")
				// this.map.removeOverlay(this.circle)
				this.circle.setRadius(range[0]);
				// this.map.addOverlay(this.circle);
				this.refreshZoom();
			},
			togglePicker() {
				this.isShowpicker = !this.isShowpicker;
			},
			//限飞区
			addLimitArea() {
				var limitPolygon = new BMap.Polygon([
					new BMap.Point(118.77807441, 32.09923550),
			        new BMap.Point(118.79817441, 32.05723750),
			        new BMap.Point(118.87809441, 32.0623550)
				],{
					fillColor:"#ff8f00",
					strokeWeight:1,
					fillOpacity:0.5,
					strokeOpacity:0.3
				});
				limitPolygon.disableMassClear();
				this.map.addOverlay(limitPolygon);
			},
			//禁飞区
			addForbidArea() {
				var forbidPolygon = new BMap.Polygon([
					new BMap.Point(118.97807441, 32.06923550),
			        new BMap.Point(118.75817441, 32.05923750),
			        new BMap.Point(118.87809441, 32.0923550)
				],{
					fillColor:"#f44336",
					strokeWeight:1,
					fillOpacity:0.5,
					strokeOpacity:0.3
				});
				forbidPolygon.disableMassClear();
				this.map.addOverlay(forbidPolygon);

			},
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
			initSearch() {
				var self = this;
				var map = this.map;
				var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
					{"input" : "searchInput"
					,"location" : map
				});
				ac.addEventListener("onconfirm", function(e) {
					var _value = e.item.value;
					console.log(_value)
					var searchValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
					self.setPlace(searchValue);
				});
			},
			setPlace(searchValue) {
				var self = this;
				var map = this.map;
				var local = new BMap.LocalSearch(map, { //智能搜索
				  	onSearchComplete: function(){
				  		var point = local.getResults().getPoi(0).point;
				  		console.log(point);
				  		map.panTo(point);
				  		map.removeOverlay(self.circle);
				  		self.marker.setPosition(point);
				  		self.circle.setCenter(point);
				  		map.addOverlay(self.circle);
				  		// self.refreshZoom();
				  		// map.centerAndZoom(point, 18);
						// map.addOverlay(new BMap.Marker(pp));    //添加标注

				  	}
				});
				local.search(searchValue);
			},
			initOverlays() {
				
			}
		},
		mounted() {
			var self = this;
			var type = this.pageType = this.$route.params.type;
			var map = this.map = new BMap.Map("bdmap");

			map.centerAndZoom(new BMap.Point(115.404, 32.915), 5);
			map.enableScrollWheelZoom(true);
			this.addLimitArea();
			this.addForbidArea();

			this.initSearch();

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
					var point_icon = new BMap.Icon(planeIcon, new BMap.Size(32,32));
					var marker = self.marker = new BMap.Marker(point);
					marker.setIcon(point_icon);
					marker.enableDragging();
					map.addOverlay(marker);  

					//地图画圈
					var circle = self.circle = new BMap.Circle(point,self.range,{fillColor:"blue", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
					map.addOverlay(circle);

					self.refreshZoom();

					marker.addEventListener("dragstart",function(e){
						map.removeOverlay(circle);
						self.addLimitArea()
						self.addForbidArea()
					});
					
					marker.addEventListener("dragend",function(){
						var point = this.getPosition();
						circle.setCenter(point);
						map.addOverlay(circle);
						self.refreshZoom()
					});

					map.addEventListener("click",function(e){
						map.removeOverlay(circle);
						self.addLimitArea()
						self.addForbidArea()
						console.log(e)
						var point = e.point;
						circle.setCenter(point);
						map.addOverlay(circle);
						marker.setPosition(point);
						self.refreshZoom()
					});

				}else{

				}
			},{enableHighAccuracy: true})  
		}
	}
</script>

<style scoped lang="scss">
	@import '../assets/sass/_base.scss';
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
</style>
