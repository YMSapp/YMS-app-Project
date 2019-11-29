<template>
	<view>
		<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper>
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
					url: '../../static/images/3.gif',
				},
				{
					id: 1,
					type: 'image',
					url: '../../static/images/1.gif',
				}, 
				{
					id: 2,
					type: 'image',
					url: '../../static/images/4.gif'
				}, 
				{
					id: 3,
					type: 'image',
					url: '../../static/images/2.gif'
				}, 
				{
					id: 4,
					type: 'image',
					url: '../../static/images/5.gif'
				},
				{
					id: 5,
					type: 'image',
					url: '../../static/images/1.gif'
				},
				{
					id: 6,
					type: 'image',
					url: '../../static/images/2.gif'
				}],
				dotStyle: false,
				towerStart: 0,
				direction: ''
			};
		},
		onLoad() {
			this.TowerSwiper('swiperList');
			// 初始化towerSwiper 传已有的数组名即可
		},
		methods: {
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// towerSwiper
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},
			
		}
	}
</script>

<style>

</style>
