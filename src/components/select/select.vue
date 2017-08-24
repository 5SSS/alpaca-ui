<template>
	<div class="x-select" >
		<span>{{selected}}</span>
		<a href="javascript:;" @click="toggle">
			<i class="icon-more_unfold"></i>
		</a>
		<transition name="slide">
			<div v-if="show" class="x-select-list">
				<ul>
					<li v-for="item in data" @click="selectItem(item)">{{item.name}}</li>
				</ul>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				select:'请选择',
				show:false
			}
		},
		props:{
			data:{
				type:Array,
				required:true
			},
			callback:{
				type:Function,
				required:true
			},
			width:{
				type:String,
				required:false,
				default:'default'
			}
		},
		computed:{
			selected(){
				return this.select;
			}
		},
		methods:{
			toggle(){
				this.show = !this.show;
			},
			selectItem(item){
				this.show = false;
				this.select = item.name;
				this.$props.callback(item);
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../../styles/icon/icon.less';
	@import '../../styles/select/select.less';
</style>