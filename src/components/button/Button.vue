<template>
	<a href="javascript:;" :class="classes" :style="getWidth" @click="handler">
		<img v-if="loading" src="static/images/loading.gif">
		<span>
			<slot></slot>
		</span>
	</a>	
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
					return oneOf(value, ['default', 'primary', 'success', 'warning', 'error','disabled']);
				}
			},
			width:{
				type:String,
				required:false,
				default:'100%'
			},
			loading:{
				type:Boolean,
				default:false
			}
		},
		computed:{
			classes(){
				let type = this.$props.type;
				return 'x-button x-button-' +type; 
			},
			getWidth(){
				return {width: this.$props.width}
			}
		},
		methods:{
			handler(){
				if(this.$props.type !== 'disabled') this.$emit('click');
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../../styles/button/button.less';
</style>

