<template>
	<view>
		<view class="cu-modal show">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content login-logo">
						<view class="app-logo">
							<view class="cu-avatar lg logo-img" style="background-image:url(../../static/YMSlogo.png);"></view>			
							<text>悦民宿</text>		
						</view>
					</view>
					<view class="action login-close" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<form>
						<view class="cu-form-group margin-top">
							<text class="cuIcon-mobilefill"></text>
							<input placeholder="手机号" name="input" placeholder-class="place"></input>
						</view>
						<view class="cu-form-group margin-top">
							<text class="cuIcon-safe"></text>
							<input placeholder="验证码" name="input" placeholder-class="place"><text class="get-checkcode">获取验证码</text></input>
						</view>
						<view class="cu-form-group margin-top">
							<text class="cuIcon-lock"></text>
							<input placeholder="请输入密码(至少6位)" name="input" placeholder-class="place"></input>
						</view>
						<button class="cu-btn bg-green margin-tb-sm lg btn-register">注册</button>
						<!-- <view class="user-protol">
								<radio class="pro-radio" checked="" value=""></radio><text>阅读并同意</text>
						</view> -->
						<view class="text-center margin-top">
							<text @tap="showModal" data-target="Modal">已有账号，<text style="color: #00CE47;">直接登录</text></text>
						</view>
					</form>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
			};
		},
		methods:{
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
		}
	}
</script>

<style>
	@import '../../static/css/login.css';
	@import '../../colorui/icon.css';
	@import '../../colorui/main.css';
</style>
