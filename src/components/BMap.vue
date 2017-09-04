<template>
	<div id="allmap"></div>
</template>

<script>
	export default {
		data(){
			return {
				mapStyle:{
					width:'100%',
					height:'100%'
				}
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
			// setTimeout(function(){
				var map =new BMap.Map("allmap");
				var point = new BMap.Point(115.404, 32.915);
				map.centerAndZoom(point, 5);
			// },2000)
			
		}
	}
</script>

<style scoped lang="scss">
	#allmap{
		width:100%;
		height:100%;
	}
</style>
