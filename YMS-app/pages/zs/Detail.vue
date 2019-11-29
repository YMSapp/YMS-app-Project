<template>
	<view>
		<view class="Detail-header">
			<uni-view data-v-64d72ad5="" data-v-5215696f="" class="cu-bar bg-white border-bottom">
				<uni-view data-v-64d72ad5="" data-v-5215696f="" class="action ">
					<uni-text @tap="back" data-v-64d72ad5="" data-v-5215696f="" class="cuIcon-back text-gray"><span data-v-64d72ad5=""></span></uni-text>
				</uni-view>
				<uni-view data-v-64d72ad5="" data-v-5215696f="" class="content text-bold">花开庐悦</uni-view>
			</uni-view>
		</view>
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item>
				<view class="swiper-item uni-bg-red">
					<image src="../../static/img/02.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-green">
					<image src="../../static/img/ah.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">
					<image src="../../static/img/js.jpg" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="swiper-foot">
			<view class="words">
				浙江 桐庐
			</view>
			<view class="button">
				田园风
			</view>
		</view>
		<view class="Detail-pbox">
			<view class="Detail-pboxh">
				美泉湖畔的一阙清词
			</view>
			<view class="Detail-pboxp">
				桐庐作为浙江继莫干山之后的又一处精品民宿聚集地。
			</view>
		</view>
		
		<view class="Detail-price">
			<view class="price">房型房价</view>
			<view class="Detail-car">
				<swiper class="swiper"indicator-active-color="#fff" :indicator-dots="true" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item>
						<view class="swiper-item uni-bg-red">
							<image src="../../static/img/02.jpg" mode=""></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-green">
							<image src="../../static/img/ah.jpg" mode=""></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-blue">
							<image src="../../static/img/js.jpg" mode=""></image>
						</view>
					</swiper-item>
				</swiper>
				<view class="Detail-car-text">
					<view class="Detail-reserve">
						立即预定
					</view>
					<view class="Detail-car-textp">海景家庭房（日式）</view>
					<view class="Detail-car-textpirce">
						<view class="textpirce1">
							价格：<view class="num">
								$680
							</view>/平常
						</view>
						<view class="textpirce2">
							<view class="num">
								$680
							</view>/节日 <view class="num">
								$680
							</view>周末
						</view>
					</view>
					
				</view>
			</view>
		</view>
		<view class="cu-list menu">
			<view class="cu-item arrow" @tap="handelCheack('Ret/Check')">
				<view class="content" >
					入住须知
				</view>
			</view>
			<view class="cu-item arrow"  @tap="handelRet('Ret/Ret')">
				<view class="content">
					退订须知
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
			handelCheack(target){
				uni.navigateTo({
					url:target
				})
			},
			handelRet(target){
				uni.navigateTo({
					url:target
				})
			},
		}
	}
</script>

<style lang="scss">
	swiper-item image {
		width: 750upx;
		height: 440upx;
	}
	.swiper-foot{
		width:100%;
		height:94upx;
		margin:0 auto;
		display: flex;
		justify-content: space-between;
		background: #fff;
		padding-left:42upx;
		padding-right:30upx;
		.words{
			font-size:28upx;
			color: #070707;
			line-height: 94upx;
		}
		.button{
			width: 102upx;
			height:40upx;
			border: 1upx solid #39b599;
			font-size:#39b599;
			text-align: center;
			line-height: 40upx;
			margin-top:28upx;
			color:#39b599;
		}
		
	}
	.Detail-pbox{
		width: 750upx;
		height:354upx;
		background: #fff;
		margin-top:10upx;
		margin-bottom: 10upx;
	}
	.Detail-pboxp{
		width: 620upx;
		margin:0 auto;
	}
	.Detail-pboxh{
		width: 100%;
		text-align: center;
		line-height: 120upx;
		font-size:28upx;
		color: #010101;
		font-weight: 600;
	}
	.Detail-price{
		width: 750upx;
		padding-left:40upx;
		padding-right: 40upx;
		background: #fff;
		.price{
			height:100upx;
			font-size:30upx;
			color: #010101;
			font-weight: 600;
			line-height: 100upx;
		}
	}
	.Detail-car{
		width: 670upx;		
		border: 3upx solid #eeeeee;
		padding-bottom:20upx;
		image{
			width: 100%;
		}
		.Detail-car-text{
			padding-left:32upx;
			position: relative;
			.Detail-car-textp{
				font-size:24upx;
				color:#030303;
				font-weight: 600;
				margin-top:24upx;
			}
		}
		.textpirce1{
			display: flex;
			margin-bottom: 14upx;
			view{
				color:#ff6916;
				margin-left:22upx;
				
			}
		}
		.textpirce2{
			display: flex;
			margin-left:86upx;
			view{
				color:#ff6916;
				margin-left:22upx;
			}
		}
	}
	.Detail-car-textpirce{
		font-size:26upx;
		margin-top:44upx;
	
	}
	.Detail-reserve{
		position: absolute;
		width: 160upx;
		height:60upx;
		background: #ff6916;
		font-size:28upx;
		color:#fff;
		text-align: center;
		line-height: 60upx;
		border-radius: 6upx;
		bottom:34upx;
		right:30upx;
	}
	.cu-item{
		height:100upx;
		margin-left:44upx;
		margin-right:44upx;
	}
	.cu-list{
		width: 750upx;
		background: #fff;
		
	}
</style>
