

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
		}
	}
</script>

<style scoped lang="scss">
	
	.map-content{
		width: 100%;
		height: 100%;
	}
</style>