<template>
	<div class="x-avatar" >
		<div :style="getWidth">
			<img :src="image" >
		</div>
		<span :style="getStyle">
			<slot></slot>
		</span>
	</div>
</template>

<script>
	export default {
		props:{
			image:{
				type:String,
				required:true
			},
			width:{
				type:String
			},
			color:{
				type:String
			},
			size:{
				type:String
			}
		},
		computed:{
			getWidth(){
				let width = this.$props.width;
				return width?{width:width}:'';
			},
			getStyle(){
				let color = this.$props.color;
				let size = this.$props.size;
				return color ? (size ? {'color':color,'font-size':size} : {'color':color}) : (size ? {'font-size':size} : '');
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../../styles/avatar/avatar.less';
</style>