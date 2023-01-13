<template>
	<view>
		<web-view :webview-styles="webviewStyles" src="https://filestar.info/en/address/f0183133"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
