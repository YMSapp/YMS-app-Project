<template>
	<view class="main">
		<!--顶部banner图 -->
		<TopBanner></TopBanner>
		
		<!-- 查询输入框 -->
		<Search></Search>
		
		
		<!-- 热门城市 -->
		<HotCity></HotCity>
		
		
		<!-- 最新上线 -->
		<Swiper :data="data"></Swiper>
		
		
		
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
				data:[
					{
						'title': "最新上线",
						'subtitle': "精品入住，抢先体验",
					},
					{
						'title':"枕水而居",
						'subtitle': "静水流深，沧笙踏歌",
					},
					{
						'title':"文艺到底",
						'subtitle': "枕上诗书闲处好，门前风景雨来佳",
					},
					{
						'title':"揽星云入梦",
						'subtitle': "似此星辰非昨夜，为谁风露立中宵",
					},
					{
						'title':"山野有大美",
						'subtitle': "松月生夜凉，风泉满清听",
					},
					{
						'title':"在古镇醒来",
						'subtitle': "唯有别时今不忘，暮烟秋雨过枫桥",
					}
				]
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
