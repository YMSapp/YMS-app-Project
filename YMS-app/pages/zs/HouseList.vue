<template>
	<view>
		<uni-view data-v-64d72ad5="" data-v-5215696f="" class="cu-bar bg-white border-bottom">
			<uni-view data-v-64d72ad5="" data-v-5215696f="" class="action ">
				<uni-text @tap="back" data-v-64d72ad5="" data-v-5215696f="" class="cuIcon-back text-gray"><span data-v-64d72ad5=""></span></uni-text>
			</uni-view>
			<uni-view data-v-64d72ad5="" data-v-5215696f="" class="content text-bold">房源列表</uni-view>
		</uni-view>
		<view class="HouseList-nav">
			<view class="nav">
				综合排序
				<view class="line"></view>
				<view class="Trl"></view>
			</view>
			<view class="nav">
				标签
				<view class="Trl"></view>
			</view>
		</view>
		<view class="HouseList-item" @tap="handelDetail('Detail')">
			<view class="itembox">
				<view class="money">
					￥420起
				</view>
			</view>
			<view class="itempbox">
				<view class="words">
					花开庐悦
				</view>
				<view class="button1">
					桐庐
				</view>
				<view class="button2">
					田园风
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default{
		methods:{
			back(){
				uni.navigateBack({	
				})
			},
			handelDetail(target){
				uni.navigateTo({
					url:target
				})
			},
		}
	}
	
</script>

<style lang="scss">
	// page{
	// 	background: #fff;
	// }
	.border-bottom{
		border-bottom: 2upx solid #ededed;
	}
	.HouseList-nav{
		display: flex;
		width: 750upx;
		background: #fff;
	}
	.nav{
		width:50%;
		height:100upx;
		text-align: center;
		line-height: 100upx;
		position: relative;
	}
	.line{
		width: 2upx;
		height:60upx;
		position: absolute;
		right:0upx;
		top:18upx;
		background: #efefef;
	}
	.Trl{
		width: 0;
		height:0;
		border-top: 9upx solid #7cbc80;
		border-bottom: 9upx solid transparent;
		border-left: 9upx solid transparent;
		border-right: 9upx solid transparent;
		position: absolute;
		top:42upx;
		right:99upx;
	}
	.itembox{
		width: 750upx;
		height:430upx;
		background: url(../../static/img/ly.jpg)no-repeat no-repeat center center;
		background-size:100% 100%;
		position: relative;
	}
	.money{
		width: 240upx;
		height:80upx;
		background: rgba(0,0,0,0.5);
		font-size:24upx;
		text-align: center;
		color:#fff;
		line-height: 80upx;
		position: absolute;
		bottom:30upx;
		left:0;
	}
	.itempbox{
		display: flex;
		width: 750upx;
		height:110upx;
		padding-top:34upx;
		background: #fff;
		.words{
			font-size:30upx;
			color:#010101;
			font-weight: 600;
			margin-left:33upx;
		}
		.button1{
			width: 116upx;
			height:40upx;
			color:#6abe66;
			font-size:24upx;
			border: 2upx solid #70bb69;
			text-align: center;
			line-height: 40upx;
			margin-left:310upx;
		}
		.button2{
			width: 116upx;
			height:40upx;
			color:#14c4b9;
			font-size:24upx;
			border: 2upx solid #14c4b9;
			text-align: center;
			line-height: 40upx;
			margin-left:16upx;
		}
	}
</style>
