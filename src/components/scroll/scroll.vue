<template>
	<div class="scroll-wrap">
			<img src="static/load.gif" alt="">
			<span class="scroll-rotate">加载中</span>
	</div>
</template>

<script>
	import xIcon from '../icons/icon.vue';
	export default {
		data(){
			return {}
		},
		components:{
			xIcon
		}
	}
</script>

<style lang="less" scoped>
	@import '../../styles/scroll/scroll.less';
</style>