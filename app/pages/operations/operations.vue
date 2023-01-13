<template>
	<view class="content">
		<view class="title">
			<view>操作</view>
			<view class="tasks">
				<view class="center ops" @click="postTask(1)">1个任务</view>
				<view class="center ops" @click="postTask(3)">3个任务</view>
				<view class="center ops" @click="postTask(5)">5个任务</view>
				<view class="center ops" @click="postTask(10)">10个任务</view>
				<view class="center ops" @click="postTask(15)">15个任务</view>
				<view class="center ops" @click="postTask(20)">20个任务</view>
			</view>
			
			<view style="margin-top: 60rpx;display: flex;">
				<view class="center ops" @click="getNode(1)">节点信息</view>
				<view class="center ops" @click="getNode(3)">2643</view>
				<view class="center ops" @click="getNode(2)">小老虎</view>
			</view>
			
		</view>
		
		<view class="title" style="margin-top: 60rpx;">
			<view>命令</view>
			<view class="cmdContent">{{cmd}}</view>
			<view class="switcher">
				 <view class="switch-item uni-list-cell uni-list-cell-pd">
				 	<view class="uni-list-cell-db">addpiece: {{allSwitchers.ap}}</view>
				 	<switch @change="switchChangeAP" color="#A880E3" style="transform:scale(0.8);"/>
				 </view>
				 <view class="switch-item uni-list-cell uni-list-cell-pd">
				 	<view class="uni-list-cell-db">unseal: {{allSwitchers.unseal}}</view>
				 	<switch @change="switchChangeUnseal" color="#A880E3" style="transform:scale(0.8);"/>
				 </view>
				 <view class="switch-item uni-list-cell uni-list-cell-pd">
				 	<view class="uni-list-cell-db">precommit1: {{allSwitchers.pc1}}</view>
				 	<switch @change="switchChangePC1" color="#A880E3" style="transform:scale(0.8);"/>
				 </view>
				 <view class="switch-item uni-list-cell uni-list-cell-pd">
				 	<view class="uni-list-cell-db">precommit2: {{allSwitchers.pc2}}</view>
				 	<switch @change="switchChangePC2" color="#A880E3" style="transform:scale(0.8);"/>
				 </view>
				 <view class="switch-item uni-list-cell uni-list-cell-pd">
				 	<view class="uni-list-cell-db">commit: {{allSwitchers.c2}}</view>
				 	<switch @change="switchChangeC2" color="#A880E3" style="transform:scale(0.8);"/>
				 </view>
				 <view class="switch-item uni-form-item uni-column">
					 <view>port:</view>
					 <input class="uni-input" value="3456" maxlength="5" placeholder="端口号" type="number" @input="portInput"/>
				 </view>
				 <view class="center cmd" @click="copy(cmd)">复制命令</view>
				 
				 <view class="line"></view>
				 
				 <view v-for="(item, index) in cmdList" :key="index">
					 <view class="cmdContent">{{item}}</view>
					 <view class="center cmd" @click="copy(item)">复制命令</view>
					 <view class="line"></view>
				 </view>
				 
			</view>
		</view>
		
	</view>
</template>

<script>
	import api from '@/api/api.js';
	import uniCopy from '@/js_sdk/xb-copy/uni-copy.js';
	export default {
		data() {
			return {
				allSwitchers:{
					pc1: false,
					pc2: false,
					c1: false,
					c2: false,
					ap: false,
					unseal:false,
					port: 3456
				},
				cmdList:[
					"lotus-miner info",
					"lotus-miner sealing jobs",
					"watch -n 1 lotus-miner sealing jobs",
					"lotus-miner sealing workers",
					"lotus-miner sectors list",
					"lotus-miner sectors pledge",
					"export LOTUS_WORKER_PATH=/mnt/dell/worker32-p1",
					"lotus net peers",
					"lotus-miner sectors status --log xxx",
					"lotus-miner sectors remove --really-do-it=true xxx",
					"lotus-miner storage list"
				]
				
			}
		},
		computed:{
			cmd: function(){
				return `screen lotus-worker run --listen 0.0.0.0:${this.allSwitchers.port} --addpiece=${this.allSwitchers.ap} --precommit1=${this.allSwitchers.pc1} --unseal=${this.allSwitchers.unseal} --precommit2=${this.allSwitchers.pc2} --commit=${this.allSwitchers.c2}`;
			}
		},
		mounted(){
			var that = this;
			uni.showLoading({
				title:"loading"
			});
			
			uni.request({
				url: api.getUrl + 'star/get_onlineip',
				success: (res) => {
					//console.log(res.data);
					that.cmdList.unshift(res.data.ip);
					console.log(res);
					uni.hideLoading();
				}
			});
		},
		methods: {
			copy(e){
				uniCopy({
					content:e,
					success:(res)=>{
						uni.showToast({
							title: res,
							icon: 'none'
						})
					},
					error:(e)=>{
						uni.showToast({
							title: e,
							icon: 'none',
							duration:3000,
						})
					}
				})
			},
			portInput(e){
				this.allSwitchers.port = e.target.value;
			},
			switchChangeAP(e){
				this.allSwitchers.ap = e.target.value;
			},
			switchChangeUnseal(e){
				this.allSwitchers.unseal = e.target.value;
			},
			switchChangePC1(e){
				this.allSwitchers.pc1 = e.target.value;
			},
			switchChangePC2(e){
				this.allSwitchers.pc2 = e.target.value;
			},
			switchChangeC2(e){
				this.allSwitchers.c2 = e.target.value;
			},
			postTask(n){
				uni.showModal({
				    title: '提示',
				    content: `下达${n}任务`,
				    success: function (res) {
				        if (res.confirm) {
				            uni.request({
				            	url: api.getUrl + 'star/pledge',
								data:{n:n},
				            	success: (res) => {
									// console.log(res,'22222222');
									if(res.data.status){
										uni.showToast({
										    title: '成功',
										    duration: 2000
										});
									}else{
										uni.showToast({
										    title: '失败',
										    duration: 2000
										});
									}
				            	}
				            });
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			getNode(e){
				if(e == 1){
					uni.navigateTo({
						url:"../node/node"
					})
				}else if(e == 2){
					uni.navigateTo({
						url:"../tiger/tiger"
					})
				}else{
					uni.navigateTo({
						url:"../2643/2643"
					})
				}
				
			}
		}
	}
</script>

<style>
	.line{
		width: 100%;
		height: 1rpx;
		background-color: #A880E3;
		margin: 40rpx 0;
	}
	
	.switch-item{
		display: flex;
		font-size: 28rpx;
		margin-top: 10rpx;
		align-items: center;
	}
	
	.uni-input{
		margin-left: 20rpx;
		padding: 8rpx;
		border-radius: 8rpx;
		border: #A880E3 solid 2rpx;
		font-size: 22rpx;
	}
	.uni-list-cell-db{
		margin-right: 20rpx;
	}
	.cmdContent{
		background-color: #0e2233;
		border-radius: 8rpx;
		width: 100%;
		box-sizing: border-box;
		padding: 20rpx;
		color: white;
		font-size: 20rpx;
		margin-top: 20rpx;
	}
	.tasks{
		display: flex;
		flex-wrap: wrap;
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
	}
	
	.title .ops{
		width: 180rpx;
		height: 54rpx;
		background: #A880E3;
		border-radius: 6rpx;
		color:#FFFFFF;
		font-size: 28rpx;
		margin-top: 20rpx;
		margin-right: 28rpx;
	}
	
	.title .cmd{
		width: 150rpx;
		height: 45rpx;
		background: #A880E3;
		border-radius: 6rpx;
		color:#FFFFFF;
		font-size: 22rpx;
		margin-top: 20rpx;
		margin-right: 28rpx;
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
	

</style>
