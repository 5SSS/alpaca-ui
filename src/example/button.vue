<template>
	<div>
		<h2>button组件</h2>
		<div class="button-group">
			<x-button type="default">default</x-button>
			<br>
			<x-button type="primary">primary</x-button>
			<br>
			<x-button type="success">success</x-button>
			<br>
			<x-button type="warning">warning</x-button>
			<br>
			<x-button type="error">error</x-button>
			<br>
			<x-button type="disabled">disabled</x-button>
			<br>
			<x-button type="default" width="50%">width="50%"</x-button>
			<br>
			<x-button type="default" width="70%">width="70%"</x-button>
			<br>
			<x-button type="default" width="90%">width="90%"</x-button>
			<br>
			<x-button :type="type" @click="toggle">toggle</x-button>
			<br>
			<x-button :type="loadingType" :loading="loading" @click="load">点击出现loading</x-button>
		</div>
	</div>
</template>

<script>
	import xButton from '../components/button/button.vue';
	export default {
		data(){
			return {
				type:'primary',
				loading:false,
				loadingType:'success'
			}
		},
		components:{
			xButton
		},
		methods:{
			toggle(){
				this.type = 'disabled';
			},
			load(){
				this.loadingType = 'disabled';
				this.loading = true;
			}
		}
	}
</script>

<style>
	.button-group{
		padding: 0 10px;
		box-sizing: border-box;
	}
</style>