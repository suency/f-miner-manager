<template>
	<view class="content">
		<view class="center refresh" @click="initData()">刷新</view>
		<view class="title">
			<view>基本信息</view>
			<view class="center" @click="initData()" style="visibility: hidden;">刷新</view>
		</view>
		<view class="baoinfo">
			<view class="bar">

			</view>
			<view class="top">
				<view class="text">
					<view>账户:</view>
					<view>{{minerInfo.miner}}</view>
				</view>
				
				<view class="text">
					<view>账户余额:</view>
					<view>{{minerInfo.balanceStr}}</view>
				</view>
				
				<view class="text">
					<view>可用余额:</view>
					<view>{{minerInfo.availableStr}}</view>
				</view>
				
				<view class="text">
					<view>扇区抵押:</view>
					<view>{{minerInfo.sectorsPledgeStr}}</view>
				</view>
				
				<view class="text">
					<view>提供存储服务锁仓:</view>
					<view>{{minerInfo.lockedFundsStr}}</view>
				</view>
				<view><text>\n</text></view>
				
				<view class="text">
					<view>有效算力:</view>
					<view>{{minerInfo.qualityPowerStr}}</view>
				</view>
				<view class="text">
					<view>原值算力:</view>
					<view>{{minerInfo.rawPowerStr}}</view>
				</view>
				
				<view class="text">
					<view>累计出块奖励:</view>
					<view>{{minerInfo.blockRewardStr}}</view>
				</view>
				<view class="text">
					<view>累计出块份数:</view>
					<view>{{minerInfo.blocks}}</view>
				</view>
				<view class="text">
					<view>排名:</view>
					<view>{{minerInfo.powerRank}}</view>
				</view>
				
				<view class="text">
					<view>占比:</view>
					<view>{{minerInfo.qualityPowerPercentStr}}</view>
				</view>
				
				<view><text>\n</text></view>
				
				<view class="text">
					<view>全部扇区:</view>
					<view>{{minerInfo.sectorCount}}</view>
				</view>
				<view class="text">
					<view>有效扇区:</view>
					<view>{{minerInfo.activeCount}}</view>
				</view>
				<view class="text">
					<view>错误扇区:</view>
					<view>{{minerInfo.faultCount}}</view>
				</view>
				<view class="text">
					<view>恢复扇区:</view>
					<view>{{minerInfo.recoveryCount}}</view>
				</view>

			</view>
			
			
			<!-- <view class="bottom">
				<view class="text" v-for="(item,index) in allData.sectors">
					<view style="font-weight: normal;">{{item}}</view>
				</view>
			</view> -->
		</view>
		
		<view style="margin-top: 40rpx;display: flex;">
			<view class="ops" @click="getNode()">区块链浏览器</view>
		</view>
		
		<view class="title" style="margin-top: 60rpx;" v-if="!hideJobs">
			<view>主机任务({{jobs.length}})</view>
			<view style="visibility: hidden;">主机任务</view>
		</view>
		<view class="jobList" v-if="!hideJobs">
			<view class="jobTopBar">
				<view>Sector</view>
				<view>Hostname</view>
				<view>Task</view>
				<view>Status</view>
				<view>Time</view>
			</view>
			<view class="jobTopBar" v-for="(item1,index1) in jobs">
				<view>{{item1[1]}}</view>
				<view>{{item1[3]}}</view>
				<view>{{item1[4]}}</view>
				<view>{{item1[5]}}</view>
				<view>{{item1[6]}}</view>
			</view>
		</view>

		<!-- <view class="title" style="margin-top: 60rpx;">
			<view>x99-爆块列表({{baoData.totalCount}})</view>
			<view style="visibility: hidden;">主机任务</view>
		</view>

		<view class="baoList" v-if="index < num" v-for="(item, index) in baoData.blocks">
			<view class="baoItem">
				<view>时间:</view>
				<view>{{item.timestamp | getTime}}</view>
			</view>
			<view class="baoItem">
				<view>奖励:</view>
				<view>{{(item.reward / 10**18).toFixed(2) + ' STAR'}}</view>
			</view>
		</view>

		<view class="more" @click="displayMore">{{num == 5? "显示更多" : "收起"}}>></view>

		<view class="title" style="margin-top: 60rpx;">
			<view>2643-爆块列表({{baoData2643.totalCount}})</view>
			<view style="visibility: hidden;">主机任务</view>
		</view>
		<view class="baoList" v-if="index < num" v-for="(item, index) in baoData2643.blocks">
			<view class="baoItem">
				<view>时间:</view>
				<view>{{item.timestamp | getTime}}</view>
			</view>
			<view class="baoItem">
				<view>奖励:</view>
				<view>{{(item.reward / 10**18).toFixed(2) + ' STAR'}}</view>
			</view>
		</view>

		<view class="more" @click="displayMore">{{num == 5? "显示更多" : "收起"}}>></view>


 -->
		<!-- 		<view class="jobs">
			<view class="job" v-for="(item1,index1) in jobs">
				<view class="bar1" :class="{bg_blue:item1[4] == 'PC1',bg_green:item1[4] == 'PC2',bg_pink:item1[4] == 'C1',bg_purple:item1[4] == 'C2',bg_getting:item1[4] == 'GET', bg_ap:item1[4] == 'AP'}"></view>
				<view class="jobTitle">{{item1[3]}}</view>
				<view class="jobContent">
					<view>id:</view>
					<view>{{item1[0]}}</view>
				</view>
				<view class="jobContent">
					<view>Sector:</view>
					<view>{{item1[1]}}</view>
				</view>
				<view class="jobContent">
					<view>Worker:</view>
					<view>{{item1[2]}}</view>
				</view>
				<view class="line"></view>
				<view class="buttonGroup">
					<view class="center" :class="{bg_blue:item1[4] == 'PC1',bg_green:item1[4] == 'PC2',bg_pink:item1[4] == 'C1',bg_purple:item1[4] == 'C2',bg_getting:item1[4] == 'GET', bg_ap:item1[4] == 'AP'}">{{item1[4]}}</view>
					<view class="center" :class="{bg_blue:item1[4] == 'PC1',bg_green:item1[4] == 'PC2',bg_pink:item1[4] == 'C1',bg_purple:item1[4] == 'C2',bg_getting:item1[4] == 'GET', bg_ap:item1[4] == 'AP'}">{{item1[5]}}</view>
					<view class="center">{{item1[6]}}</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	import api from '@/api/api.js';
	import moment from 'moment';
	export default {
		data() {
			return {
				hideJobs: true,
				baoData: {},
				baoData2643: {},
				num: 5,
				minerInfo: {
					"miner": "f01390330",
					"address": "f01390330",
					"idAddress": "f01390330",
					"robustAddress": "f2t4v47mhfoyxz7co2m5vlkynwudyew2x72dp63xq",
					"actorType": "Storage Miner",
					"balance": 2.27683649592216e+21,
					"balanceStr": "2,276.8364 FIL",
					"qualityPower": 410027492048896,
					"qualityPowerStr": "372.92 TiB",
					"qualityPowerPercent": 0.000018960503985122578,
					"qualityPowerPercentStr": "0.00%",
					"rawPower": 163895952015360,
					"rawPowerStr": "149.06 TiB",
					"peerId": "12D3KooWCpq7rCmr263h22jz4CTHxnfxhp6qFuzRtBqLdCWFCDzw",
					"owner": "f3rqpszb3c6k3t7zanml75pwzgzayfxsjciessg2l44f7nxvceqhiexixqj3ehs2luubyazfohwggxshulodsq",
					"worker": "f3rqpszb3c6k3t7zanml75pwzgzayfxsjciessg2l44f7nxvceqhiexixqj3ehs2luubyazfohwggxshulodsq",
					"available": 6756191441753646000,
					"availableStr": "6.7561 FIL",
					"sectorsPledge": 2.0710319411108855e+21,
					"sectorsPledgeStr": "2,071.0319 FIL",
					"lockedFunds": 199048363369520960000,
					"lockedFundsStr": "199.0483 FIL",
					"feeDebtStr": "",
					"ip": "",
					"location": "",
					"sectorSize": 34359738368,
					"sectorSizeStr": "32GiB",
					"sectorCount": 4770,
					"activeCount": 4770,
					"faultCount": 0,
					"recoveryCount": 0,
					"tag": "",
					"isVerified": 0,
					"msgCount": 12722,
					"blocks": 62,
					"winCount": 62,
					"blockReward": 1290.279138889005,
					"blockRewardStr": "1,290.2791 FIL",
					"powerRank": 3118,
					"createTime": "2021-10-22 20:36:00"
				},
				allData: {
					"miner": "f03001",
					"power": "4.656 TiB / 81.44 PiB (0.0055%)",
					"win": "0.7920/day (every 30h18m10s)",
					"minerBalance": "52.899986461063991974 STAR",
					"vesting": "51.502291886963462102 STAR",
					"available": "1.397694574100529872 STAR",
					"workerBalance": "1.091296395610211843 STAR",
					"total": "639",
					"proving": "618",
					"sectors": [
						"Total: 639",
						"Proving: 618",
						"PreCommit1:4",
						"PreCommit2:4",
						"WaitSeed:1",
						"Committing:6",
						"Removed:6"
					]
				},
				jobs: [
					[
						"14",
						"635",
						"0",
						"suency-X99",
						"PC1",
						"running",
						"1h32m13.6s",
						""
					]
				]

			}
		},
		filters: {
			getTime(unixTime, timeZone) {
				if (typeof(timeZone) == 'number') {
					unixTime = parseInt(unixTime) + parseInt(timeZone) * 60 * 60;
				}
				var now = new Date(unixTime * 1000);
				var year = now.getFullYear();
				var month = now.getMonth() + 1;
				var date = now.getDate();
				var hour = now.getHours();
				var minute = now.getMinutes();
				// return moment(new Date(unixTime* 1000)).fromNow();
				return year + "-" + month.toString().padStart(2, 0) + "-" + date.toString().padStart(2, 0) + "   " + hour
					.toString().padStart(2, 0) + ":" +
					minute.toString().padStart(2, 0) + ' | ' + moment(new Date(unixTime * 1000)).fromNow();
			},
			fixNumbers(a, n) {
				//return a.replace("STAR",'');
				//return parseFloat(a.replace(' STAR','')).toFixed(2);
			}
		},
		onLoad() {
			//console.log(moment().format('YYYY-MM-DD'));
			//console.log(1);
			this.initData();
		},
		methods: {
			getNode(){
				uni.navigateTo({
					url:"../tiger/tiger"
				})
			},
			displayMore() {
				if (this.num == 5) {
					this.num = this.baoData.blocks.length;
				} else {
					this.num = 5;
				}
			},
			initData() {
				let that = this;
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: 'https://api2.filscout.com/api/v2/miner/f01390330',
					method: 'POST',
					success: (res) => {
						console.log(res.data);
						that.minerInfo = res.data.data;
						uni.hideLoading();
					}
				});
				/* uni.request({
					url: api.getUrl + 'star/blockWin',
					success: (res) => {
						//console.log(res.data);
						that.allData = res.data;
						uni.hideLoading();
					}
				}); */

				//隐藏jobs列表
				/* uni.request({
					url: api.getUrl + 'star/getJobs',
					success: (res) => {
						console.log(res.data);
						that.jobs = res.data;
						uni.hideLoading();
					}
				}); */

				/* uni.request({
					url: api.getUrl + 'star/bao',
					success: (res) => {
						//console.log(res.data);
						that.baoData = res.data;
					}
				}); */

				/* uni.request({
					url: api.getUrl + 'star/bao2643',
					success: (res) => {
						//console.log(res.data);
						that.baoData2643 = res.data;
					}
				}); */
			}
		}
	}
</script>

<style>
	.ops{
		width: 200rpx;
		height: 54rpx;
		background: #A880E3;
		border-radius: 6rpx;
		color:#FFFFFF;
		font-size: 28rpx;
		margin-right: 28rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.jobList {
		font-size: 24rpx;
	}

	.jobTopBar {
		display: flex;
	}

	.jobTopBar view:nth-child(1) {
		width: 100rpx;
	}

	.jobTopBar view:nth-child(2) {
		width: 200rpx;
	}

	.jobTopBar view:nth-child(3) {
		width: 100rpx;
	}

	.jobTopBar view:nth-child(4) {
		width: 150rpx;
	}

	.jobTopBar view:nth-child(5) {
		width: 180rpx;
	}

	.more {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
		padding: 30rpx;
	}

	.refresh {
		position: fixed;
		z-index: 10;
		top: 40%;
		right: 5%;
		background-color: #A880E3;
		color: white;
		font-size: 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		width: 80rpx;
		height: 80rpx;
		padding: 20rpx;
		box-shadow: 0px 25rpx 20rpx -25rpx #000;
	}

	.baoItem>view:first-child {
		margin-right: 20rpx;
	}

	.baoList {
		padding: 15rpx 0;
		border-bottom: 3rpx solid #A880E3;
	}

	.baoItem {
		display: flex;
		align-items: center;
		font-size: 28rpx;
	}

	.bold {
		font-weight: bold;
	}

	.center {
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

	.title>view:last-child {
		width: 154rpx;
		height: 54rpx;
		background: #A880E3;
		border-radius: 6rpx;
		color: #FFFFFF;
		font-size: 28rpx;
	}

	.baoinfo {
		width: 100%;
		background: #FFFFFF;
		box-shadow: 0rpx 4rpx 12rpx rgba(188, 188, 188, 0.5);
		border-radius: 10rpx;
		
		box-sizing: border-box;
		padding: 36rpx;
		font-size: 28rpx;
		position: relative;
	}

	.text {
		display: flex;
	}

	.text>view:first-child {
		font-weight: bold;
		margin-right: 10rpx;
	}

	.bottom {
		margin-top: 42rpx;
	}

	.bar {
		width: 10rpx;
		height: 300rpx;
		background-color: #A880E3;
		border-radius: 6rpx;
		position: absolute;
		left: -5rpx;
		top: 50%;
		transform: translateY(-50%);
	}

	.job {
		width: 100%;
		height: 326rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 4rpx 12rpx rgba(188, 188, 188, 0.5);
		border-radius: 10rpx;
		margin-top: 26rpx;
		position: relative;
		box-sizing: border-box;
		padding: 30rpx;
	}

	.bar1 {
		width: 10rpx;
		height: 200rpx;
		border-radius: 6rpx;
		position: absolute;
		left: -5rpx;
		top: 50%;
		transform: translateY(-50%);
	}

	.bg_blue {
		background-color: #53D7FF;
	}

	.bg_green {
		background-color: #07E079;
	}

	.bg_pink {
		background-color: #FF8484;
	}

	.bg_purple {
		background-color: #A254F2;
	}

	.bg_getting {
		background-color: #5A324B;
	}

	.bg_ap {
		background-color: #008000;
	}

	.jobTitle {
		font-size: 40rpx;
	}

	.jobContent {
		font-size: 28rpx;
		display: flex;
	}

	.jobContent>view:first-child {
		font-weight: bold;
		margin-right: 10rpx;
	}

	.jobs .line {
		width: 100%;
		height: 1.5rpx;
		background-color: #EFEFEF;
		margin-top: 15rpx;
	}

	.buttonGroup {
		display: flex;
		font-size: 24rpx;
		color: #FFFFFF;
		justify-content: space-between;
		align-items: center;
	}

	.buttonGroup>view:nth-child(1) {
		width: 138rpx;
		height: 51rpx;
		border-radius: 6rpx;
		margin-top: 30rpx;
	}

	.buttonGroup>view:nth-child(2) {
		width: 188rpx;
		height: 51rpx;
		border-radius: 6rpx;
		margin-top: 30rpx;
	}

	.buttonGroup>view:nth-child(3) {
		color: #000000;
		height: 51rpx;
		width: 138rpx;
		margin-top: 30rpx;
	}
</style>
