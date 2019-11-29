<template>
	<view>
		<view class="header">
			发现
		</view>
		<view class="label">
			<view class="label-header">
				民宿标签
			</view>
			<view class="label-itembox">
				<view class="label-item" @tap="handelHouseList('../zs/HouseList')">
					田园风
				</view>
				<view class="label-item" @tap="handelHouseList('../zs/HouseList')">
					轻奢派
				</view>
				<view class="label-item" @tap="handelHouseList('../zs/HouseList')">
					文艺范
				</view>
				<view class="label-item" @tap="handelHouseList('../zs/HouseList')">
					温暖系
				</view>
			</view>
		</view>
		<view class="classify">
			<view class="label-header">
				民宿分类
			</view>
			<view class="classify-item" @tap="handelBanner('../zs/Banner')">
				<view class="classify-itemstart">
					且下江南
					<view class="classify-itemArrow">

					</view>
				</view>
				<view class="classify-itemp">
					<view class="p1">
						寻一处江南庭院
					</view>
					<view class="p2">
						听一夜雨打芭蕉
					</view>
				</view>
			</view>
			<view class="classify-item" @tap="handelBanner('../zs/Banner')">
				<image src="../../static/images/3.gif" mode="" style="position: absolute; width: 100%; height: 100%;"></image>
				<view class="classify-itemstart">
					帝都记忆
					<view class="classify-itemArrow">

					</view>
				</view>
				<view class="classify-itemp">
					<view class="p1">
						八百年帝都
					</view>
					<view class="p2">
						每一处都值得细细品咂
					</view>
				</view>
			</view>
			<view class="classify-item" @tap="handelBanner('../zs/Banner')">
				<image src="../../static/images/2.gif" mode="" style="position: absolute; width: 100%; height: 100%;"></image>
				<view class="classify-itemstart">
					西南忘返
					<view class="classify-itemArrow">
			
					</view>
				</view>
				<view class="classify-itemp">
					<view class="p1">
						京在心中东
					</view>
					<view class="p2">
						人子画中游
					</view>
				</view>
			</view>
			<view class="classify-item" @tap="handelBanner('../zs/Banner')">
				<image src="../../static/images/1.gif" mode="" style="position: absolute; width: 100%; height: 100%;"></image>
				<view class="classify-itemstart">
					北方印象
					<view class="classify-itemArrow">
					</view>
				</view>
				<view class="classify-itemp">
					<view class="p1">
						在苍茫处
					</view>
					<view class="p2">
						有你最温柔的守望
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				InputBottom: 0
			};
		},
		methods: {
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			handelHouseList(target){
				uni.navigateTo({
					url:target
				})
			},
			handelBanner(target){
				uni.navigateTo({
					url:target
				})
			}
		}
	}
</script>

<style>
	.header {
		height: 92upx;
		width: 750upx;
		border-bottom: 2upx solid #ededed;
		font-size: 37upx;
		color: #010101;
		line-height: 92upx;
		text-align: center;
		font-weight: 600;
	}

	.label-header {
		height: 96upx;
		font-size: 26upx;
		color: #939393;
		line-height: 96upx;
		margin-left: 34upx;

	}

	.label-item {
		height: 110upx;
		width: 158upx;
		background: #73a647;
		border-radius: 6upx;
		font-size: 26upx;
		text-align: center;
		line-height: 110upx;
		color: #fff;
		background: url(../../static/img/ty.jpg) no-repeat center center;
		background-size: 100% 100%;
	}

	.label-itembox {
		display: flex;
		justify-content: space-between;
		width: 692upx;
		margin: 0 auto;
	}

	.classify-item {
		width: 692upx;
		height: 278upx;
		margin: 0 auto;
		background: url(../../static/img/jn.jpg)no-repeat center center;
		background-size: 100% 100%;
		border-radius: 6upx;
		position: relative;
		margin-bottom: 20upx;
	}

	.classify-itemstart {
		width: 198upx;
		height: 65upx;
		background: rgba(255, 255, 255, 0.8);
		border-radius: 28upx;
		font-size: 26upx;
		color: #030408;
		line-height: 65upx;
		padding-left: 36upx;
		position: absolute;
		top: 22upx;
		left: 20upx;
		position: relative;
	}

	.classify-itemArrow {
		width: 0;
		height: 0;
		border-left: 12upx solid #86ba72;
		border-top: 12upx solid transparent;
		border-bottom: 12upx solid transparent;
		border-right: 12upx solid transparent;
		position: absolute;
		right: 20upx;
		bottom: 21upx;
	}

	.classify-itemp {
		font-size: 32upx;
		color: #fff;
		position: absolute;
		bottom: 28upx;
		right: 48upx;
	}
</style>
