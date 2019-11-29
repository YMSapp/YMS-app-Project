<template>
	<view>
		<swiper class="swiper" indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff" :indicator-dots="true" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item>
				<view class="swiper-item uni-bg-red">
					<view class="Detail-header">
						<uni-view data-v-64d72ad5="" data-v-5215696f="" class="cu-bar bg-white border-bottom">
							<uni-view data-v-64d72ad5="" data-v-5215696f="" class="action ">
								<uni-text @tap="back" data-v-64d72ad5="" data-v-5215696f="" class="cuIcon-back text-gray"><span data-v-64d72ad5=""></span>
								</uni-text>
							</uni-view>
							<uni-view data-v-64d72ad5="" data-v-5215696f="" class="content text-bold">
							</uni-view>
						</uni-view>
					</view>

					<image src="../../static/img/02.jpg" mode=""></image>
					<view class="circularBorder">
						<view class="circular">
							<view class="circularwords">
								<view class="words-chinese">浙江</view>
								<view class="words-letter">ZHEJIANG</view>
							</view>
							<view class="circularp">
								<view class="circularp-symbol-left">
									“
								</view>
								寻一处江南庭院
							</view>
							<view class="circularp">
								用一夜雨打芭蕉
								<view class="circularp-symbol-right">
									”
								</view>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-green">
					<image src="../../static/img/ah.jpg" mode="">
						
					</image>
					<view class="circularBorder">
						<view class="circular">
							<view class="circularwords">
								<view class="words-chinese">浙江</view>
								<view class="words-letter">ZHEJIANG</view>
							</view>
							<view class="circularp">
								<view class="circularp-symbol-left">
									“
								</view>
								寻一处江南庭院
							</view>
							<view class="circularp">
								用一夜雨打芭蕉
								<view class="circularp-symbol-right">
									”
								</view>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">
					<image src="../../static/img/js.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">
					<image src="../../static/img/jx.jpg" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default{
			methods:{
				back(){
					uni.navigateBack({	
					})
				},
			}
		}

</script>

<style lang="scss">
	.swiper{
		width: 750upx;
		height:1334upx;
		position: relative;
	}
	 .swiper-item{
	width:100%;
	height:100%;
	}	
	.circularBorder{
		width: 536upx;
		height:536upx;
		border-radius: 50%;
		border: dashed #fff 1upx;
		position: absolute;
		bottom:410upx;
		left:110upx;
		.circular{
			width: 494upx;
			height:494upx;
			background: #fff;
			border-radius: 50%;
			margin:0 auto;
			margin-top:20upx;
			text-align: center;
		}
		.circularwords{
			display: flex;
			padding-top:118upx;
			margin-bottom: 40upx;
			.words-chinese{
				font-size:70upx;
				margin-left:76upx;
				color:#e96072;
				font-weight: 800;
			}
			.words-letter{
				font-size: 24upx;
				color:#d24573;
				margin:55upx 0 0 34upx;
			}
		}
	}
	.circularp{
		font-size:38upx;
		line-height: 56upx;
		color:#555a5d;
		position: relative;
	
		.circularp-symbol-left,{
			font-size:100upx;
			position: absolute;
			left:58upx;
		}
		.circularp-symbol-right{
			font-size:100upx;
			position: absolute;
			bottom:-55upx;
			right:58upx;
		}
	}
	.cu-bar{
			position: absolute;
			z-index: 10;
			background: rgba(0,0,0,0);
		}
</style>
