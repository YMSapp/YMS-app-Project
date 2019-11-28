<template>
	<view class="main">
		<!--顶部banner图 -->
		<TopBanner></TopBanner>
		
		<!-- 查询输入框 -->
		<Search></Search>
		<!-- <view class="search-box">
			<form>
				<view class="search1 flex">
					<view class="address flex align-center">
						<text class="cuIcon-location"></text>
						<text class="nor-font">重庆</text>
					</view>
					<view class="flex align-center">
						<text class="price">价格：</text>
						<view class="price-origion flex align-center justify-between">
							<view class="" @tap="dec">-</view>
							<text>{{price}}</text>
							<view class="" @tap="add">+</view>
						</view>
					</view>
				</view>
				<view class="search2 flex align-center justify-around">
					<text class="cuIcon-calendar"></text>
					<view class="use-time" @tap="open" >
						<text>{{timeData.range.begin}}</text>
						<text>-----</text>
						<text>{{timeData.range.end}}</text>
					</view>
					<view>
						<text style="position: relative; right: 0;">共{{days}}晚</text>
					</view>
				</view>
				<button type="" class="cu-btn round bg-gradual-green">搜索精品民宿</button>
			</form>
		</view>
		<uni-calendar ref="calendar" :disable-before="true" :range="true" :start-date="startDate" :end-date="endDate" :date="date" :selected="selected" @confirm="confirm" @change="change" /> -->
		
		<!-- 热门城市 -->
		<HotCity></HotCity>
		<!-- <view class="hot-cities">
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
						<swiper-item v-for="(item,index) in swiperList" :key="index" class="swiper-item-box">
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
			
		</view> -->
		
		<!-- 最新上线 -->
		<Swiper></Swiper>
		<!-- <view class="house-kinds vitem">
			<text class="swiper-title">最新上线</text>
			<view class="vitem">
				<view class="">
					<text class="swiper-subtitle">精品入驻，抢先体验</text>
				</view>
				<view class="city-swiper">
					<swiper class="card-swiper" duration="500" @change="cardSwiper">
						<swiper-item v-for="(item,index) in swiperList" :key="index" class="swiper-item-box swiper-item-box1">
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
		</view> -->
		
		
		<!-- 底部操作条 -->
		<FootBar></FootBar>	
		<!-- <view class="cu-bar tabbar bg-white foot shadow">
			<view class="action" @tap="Navchange" data-cur="choose">
				<view class="cuIcon-cu-image">
					<image :src="'../../static/images/' + [pagecur=='choose'?'jingxuan':'精选'] + '.png'"></image>
				</view>
				<view :class="pagecur=='choose'?'text-green':'text-grey'">精选</view>
			</view>
			<view class="action" @tap="Navchange" data-cur="find">
				<view class="cuIcon-cu-image">
					<image :src="'../../static/images/' + [pagecur=='find'?'faxian':'发现'] + '.png'"></image>
				</view>
				<view :class="pagecur=='find'?'text-green':'text-grey'">发现</view>
			</view>
			<view class="action" @tap="Navchange" data-cur="story">
				<view class="cuIcon-cu-image">
					<image :src="'../../static/images/' + [pagecur=='story'?'shijiantai':'事件台'] + '.png'"></image>
				</view>
				<view :class="pagecur=='story'?'text-green':'text-grey'">故事</view>
			</view>
			<view class="action" @tap="Navchange" data-cur="my">
				<view class="cuIcon-cu-image">
					<image :src="'../../static/images/' + [pagecur=='my'?'wode':'我的'] + '.png'"></image>
				</view>
				<view :class="pagecur=='my'?'text-green':'text-grey'">我的</view>
			</view>
		</view> -->
	</view>
	
</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue';
	import FootBar from '@/components/FootBar/FootBar.vue';
	import Swiper from '@/components/Swiper/Swiper.vue';
	import Search from '@/components/Search/Search.vue';
	import TopBanner from '@/components/TopBanner/TopBanner.vue';
	import HotCity from '@/components/HotCity/HotCity.vue';
	export default {
		components: {
			uniCalendar,
			FootBar,
			Swiper,
			Search,
			TopBanner,
			HotCity,
		},
		data() {
			return {
				
			};
		},
		methods: {
			
		}
	}
</script>

<style scss>
	@import "../../static/css/index.css";
	@import "../../static/css/swiper.css";
	
</style>
