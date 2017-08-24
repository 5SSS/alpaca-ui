<template>
	<div class="x-head">
		<a href="javascript:;" class="x-home" @click="home">
			<span v-show="showTitle">{{homeTitle}}</span>
			<i class="icon-home"></i>
		</a>
		<span>{{title}}</span>
		<a href="javascript:;" class="x-menu" @click="menu">
			<span v-show="showTitle">{{menuTitle}}</span>
			<i class="icon-menu-two"></i>
		</a>
	</div>
</template>

<script>
	export default {
		props:{
			home:{
				type:Function,
				required:false,
				default:new Function()
			},
			menu:{
				type:Function,
				required:false,
				default:new Function()
			},
			title:{
				type:String,
				required:false,
				default:'标题'
			},
			showTitle:{
				type:Boolean,
				default:false
			},
			homeTitle:{
				type:String,
				default:'首页'
			},
			menuTitle:{
				type:String,
				default:'菜单'
			}
		},
		computed:{
			title(){
				return this.$props.title
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../../styles/icon/icon.less';
	@import '../../styles/head/head.less';
</style>