<template>
	<transition name="fade">
		<div v-if="current" class="x-sheet" @click="hide">
			<div class="x-sheet-bottom" @click.stop="prevent">
				<p>请选择:</p>
				<ul>
					<li v-for="item in data" @click="select(item)">{{item}}</li>
				</ul>
			</div>
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
			},
			data:{
				type:Array,
				required:true
			},
			callback:{
				type:Function,
				required:true
			}
		},
		methods:{
			select(txt){
				this.current = false;
				this.$props.callback(txt);
			},
			prevent(){
			},
			hide(){
				this.current = false;
			}
		},
		mounted(){
			this.$xEvent.on(this.$props.role,() => {
				this.current = true;
			});
		}
	}
</script>

<style lang="less" scoped>
	@import '../../styles/sheet/sheet.less';
</style>