<template>
	<view>
		<web-view :webview-styles="webviewStyles" src="https://m.filscout.com/zh/miner/f01390330"></web-view>
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
