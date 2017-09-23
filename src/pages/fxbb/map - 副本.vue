

<template>
	<div class="map-content">
		<BMap :showRange="true"></BMap>
	</div>
	
</template>


<script>
	import BMap from '@/components/BMap'
	export default {
		components: {
			BMap
		},
		methods: {
			//获取飞行区域
			getPlaneArea() {
				this.$ajax.get("/mDrone/limitarea/getListByCond.action",{
					params: {
						beginTime: "2017-9-14 13:00:00",
	    				endTime: "2017-9-26 14:00:00"
					}
				})
			}
			
		},
		mounted() {
			this.getPlaneArea()
		}
	}
</script>

<style scoped lang="scss">
	
	.map-content{
		width: 100%;
		height: 100%;
	}
</style>