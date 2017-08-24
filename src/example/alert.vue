<template>
	<div class="example-alert">
		<h2>alert组件</h2>
		<div class="cell">
			<x-button type="primary" @click="show = true">普通</x-button>
		</div>
		<div class="cell">
			<x-button type="primary" @click="spic = true">带取消按钮</x-button>
		</div>
		<div class="cell">
			<x-button type="primary" @click="title = true">自定义标题</x-button>
		</div>
		<div class="cell">
			<x-button type="primary" @click="btn = true">自定义取消、确定按钮</x-button>
		</div>
		<div class="cell">
			<x-button type="primary" @click="myalert = true">自定义header,footer</x-button>
		</div>
		
		<!--普通-->
		<x-alert v-model="show"  @confirm="confirm">
			<div>
				Hello World
			</div>
		</x-alert>
		<!--带取消按钮-->
		<x-alert v-model="spic"  @confirm="confirm" @cancel="cancel" cancelable>
			<div>
				喜欢吗？
			</div>
		</x-alert>
		<!--自定义标题-->
		<x-alert v-model="title" title="你好" @confirm="confirm">
			<div>
				Hello World
			</div>
		</x-alert>
		<!--自定义取消、确定按钮-->
		<x-alert v-model="btn" confirm="喜欢" cancel="算了" @confirm="confirm" cancelable>
			<div>
				喜欢吗？
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
				myalert:false,
				title:false,
				btn:false
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
	h2{
		text-align: center;
	}
	.mytitle{
		padding: 10px 0;
		font-weight: bold;
		text-align: center;
	}
	.myfoot{
		padding: 10px 0;
		text-align: center;
	}
	.cell{
		margin: 5px 0;
		padding: 0 10px;
		box-sizing: border-box;
	}
</style>