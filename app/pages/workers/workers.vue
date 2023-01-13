<template>
	<view class="content">
		<view class="title">
			<view>工作主机({{workers.length}})</view>
			<view class="center" @click="initData()">刷新</view>
		</view>
		<view class="jobs">
			<view class="job" v-for="(item,index) in workers">
				<view class="bar1 bg_workers"></view>
				<view class="jobTitle">{{item[0]}}</view>
				<view class="jobContent">
					<view>GPU:</view>
					<view>{{item[4]}}</view>
				</view>
				<view class="line"></view>
				<view class="buttonGroup">
					<view class="center bg_workers">{{"core:"+item[1]}}</view>
					<view class="center bg_workers">{{"ram:"+item[2]}}</view>
					<view class="center bg_workers">{{"vram:"+item[3]}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import api from '@/api/api.js';
	export default {
		data() {
			return {
				workers:[
					[
					"Worker 0, host suency-X99",
					"5/56",
					"60%",
					"22%",
					"GeForce GTX 1080 Ti, not used"
				  ]
				]
			}
		},
		onLoad() {
			this.initData();
		},
		methods: {
			initData(){
				let that = this;
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: api.getUrl + 'star/getWorkers',
					success: (res) => {
						//console.log(res.data);
						that.workers = res.data;
						uni.hideLoading();
					}
				});
			}
		}
	
	}
</script>

<style>
	.bold{
		font-weight: bold;
	}
	.center{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.content {
		box-sizing: border-box;
		padding: 60rpx;
	}
	
	.title {
		font-size: 36rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.title>view:last-child{
		width: 154rpx;
		height: 54rpx;
		background: #A880E3;
		border-radius: 6rpx;
		color:#FFFFFF;
		font-size: 28rpx;
	}
	
	.baoinfo{
		width: 100%;
		background: #FFFFFF;
		box-shadow: 0rpx 4rpx 12rpx rgba(188, 188, 188, 0.5);
		border-radius: 10rpx;
		margin-top: 26rpx;
		box-sizing: border-box;
		padding: 36rpx;
		font-size: 28rpx;
		position: relative;
		/* height: 300rpx; */
	}
	
	.text{
		display: flex;
	}
	.text>view:first-child{
		font-weight: bold;
		margin-right: 10rpx;
	}
	
	.bottom{
		margin-top: 42rpx;
	}
	
	.bar{
		width: 10rpx;
		height: 300rpx;
		background-color: #A880E3;
		border-radius: 6rpx;
		position: absolute;
		left:-5rpx;
		top:50%;
		transform: translateY(-50%);
	}
	
	.job{
		width: 100%;
		height: 246rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 4rpx 12rpx rgba(188, 188, 188, 0.5);
		border-radius: 10rpx;
		margin-top: 26rpx;
		position: relative;
		box-sizing: border-box;
		padding: 30rpx;
	}
	
	.bar1{
		width: 10rpx;
		height: 150rpx;
		border-radius: 6rpx;
		position: absolute;
		left:-5rpx;
		top:50%;
		transform: translateY(-50%);
	}
	
	.bg_blue{
		background-color: #53D7FF;
	}
	.bg_green{
		background-color: #07E079;
	}
	.bg_pink{
		background-color: #FF8484;
	}
	.bg_purple{
		background-color: #A254F2;
	}
	.bg_workers{
		background-color: #AF7BFB;
	}
	
	.jobTitle{
		font-size: 40rpx;
	}
	.jobContent{
		font-size: 28rpx;
		display: flex;
	}
	
	.jobContent>view:first-child{
		font-weight: bold;
		margin-right: 10rpx;
	}
	.jobs .line{
		width: 100%;
		height: 1.5rpx;
		background-color: #EFEFEF;
		margin-top: 15rpx;
	}
	
	.buttonGroup{
		display: flex;
		font-size: 24rpx;
		color:#FFFFFF;
		justify-content: space-between;
		align-items: center;
	}
	
	.buttonGroup>view:nth-child(1){
		width: 138rpx;
		height: 51rpx;
		border-radius: 6rpx;
		margin-top: 30rpx;
	}
	
	.buttonGroup>view:nth-child(2){
		width: 188rpx;
		height: 51rpx;
		border-radius: 6rpx;
		margin-top: 30rpx;
	}
	
	.buttonGroup>view:nth-child(3){
		
		height: 51rpx;
		width: 138rpx;
		margin-top: 30rpx;
	}
</style>
