<template>
	<span :class="classes" @click="handler">
		<slot></slot>
	</span>	
</template>

<script>
	import { oneOf } from '../oneOf.js';
	export default {
		props:{
			type:{
				type:String,
				default:'default',
				required:false,
				validator (value) {
					return oneOf(value, ['default', 'primary', 'success', 'warning', 'error']);
				}
			}
		},
		computed:{
			classes(){
				let type = this.$props.type;
				return 'x-button x-button-' +type; 
			}
		},
		methods:{
			handler(){
				this.$emit('click')
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../../styles/button/button.less';
</style>

