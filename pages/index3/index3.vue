<template>
	<view>
		<view class="theme">
			故事
		</view>
         <view class="pb">
         	<view class="pb1" @tap="gotolink">
         		默认
         	</view>
			<view class="pb2" @tap="isShow = !isShow ">
				综合排序 ▲
			</view>
         </view>
		 <view class="dc">
		 	<view class="">
				<text>浏览  多-少</text>
		 	</view>
			<view class="">
				<text>浏览  少-多</text>
			</view>
		 </view>
		 <view class="tz" style="background-image:url(./yimingsu.jpg);">
		  <image src="../../static/yimingsu1.png" mode=""></image>
		 <text class="bt">我们只为你推荐那些能“看得见风景的美宿”
			——专访“逸民宿APP”创始人李勇先生
			
		 </text>
		 <text class="nr">张辉：民宿作为一种崭新的旅游住宿业态，近两年显示出强劲的发展势头，但其中也有意见人士对民宿业的快速发展表示担忧，你怎么看？
		 </text>
		 </view>
		 <view class="tz" style="background-image:url(./yimingsu.jpg);">
		  <image src="../../static/yimingsu.jpg" mode=""></image>
		 <text class="bt">我们只为你推荐那些能“看得见风景的美宿”
		 			——专访“逸民宿APP”创始人李勇先生
		 			
		 </text>
		 <text class="nr">张辉：民宿作为一种崭新的旅游住宿业态，近两年显示出强劲的发展势头，但其中也有意见人士对民宿业的快速发展表示担忧，你怎么看？
		 </text>
		 </view>
		 <view class="tz" style="background-image:url(./yimingsu.jpg);">
		  <image src="../../static/yimingsu.jpg" mode=""></image>
		 <text class="bt">我们只为你推荐那些能“看得见风景的美宿”
		 			——专访“逸民宿APP”创始人李勇先生
		 			
		 </text>
		 <text class="nr">张辉：民宿作为一种崭新的旅游住宿业态，近两年显示出强劲的发展势头，但其中也有意见人士对民宿业的快速发展表示担忧，你怎么看？
		 </text>
		 </view>
		
		<view class="box">
			<view class="cu-bar tabbar bg-white">
				<view class="action">
					<view class="cuIcon-cu-image">
						<image src="../../static/任务_03.png"></image>
					</view>
					<view class="text-green">精选</view>
				</view>
				<view class="action">
					<view class="cuIcon-cu-image">
						<image src="../../static/任务_05.png"></image>
					</view>
					<view class="text-gray">发现</view>
				</view>
				<view class="action">
					<view class="cuIcon-cu-image">
						<image src="../../static/任务_07.png"></image>
					</view>
					<view class="text-gray">故事</view>
				</view>
				<view class="action">
					<view class="cuIcon-cu-image">
						<image src="../../static/任务_09.png"></image>
					</view>
					<view class="text-gray">我的</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
		data() {
			return {
		
			};
		},
		
		
		methods: {
		gotolink(){
		 
		          //点击跳转至上次浏览页面
		         // this.$router.go(-1)
		 
		          //指定跳转地址
		          this.$router.replace('../../pages.index/index.vue')
		        },
		
		}
	}

</script>

<style lang="scss">
	@import '../../colorui/main.css';
.pb{
	display: flex;
	align-items: center;
	justify-content: space-around;
	background: #f1f1f1;
	font-size: 30upx;
	color: #333333;
	line-height:100upx;
}

.weiba{
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.tz{
	width:750upx;
}
.bt{
	font-size: 28upx;
	color:#333333;
	margin-top: 20upx;
	display: block;
	padding-left:40upx;
	padding-right:66upx;
	text-align:justify;
	line-height:46upx;
	width:648upx;
	word-break: break-all;
}
.nr{
	font-size: 24upx;
	color:#929292;
	display: block;
	padding-left:40upx;
	padding-right:66upx;
	text-align:justify;
	margin-top: 20upx;
	line-height:40upx;
	width:648upx;
	word-break: break-all;
}
	.box {
		margin: 20upx 0;
		background-color: #f1f1f1;
	}
	
	.box view.cu-bar {
		margin-top: 20upx;
		background-color: #e4d6cd;
	}
	.dc{
		background-color: white;
		line-height:83upx;
		font-size:28upx;
		padding-left:40upx;
		color:#313131;
	}
	.theme{
		line-height: 100upx;
		text-align: center;
		font-size: 38upx;
		font-weight:50upx;
		color: #050505;
	}
</style>
