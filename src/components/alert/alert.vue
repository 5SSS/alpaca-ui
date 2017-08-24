<template>
	<transition name="fade">
		<div v-show="visible" class="x-alert">
			<div class="x-alert-wrap" :style="getWidth">
				<div class="x-message">
					<div>
						<p v-if="showHead" class="x-p1">{{title}}</p>
						<slot v-else name="header"></slot>
					</div>
					<div class="x-alert-content">
						<slot></slot>
					</div>
					<div v-if="showFoot">
						<div v-if="isCancelable" class="x-buttons">
							<a href="javascript:;" @click="cancelHandle(false)" class="x-bor">{{cancel}}</a>
							<a href="javascript:;" @click="cancelHandle(true)">{{confirm}}</a>
						</div>
						<div v-else>
							<a href="javascript:;" @click="hide">{{confirm}}</a>
						</div>
					</div>
					<slot v-else name="footer"></slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		props:{
			value:{
				type: Boolean,
                default: false
			},
			cancelable:{
				type:Boolean,
				default:false
			},
			width:{
				type:[String,Number],
				default:'60%'
			},
			title:{
				type:String,
				default:'提示',
				required:false
			},
			confirm:{
				type:String,
				default:'确定',
				required:false
			},
			cancel:{
				type:String,
				default:'取消',
				required:false
			}
		},
		data(){
			return {
				visible:this.value,
				showHead:true,
				showFoot:true
			}
		},
		methods:{
			hide(){
				this.$emit('input',false);
				this.$emit('confirm');
			},
			cancelHandle(bool){
				this.$emit('input',false);
				if(bool) this.$emit('confirm');
				else this.$emit('cancel');
			}
		},
		computed:{
			getWidth(){
				return {width: this.$props.width};
			},
			isCancelable(){
				return this.$props.cancelable;
			}
		},
		watch:{
			value(val){
				this.visible = val;
			}
		},
		mounted(){
			if(this.$slots.header !== undefined){
				this.showHead = false;
			}
			if(this.$slots.footer !== undefined){
				this.showFoot = false;
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../../styles/alert/alert.less';
</style>
