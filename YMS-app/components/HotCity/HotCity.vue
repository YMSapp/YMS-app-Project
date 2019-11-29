<template>
	<view>
		<view class="hot-cities">
			<text class="swiper-title">热门城市</text>
			<view class="vitem">
				<view class="city">
					<text class="text-active">北京</text>
					<text>北京</text>
					<text>北京</text>
					<text>北京</text>
					<text>北京</text>
				</view>
				<view class="city-swiper">
					<swiper class="card-swiper" duration="500" @change="cardSwiper">
						<swiper-item v-for="(item,index) in swiperList" :key="index" class="swiper-item-box" @tap="todetail">
								<view class="swiper-item">
									<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
									<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
								</view>
								<view class="swiper-text-price">
									<text>￥2015起</text>
								</view>
								<view class="cu-item flex justify-between swiper-intro">
									<view class="content">
										<text class="text-grey">姥姥家</text>
									</view>
									<view class="action">
										<view class="cu-tag bg-olive light">房山</view>
										<view class="cu-tag bg-blue light">田园风</view>
									</view>
								</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				},
				{
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, 
				{
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, 
				{
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, 
				{
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				},
				{
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				},
				{
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
				dotStyle: false,
				towerStart: 0,
				direction: ''
			}
		},
		methods: {
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			todetail(){
				uni.navigateTo({
					url:'../../pages/zs/Detail',
				})
			}
		}
	}
</script>

<style>
	@import "../../static/css/index.css";
	@import "../../static/css/swiper.css";
</style>
