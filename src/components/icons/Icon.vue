<template>
	<i :class="classes"></i>
</template>

<script>
	import { oneOf } from '../oneOf.js';
	export default {
		props:{
			type:{
				type:String,
				default:'account',
				required:false
			}
		},
		computed:{
			classes(){
				let type = this.$props.type;
				return 'icon-'+type;
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../../styles/icon/icon.less';
</style>