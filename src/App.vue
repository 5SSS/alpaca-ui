<template>
    <div class="alpaca">
        <alert-example></alert-example>
        <button-example></button-example>
    </div>
</template>

<script>
import alertExample from './example/alert.vue';
import buttonExample from './example/button.vue';
export default {
    name: 'app',
    components: {
    	alertExample,
    	buttonExample
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

