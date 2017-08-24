<template>
	<div class="example-alert">
		<p>alert组件</p>
		<x-button type="primary" @click="show = true">普通</x-button>
		<x-button type="primary" @click="spic = true">带取消按钮</x-button>
		<x-button type="primary" @click="myalert = true">自定义header,footer</x-button>
		<!--普通-->
		<x-alert v-model="show"  @confirm="confirm">
			<div>
				Hello World
			</div>
		</x-alert>
		<!--带取消按钮-->
		<x-alert v-model="spic" cancelable @confirm="confirm" @cancel="cancel">
			<div>
				确定吗？
			</div>
		</x-alert>
		<!--自定义header,footer-->
		<x-alert v-model="myalert"  @confirm="confirm">
			<p slot="header" class="mytitle">自定义header</p>
			<div>
				Hello World
			</div>
			<div slot="footer" class="myfoot">
				<x-button type="success" style="width:80%" @click="myalert = false">自定义footer</x-button>
			</div>
		</x-alert>
	</div>
</template>
<script>
	import xAlert from '../components/alert/alert.vue';
	import xButton from '../components/button/button.vue';
	export default {
		data(){
			return {
				show:false,
				spic:false,
				myalert:false
			}
		},
		components:{
			xAlert,
			xButton
		},
		methods:{
			confirm(){
				console.log('确定')
			},
			cancel(){
				console.log('取消')
			}
		}
	}
</script>
<style>
	.example-alert{
		text-align: center;
	}
	.mytitle{
		padding: 10px 0;
		font-weight: bold;
	}
	.myfoot{
		padding: 10px 0;
	}
</style>