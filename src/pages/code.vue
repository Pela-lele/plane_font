<template>
	<div class="wrapper">
		<img src="../assets/img/code.jpg" class="code">
	</div>
</template>
<script>
	
</script>
<style scoped lang="scss">
	@import '../assets/sass/_base.scss';
	.wrapper{
		@include wrapper;
		// position: relative;
		.code{
			position: absolute;
			top: 50%;
			left: 50%;
			width: 80%;
			transform: translate(-50%,-50%);
		}
	}
</style>