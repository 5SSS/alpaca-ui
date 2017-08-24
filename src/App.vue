<template>
    <div class="alpaca">
        <alertExample></alertExample>
    </div>
</template>

<script>
import alertExample from './example/alert.vue';
export default {
    name: 'app',
    components: {
    	alertExample
    }
}
</script>
<style>
	@font-face {
	  	font-family: 'icomoon';
	  	src:  url('./assets/fonts/icomoon.eot?pdd2ut');
	  	src:  url('./assets/fonts/icomoon.eot?pdd2ut#iefix') format('embedded-opentype'),
		    url('./assets/fonts/icomoon.ttf?pdd2ut') format('truetype'),
		    url('./assets/fonts/icomoon.woff?pdd2ut') format('woff'),
		    url('./assets/fonts/icomoon.svg?pdd2ut#icomoon') format('svg');
	  	font-weight: normal;
	  	font-style: normal;
	}
	*{
		margin:0;
		padding: 0;
	}
	body{
		font-family: 'icomoon';
	}
</style>

