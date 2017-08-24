<template>
	<transition name="fade">
		<div v-if="show" class="x-slip" @click="close">
			<div v-if="getPosition=='left'" class="x-slip-left" @click.stop="prevent" :style="getWidth">
				<slot></slot>
			</div>
			<div v-else class="x-slip-right" @click.stop="prevent" :style="getWidth">
				<slot></slot>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		data(){
			return {
				show:false
			}
		},
		props:{
			position:{
				type:String,
				required:false,
				default:'left'
			},
			role:{
				type:String,
				required:true
			},
			width:{
				type:String,
				required:false
			}
		},
		computed:{
			getPosition(){
				let pos = this.$props.position;
				return ['left','right'].some(function(val){ return pos == val }) ? pos : 'left';
			},
			getWidth(){
				let width = this.$props.width;
				return width ? {width:width} : '';
			}
		},
		methods:{
			close(){
				this.show = false
			},
			prevent(){
			}
		},
		mounted(){
			let that = this;
			this.$xEvent.on(this.$props.role, function(bool){
				bool ? that.show = true : that.show = false;
			});	
		}
	}
</script>

<style lang="less" scoped>
	@import '../../styles/slip/slip.less';
</style>