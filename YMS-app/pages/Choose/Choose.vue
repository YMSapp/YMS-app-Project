<template>
	<view class="main">
		<!--顶部banner图 -->
		<TopBanner></TopBanner>
		
		<!-- 查询输入框 -->
		<Search></Search>
		
		
		<!-- 热门城市 -->
		<HotCity></HotCity>
		
		
		<!-- 最新上线 -->
		<Swiper></Swiper>
		
		
		
		<!-- 底部操作条 -->
		<!-- <FootBar></FootBar>	 -->
		
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
