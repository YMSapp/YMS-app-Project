<template>
	<view>
		<view class="cu-modal show">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content login-logo">
						<view class="app-logo">
							<view class="cu-avatar lg logo-img" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);"></view>			
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
							<text class="cuIcon-lock"></text>
							<input placeholder="密码" name="input" placeholder-class="place"><text class="forget-pas">忘记密码？</text></input>
						</view>
						<button class="cu-btn bg-green margin-tb-sm lg btn-login">登录</button>
						<view class="flex justify-between">
							<text @tap="showModal" data-target="Modal1">新用户？去注册</text>
							<text @tap="hideModal">先去逛逛>></text>
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
