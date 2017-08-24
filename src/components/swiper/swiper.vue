<template>
	<div class="swiper-container">
	    <div class="swiper-wrapper">
	        <div v-for="item in data" class="swiper-slide">
				<a :href="item.url">
					<img :src="item.image" alt="">
				</a>
	        </div>
	    </div>
	    <!-- 如果需要分页器 -->
	    <div v-if="needPagination" class="swiper-pagination"></div>
	    
	    <!-- 如果需要导航按钮 -->
	    <div v-if="needButton" class="swiper-button-prev"></div>
	    <div v-if="needButton" class="swiper-button-next"></div>
	    
	</div>
</template>

<script>
	import swiper from '../../../static/js/swiper.js';
	export default {
		props:{
			direction:{
				type:String,
				required:false,
				default:'horizontal'
			},
			pagination:{
				type:Boolean,
				required:false,
				default:true
			},
			button:{
				type:Boolean,
				required:false,
				default:true
			},
			loop:{
				type:Boolean,
				required:false,
				default:true
			},
			data:{
				type:Array,
				required:true
			},
			autoplay:{
				type:Number,
				required:false,
				default:0
			},
			effect:{
				type:String,
				required:false,
				default:'slide'
			},
			swiper:{
				type:Function,
				required:false
			}
		},
		mounted(){
			let props = this.$props;
			let options = {
				direction: props.direction,
				loop:props.loop,
				pagination:props.pagination?'.swiper-pagination':'',
				nextButton:props.button?'.swiper-button-next':'',
				prevButton:props.button?'.swiper-button-prev':'',
				autoplay:props.autoplay,
				effect:props.effect
			}
			let mySwiper = new Swiper ('.swiper-container', options);

			//将swiper对象返回，这样就可以使用swiper所有api
			this.$props.swiper(mySwiper);  
		},
		computed:{
			needPagination(){
				return this.$props.pagination;
			},
			needButton(){
				return this.$props.button;
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../../styles/swiper/swiper.css';
	.swiper-container{
		width: 100%;
		height: 100%;
	}
	.swiper-slide{
		a{
			width: 100%;
			img{
				display: block;
				width: 100%;
			}
		}
	}
</style>