<template>
	<transition name="fade">
		<div v-if="current" class="x-popup">
			<slot></slot>	
		</div>
	</transition>
</template>

<script>
	export default {
		data(){
			return {
				current:false
			}
		},
		props:{
			role:{
				type:String,
				required:true
			}
		},
		mounted(){
			this.$xEvent.on(this.$props.role,() => {
				this.current = true;
				let self = this;
				setTimeout(() => {
					self.current = false;
				},2000);
			});
		}
	}
</script>

<style lang="less" scoped>
	@import '../../styles/popup/popup.less';
</style>