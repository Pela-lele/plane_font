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
			<p class="legend-item"><i class="legend-item-icon eable"></i>可飞</p>
		</div>
		<div class="map-range" :class="{showPicker:isShowpicker}">
			<div class="toolbar" @click="isShowpicker = !isShowpicker">
				<!-- <i class="iconfont icon-gengduo"></i> -->
				飞行半径（米）：{{range[0]}}
			</div>
			<!-- <mt-picker :slots="rangeSlot" @change="onRangeChange" :visible-item-count="3"></mt-picker> -->
		</div>
		<div class="submitBtn" @click="submit">
			<i class="iconfont icon-gou"></i>
		</div>
		<popup-picker :show.sync="isShowpicker" :show-cell="false" title="飞行范围" :data="[['100', '200', '300', '400', '500']]" v-model="range"></popup-picker>
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
	import { PopupPicker } from 'vux'
	export default {
		components: {
			PopupPicker,Toast
		},
		data(){
			return {
				range: ['300'],
				searchInput: "",
			    isShowpicker: false,
			    map: null,
			    marker: null,//区域中心点
			    startMarker: null,
			    endMarker: null,
			    circle: null//飞行范围
			}
		},
		computed:{
             ...mapState([
                'fxbbForm'
            ])
        },
		watch: {
			range(curVal){
				this.changeRange(curVal)
			}
		},
		// props:["showRange"],
		methods: {
			...mapMutations([
            	'RECORD_FLIGHTAREA',"RECORD_FLIGHTSTARTLOCATION","RECORD_FLIGHTENDLOCATION"
            ]),
			_initPage() {
				var self = this;
				var map = this.map;
				this.initLimitOrForbidArea();
				//飞行区域
				if(this.fxbbForm.flightArea){
					this.initFlightArea();
					this.initSEPoint();
				}else{
					var point = new BMap.Point(113.347708, 23.177017);
					this._drawFlightArea(point);
				}
				this._event();
			},
			changeRange(range) {
				this.circle.setRadius(range[0]);
				this.refreshSEPoint();
				this.refreshZoom();
			},
			//初始化限飞禁飞
			initLimitOrForbidArea() {
				var self = this;
				var limitAreaList = [];
				var forbidAreaList = [];
				
				var beginTime = this.$route.query.beginTime;
				var endTime = this.$route.query.endTime;
				api.getLimitarea({
					beginTime: beginTime,
	    			endTime: endTime
				}).then(function(res){
					var data = res.data;
					if(data.code == 0){
						var areaList = data.areaList;
						for(var i=0,len=areaList.length;i<len;i++){
							var area = areaList[i];
							var type = area.type;
							var points = area.areaPointarr;
							points = JSON.parse(points)
							if(type == "禁飞区"){
								self.addForbidArea(points);
							}else if(type == "限飞区"){
								self.addLimitArea(points);
							}else if(type == "可飞区"){
								self.addEableArea(points);
							}
						}
					}
				})
			},
			//初始化起飞点降落点
			initSEPoint(){
				var flightStartLocation = this.fxbbForm.flightStartLocation;
				var flightEndLocation = this.fxbbForm.flightEndLocation;

				var start_point = new BMap.Point(flightStartLocation.longitude, flightStartLocation.latitude);
				var end_point = new BMap.Point(flightEndLocation.longitude, flightEndLocation.latitude);

				this._drawSatrtPoint(start_point)
				this._drawEndPoint(end_point)

			},
			//初始化飞行区域
			initFlightArea(){
				var self = this;
				var flightArea = this.fxbbForm.flightArea;
				var point = new BMap.Point(flightArea.longitude, flightArea.latitude);
				this._drawFlightArea(point,function(){
					self.initSEPoint();
				})
			},
			_event() {
				var self = this;
				var marker = this.marker;//飞行区域中心点
				var circle = this.circle;//飞行区域圆
				var map = this.map;
				marker.addEventListener("dragend",function(){
					var point = this.getPosition();
					self._drawFlightArea(point)
				});

				map.addEventListener("click",function(e){
					var point = e.point;
					self._drawFlightArea(point)
				});
			},
			//绘制飞行区域
			_drawFlightArea(point,drawSEPointFun) {
				var map = this.map;
				var marker = this.marker;//飞行区域中心点
				var circle = this.circle;//飞行区域圆
				if(marker && circle){//改变飞行区域
					// map.clearOverlays()
					// circle.hide();
					circle.setCenter(point);
					marker.setPosition(point);
					// circle.show();
					// map.addOverlay(circle)
				}else{//绘制飞行区域
					circle = this.circle = new BMap.Circle(point,this.range[0],{fillColor:"blue", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
					var point_icon = new BMap.Icon(planeIcon, new BMap.Size(32,32));
					marker = this.marker = new BMap.Marker(point);
					marker.setIcon(point_icon);
					marker.enableDragging();
				}
				map.addOverlay(marker);  
				map.addOverlay(circle);
				drawSEPointFun ? drawSEPointFun() : this.refreshSEPoint();
				this.refreshZoom(true);
			},
			
			refreshSEPoint(){
				var circle = this.circle;
				var point = circle.getCenter();
				var bounds = circle.getBounds();
				var p1 = bounds.getNorthEast();
				var p2 = bounds.getSouthWest();

				var start_point = new BMap.Point(p2.lng, point.lat);
				var end_point = new BMap.Point(p1.lng, point.lat);

				this._drawSatrtPoint(start_point)
				this._drawEndPoint(end_point)
			},
			_drawSatrtPoint(point){
				var map = this.map;
				var startMarker = this.startMarker;
				if(startMarker){
					startMarker.setPosition(point);
				}else{
					var point_icon = new BMap.Icon(startIcon, new BMap.Size(32,32));
					startMarker = this.startMarker = new BMap.Marker(point);
					startMarker.setIcon(point_icon);
					startMarker.enableDragging();
					map.addOverlay(startMarker);  
				}
				
			},
			_drawEndPoint(point){
				var map = this.map;
				var endMarker = this.endMarker;
				if(endMarker){
					endMarker.setPosition(point);
				}else{
					var point_icon = new BMap.Icon(endIcon, new BMap.Size(32,32));
					endMarker = this.endMarker = new BMap.Marker(point);
					endMarker.setIcon(point_icon);
					endMarker.enableDragging();
					map.addOverlay(endMarker);  
				}

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
				areaLayer.disableMassClear();
				this.map.addOverlay(areaLayer);
			},
			//限飞区
			addLimitArea(points) {
				if(!points || points.length==0) return;
				var limitAreaOptions = {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5, fillColor:"yellow", fillOpacity:0.5};
				if(points.length == 1){//圆
					this._drawArea("Circle",points,limitAreaOptions,"限飞区")
				}else{
					this._drawArea("Polygon",points,limitAreaOptions,"限飞区")
				}
			},
			//禁飞区
			addForbidArea(points) {
				if(!points || points.length==0) return;
				var forbidAreaOptions = {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5, fillColor:"red", fillOpacity:0.5};
				if(points.length == 1){//圆
					this._drawArea("Circle",points,forbidAreaOptions,"禁飞区")
				}else{
					this._drawArea("Polygon",points,forbidAreaOptions,"禁飞区")
				}
			},
			//可飞区
			addEableArea(points) {
				if(!points || points.length==0) return;
				var eableAreaOptions = {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5, fillColor:"green", fillOpacity:0.5};
				if(points.length == 1){//圆
					this._drawArea("Circle",points,eableAreaOptions,"可飞区")
				}else{
					this._drawArea("Polygon",points,eableAreaOptions,"可飞区")
				}
			},
			refreshZoom(isZoom) {
				var map = this.map;
				var cirBounds = this.circle.getBounds();
				var Ll = cirBounds.Ll;
				var ul = cirBounds.ul;
				var _m = map.getViewport([Ll,ul]);
				if(isZoom){
					map.setZoom(_m.zoom-1);
				}
				// map.setZoom(_m.zoom-1);
				map.panTo(_m.center);
			},
			initSearch() {
				var self = this;
				var map = this.map;
				var ac = new BMap.Autocomplete({    //建立一个自动完成的对象
					"input" : "searchInput",
					"location" : map
				});
				ac.addEventListener("onconfirm", function(e) {
					var _value = e.item.value;
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
				  		self._drawFlightArea(point);
				  	}
				});
				local.search(searchValue);
			},
			judgeOverlays() {
				var self = this;
				var flag = true;
				var map = this.map;
				var overlays = map.getOverlays();
				var overLayList = [];
				var circle = self.circle;
				for(var i=0,len=overlays.length;i<len;i++){
					var overLay = overlays[i];
					if(overLay instanceof BMap.Circle || overLay instanceof BMap.Polygon){
						if(circle !== overLay){
							// overLayList.push(overLay);
							var intersectBounds = circle.getBounds().intersects(overLay.getBounds());
							if(intersectBounds){
								var flightType = overLay.flightType;
								if(flightType == "限飞区"){
									Toast("不允许在限飞区飞行！")
									flag = false;
									return;
								}else if(flightType == "禁飞区"){
									Toast("不允许在禁飞区飞行！")
									flag = false;
									return;
								}
							}
						}
					}
				}
				return flag;
			},
			submit() {
				var self = this;
				if(!this.judgeOverlays()) return;
				var point = self.circle.getCenter();
				var geo = new BMap.Geocoder();
				geo.getLocation(point,function(res){
					var address = res.address;
					var flightArea = {
						"address": address,
						"latitude": point.lat,
				        "longitude": point.lng,
				        "radius": self.range[0]
					};
					self.RECORD_FLIGHTAREA(flightArea)
				})

				var start_point = self.startMarker.getPosition();
				geo.getLocation(start_point,function(res){
					var address = res.address;
					var flightStartLocation = {
						"address": address,
						"latitude": start_point.lat,
				        "longitude": start_point.lng
					};
					self.RECORD_FLIGHTSTARTLOCATION(flightStartLocation)
				})

				var end_point = self.endMarker.getPosition();
				geo.getLocation(end_point,function(res){
					var address = res.address;
					var flightEndLocation = {
						"address": address,
						"latitude": end_point.lat,
				        "longitude": end_point.lng
					};
					self.RECORD_FLIGHTENDLOCATION(flightEndLocation)
				});
				this.$router.back(-1);
			}
		},
		created() {
			this.fxbbForm.flightArea ? this.range[0] = this.fxbbForm.flightArea.radius : "";
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
			this.initSearch();
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
