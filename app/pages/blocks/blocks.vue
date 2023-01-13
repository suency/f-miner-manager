<template>
	<view class="content">
		<view class="title">
			<view>区块信息({{sectors.length}})</view>
			<view class="center" @click="initData()">刷新</view>
		</view>
		<view class="tables">
			<view class="item" style="font-weight: bold;">
				<view>ID</view>
				<view>State</view>
				<view>Chain</view>
				<view>Active</view>
				<view>Expiration</view>
			</view>
			<view v-for="(item,index) in sectors">
				<view class="item" :class="{colorProving:item[1]!=='Proving'}">
					<view>{{item[0]}}</view>
					<view>{{item[1]}}</view>
					<view>{{item[2]}}</view>
					<view :class="{colorProving:item[3]!=='YES'}">{{item[3]}}</view>
					<view>{{item[6]?(item[6] + item[7] + item[8] + item[9]):"N/A"}}</view>
				</view>
				<view class="line"></view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import api from '@/api/api.js';
	export default {
		data() {
			return {
				sectors:[
					[
					    "0",
					    "Proving",
					    "YES",
					    "YES",
					    "1818153",
					    "(in",
					    "1",
					    "year",
					    "20",
					    "weeks)",
					    "CC",
					    ""
					  ],
					  [
					      "0",
					      "Committing",
					      "NO",
					      "NO",
					      "1818153",
					      "(in",
					      "1",
					      "year",
					      "20",
					      "weeks)",
					      "CC",
					      ""
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
					url: api.getUrl + 'star/getSectors',
					success: (res) => {
						//console.log(res.data);
						that.sectors = res.data.reverse();
						uni.hideLoading();
					}
				});
			}
		}
	}
</script>

<style>
	.colorProving{
		color:#A880E3 !important;
		font-weight: bold;
		text-decoration: underline;
	}
	
	.colorOthers{
		color:#ac0d0d;
	}
	
	.line{
		/* width: 100%;
		height: 1rpx;
		background-color: #EFEFEF;
		margin: 5rpx 0; */
	}
	.tables{
		padding-top: 20rpx;
	}
	
	.item{
		display: flex;
		width: 100%;
		box-sizing: border-box;
		font-size: 24rpx;
		color:green;
	}
	
	.item>view:nth-child(1){
		width: 100rpx;
	}
	
	.item>view:nth-child(2){
		width: 200rpx;
	}
	
	.item>view:nth-child(3){
		width: 100rpx;
	}
	
	.item>view:nth-child(4){
		width: 100rpx;
	}
	
	.item>view:nth-child(5){
		width: 250rpx;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	
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
	
	
</style>
