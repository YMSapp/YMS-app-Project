<template>
	<view>
		<view class="cu-bar tabbar bg-white foot">
				<view class="action" @tap="Navchange" data-cur="choose">
					<!-- <navigator url="../../pages/Choose/Choose"> -->
					<view class="cuIcon-cu-image">
						<image :src="'../../static/images/' + [pagecur=='choose'?'jingxuan':'精选'] + '.png'"></image>
					</view>
					<view :class="pagecur=='choose'?'text-green':'text-grey'">精选</view>
					<!-- </navigator> -->
				</view>
			
			<view class="action" @tap="Navchange" data-cur="find">
				<!-- <navigator url=""> -->
					<view class="cuIcon-cu-image">
						<image :src="'../../static/images/' + [pagecur=='find'?'faxian':'发现'] + '.png'"></image>
					</view>
					<view :class="pagecur=='find'?'text-green':'text-grey'">发现</view>
				<!-- </navigator> -->
			</view>
			<view class="action" @tap="Navchange" data-cur="story">
				<!-- <navigator url=""> -->
					<view class="cuIcon-cu-image">
						<image :src="'../../static/images/' + [pagecur=='story'?'shijiantai':'事件台'] + '.png'"></image>
						<!-- <view class="cu-tag badge">99</view> -->
					</view>
					<view :class="pagecur=='story'?'text-green':'text-grey'">故事</view>
				<!-- </navigator> -->
			</view>
			<view class="action" @tap="Navchange" data-cur="my">
				<!-- <navigator url="../../pages/Login/Login"> -->
					<view class="cuIcon-cu-image">
						<image :src="'../../static/images/' + [pagecur=='my'?'wode':'我的'] + '.png'"></image>
					</view>
					<view :class="pagecur=='my'?'text-green':'text-grey'">我的</view>
				<!-- </navigator> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pagecur:'choose',
			}
		},
		methods: {
			// 底部操作条
			Navchange(e){
				this.pagecur = e.currentTarget.dataset.cur;
				this.$emit('navchange',this.pagecur);
			}
		}
	}
</script>

<style>
	@import "../../static/css/index.css";
</style>
