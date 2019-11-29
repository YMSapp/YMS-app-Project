<template>
	<view>
		<view class="hot-cities">
			<text class="swiper-title">热门城市</text>
			<view class="vitem">
				<view class="city">
					<text :class="city=='bj'?'text-active':'text-black'" @tap="city='bj'">北京</text>
					<text :class="city=='mgs'?'text-active':'text-black'" @tap="city='mgs'">莫干山</text>
					<text :class="city=='xm'?'text-active':'text-black'" @tap="city='xm'">厦门</text>
					<text :class="city=='qd'?'text-active':'text-black'" @tap="city='qd'">青岛</text>
					<text :class="city=='dl'?'text-active':'text-black'" @tap="city='dl'">大理</text>
				</view>
				<view class="city-swiper">
					<swiper class="card-swiper" duration="500" @change="cardSwiper">
						<swiper-item v-for="(item,index) in swiperList" :key="index" class="swiper-item-box" @tap="todetail">
								<view class="swiper-item">
									<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
									<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
								</view>
								<view class="swiper-text-price">
									<text>￥{{item.price}}起</text>
								</view>
								<view class="cu-item flex justify-between swiper-intro">
									<view class="content">
										<text class="text-grey">{{item.name}}</text>
									</view>
									<view class="action">
										<view class="cu-tag bg-olive light">{{item.style1}}</view>
										<view class="cu-tag bg-blue light">{{item.style2}}</view>
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
				city: 'bj',
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: '../../static/images/1.gif',
					price: 2680,
					name: '姥姥家',
					style1: '房山',
					style2: '田园风',
				},
				{
					id: 1,
					type: 'image',
					url: '../../static/images/2.gif',
					price: 1500,
					name: '后院驿站',
					style1: '昌平',
					style2: '轻奢派',
				}, 
				{
					id: 2,
					type: 'image',
					url: '../../static/images/3.gif',
					price: 500,
					name: '后院驿站',
					style1: '密云',
					style2: '田园风',
				}, 
				{
					id: 3,
					type: 'image',
					url: '../../static/images/4.gif',
					price: 1450,
					name: '后院驿站',
					style1: '怀柔',
					style2: '田园风',
				}, 
				{
					id: 4,
					type: 'image',
					url: '../../static/images/5.gif',
					price: 1112,
					name: '后院驿站',
					style1: '轻奢派',
					style2: '田园风',
				},
				{
					id: 5,
					type: 'image',
					url: '../../static/images/1.gif',
					price: 150,
					name: '后院驿站',
					style1: '轻奢派',
					style2: '田园风',
				},
				{
					id: 6,
					type: 'image',
					url: '../../static/images/2.gif',
					price: 450,
					name: '后院驿站',
					style1: '轻奢派',
					style2: '田园风',
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
