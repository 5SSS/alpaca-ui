<template>
	<div class="x-slider" ref="wrap" :style="getBack">
		<span class="x-slider-bg" ref="bar" :style="getLine"></span>
		<span class="x-slider-bt" 
			@touchstart="start"
		 	@touchmove="move" 
		 	@touchend="end" 
		 	ref="button"
		 	:style="getButton"
		 	></span>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				button:null,
				bar:null,
				wrapLength:null,
				originPoint:null,
				currentPoint:null
			}
		},
		props:{
			min:{
				type:Number,
				default:0
			},
			max:{
				type:Number,
				default:100
			},
			buttonColor:String,
			lineColor:String,
			backColor:String,
			callback:{
				type:Function,
				required:true
			}
		},
		computed:{
			getBack(){
				let color = this.$props.backColor;
				return color ? {background:color} : '';
			},
			getLine(){
				let color = this.$props.lineColor;
				return color ? {background:color} : '';
			},
			getButton(){
				let color = this.$props.buttonColor;
				return color ? {background:color} : '';
			}
		},
		mounted(){
			this.wrapLength = this.$refs.wrap.offsetWidth;
			this.button = this.$refs.button;
			this.bar = this.$refs.bar;
		},
		methods:{
			start(e){
				//阻止屏幕移动
				document.getElementsByTagName('body')[0].setAttribute("ontouchmove","event.preventDefault()");
				this.button.className = "x-slider-bt x-slider-hv";
				this.currentPoint = e.touches[0].pageX;
				this.originPoint = this.button.offsetLeft;
			},
			move(e){
				let x = e.touches[0].pageX;
				let distance = this.originPoint + (x-this.currentPoint);
				if(distance >= -8 && distance <= this.wrapLength-8){
					this.button.style.left = distance + 'px';
					this.bar.style.width = distance + 'px';
 					this.$props.callback(Math.round( this.$props.min+(distance+8)/this.wrapLength *(this.$props.max-this.$props.min) )) ;
				}
			},
			end(e){
				//解除屏幕移动
				document.getElementsByTagName('body')[0].removeAttribute("ontouchmove");
 				this.button.className = "x-slider-bt";
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../../styles/slider/slider.less';
</style>