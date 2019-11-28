<template>
	<view>
		<view class="search-box">
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
		<uni-calendar ref="calendar" :disable-before="true" :range="true" :start-date="startDate" :end-date="endDate" :date="date" :selected="selected" @confirm="confirm" @change="change" />
	</view>
</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	export default {
		components: {
			uniCalendar
		},
		data() {
			return {
				date: '',
				startDate: '',
				endDate: '',
				timeData: {
					clockinfo: '',
					date: '',
					fulldate: '',
					lunar: '',
					month: '',
					range: '',
					year: ''
				},
				selected: [],
				infoShow: false,
				showCalendar: false,
				days: 0,
				
				// 价格区间
				price:"不限",
				i:0,
				s:0,
				e:500,
			}
		},
		onLoad() {
			setTimeout(() => {
				this.showCalendar = true
			}, 350)
		},
		methods: {
			open() {
				// this.reckon()
				this.$refs.calendar.open()
			},
			change(e) {
				console.log('change 返回:', e)
				this.timeData = e
				this.infoShow = true
			},
			confirm(e) {
				console.log('confirm 返回:', e)
				this.timeData = e
				this.days = e.range.data.length-1;
				this.infoShow = true
			},
			// 价位区间选择
			add(){
				if(this.i>=1){
					this.s += 500;
					this.e += 500;
				}
				let str = `${this.s}~${this.e}`;
				this.price = str;
				this.i++;
			},
			dec(){
				let str;
				if(this.i<=1){
					str = "不限";
				}else{
					this.s -=500;
					this.e -=500;
					str = `${this.s}~${this.e}`;
				}
				this.price = str;
				this.i--;
			},
		}
	}
</script>

<style>
	@import "../../static/css/index.css";
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4
	}
	
	view {
		font-size: 28upx;
		line-height: inherit
	}
	
	.example {
		padding: 0 30upx 30upx
	}
	
	.example-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32upx;
		color: #464e52;
		padding: 30upx 30upx 30upx 50upx;
		margin-top: 20upx;
		position: relative;
		background-color: #fdfdfd;
		border-bottom: 1px #f5f5f5 solid
	}
	
	.example-title__after {
		position: relative;
		color: #031e3c
	}
	
	.example-title:after {
		content: '';
		position: absolute;
		left: 30upx;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 6upx;
		height: 32upx;
		background-color: #ccc
	}
	
	.example .example-title {
		margin: 40upx 0
	}
	
	.example-body {
		padding: 30upx;
		background: #fff
	}
	
	.example-info {
		padding: 30upx;
		color: #3b4144;
		background: #fff
	}
	
	.calendar-content {
		padding-bottom: 100upx;
		font-size: 26upx;
	}
	
	.calendar-content-active {
		padding-bottom: 450upx;
	}
	
	.calendar-tags-group {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	
	.calendar-tags {
		width: 100%;
		box-sizing: border-box;
	}
	
	.calendar-tags-item {
		padding: 20upx 20upx;
		border: 1px rgba(0, 0, 0, 0.2) solid;
		color: #333;
		border-radius: 10upx;
		text-align: center;
		margin: 10upx;
		background: #f8f8f8;
	}
	
	.calendar-tags-item:active {
		background: #f8f8f8;
	}
	
	.checked .calendar-tags-item {
		background: rgb(0, 122, 255);
		color: #fff;
		border: 1px rgba(0, 0, 0, 0.1) solid;
	}
	
	.calendar-button {
		font-weight: bold;
		font-size: 32upx;
	}
	
	.calendar-button-groups {
		position: absolute;
		width: 100%;
		bottom: 0;
		display: flex;
	}
	
	.calendar-button-confirm {
		width: 50%;
		margin: 10upx;
		border: 1px #eee solid;
		font-size: 32upx;
	}
	
	.calendar-button-confirm:after {
		border: none;
	}
	
	.calendar-box {
		position: fixed;
		bottom: 0;
		background: #fff;
		color: #444;
		line-height: 1.5;
		width: 100%;
		transition: all 0.3s;
		transform: translateY(320upx);
		/* background: #f5f5f5; */
	}
	
	.calendar-active {
		transform: translateY(0);
	}
	
	.calendar-info-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20upx 30upx;
		padding-left: 0;
		border-top: 1px #eee solid;
		border-bottom: 1px #eee solid;
	}
	
	.calendar-title {
		/* height: 80upx; */
		font-weight: bold;
		color: #666;
		font-size: 32upx;
		border-left: 2px #0d9ebb solid;
		padding-left: 20upx;
		margin: 0 20upx;
	}
	
	.calendar-info {
		overflow-y: scroll;
		height: 260upx;
		padding: 30upx 30upx;
	}
</style>
