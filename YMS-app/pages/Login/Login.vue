<template>
	<view class="main">
		<view class="user-acatar " @tap="showModal" data-target="Modal">
			<view class="cu-avatar xl round " style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);"></view>
			<text>登录/注册</text>
		</view>
		<view class="cu-list menu">
			<view class="my-col flex justify-around align-center cu-item">
				<view class="content">
					<text class="cuIcon-myres cuIcon-favor text-yellow text-lg"></text>
					<text class="text-black">我的收藏</text>
					
				</view>
				<text>|</text>
				<view class="content">
					<text class="cuIcon-myres cuIcon-rechargefill text-yellow"></text>
					<text class="text-black">我的金币</text>
				</view>
			</view>
			<view class="my-col cu-item arrow">
				<view class="content">
					<text class="cuIcon-myres cuIcon-friendadd text-blue text-lg"></text>
					<text class="text-black">我的收藏</text>
				</view>
			</view>
			<view class="my-col cu-item arrow">
				<view class="content">
					<text class="cuIcon-myres cuIcon-home text-green text-lg"></text>
					<text class="text-black">我要入驻</text>
				</view>
			</view>
			<view class="my-col cu-item arrow">
				<view class="content">
					<text class="cuIcon-myres cuIcon-phone text-cyan text-lg"></text>
					<text class="text-black">民宿入驻咨询</text>
				</view>
			</view>
			<view class="my-col cu-item arrow">
				<view class="content">
					<text class="cuIcon-myres cuIcon-question text-red text-lg"></text>
					<text class="text-black">团购民宿咨询</text>
				</view>
			</view>
			<view class="my-col cu-item arrow set-list">
				<view class="content">
					<text class="cuIcon-myres cuIcon-settings text-blue text-lg"></text>
					<text class="text-black">设置</text>
				</view>
			</view>
		</view>
		
		<!-- 登录模态框 -->
		<view class="cu-modal" :class="modalName=='Modal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content login-logo">
						<view class="app-logo">
							<view class="cu-avatar lg logo-img" style="background-image:url(../../static/YMSlogo4.png);"></view>			
							<text>悦民宿</text>		
						</view>
					</view>
					<view class="action login-close" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<form>
						<view class="cu-form-group">
							<text class="cuIcon-mobilefill"></text>
							<input placeholder="手机号" name="input" placeholder-class="place" v-model="username"></input>
						</view>
						<view class="cu-form-group margin-top">
							<text class="cuIcon-lock"></text>
							<input placeholder="密码" name="input" placeholder-class="place" v-model="psw"><text class="forget-pas">忘记密码？</text></input>
						</view>
						<button class="cu-btn bg-green margin-tb-sm lg btn-login" @tap="login">登录</button>
						<view class="flex justify-between">
							<text @tap="showModal" data-target="Modal1">新用户？去注册</text>
							<text @tap="hideModal">先去逛逛>></text>
						</view>
					</form>
				</view>
			</view>
		</view>
		
		<!-- 注册模态框 -->
		<view class="cu-modal" :class="modalName=='Modal1'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content login-logo">
						<view class="app-logo">
							<view class="cu-avatar lg logo-img" style="background-image:url(../../static/YMSlogo4.png);"></view>			
							<text>悦民宿</text>		
						</view>
					</view>
					<view class="action login-close" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<form>
						<view class="cu-form-group">
							<text class="cuIcon-mobilefill"></text>
							<input placeholder="手机号" name="input" placeholder-class="place" v-model="regusername"></input>
						</view>
						<view class="cu-form-group margin-top">
							<text class="cuIcon-safe"></text>
							<input placeholder="验证码" name="input" placeholder-class="place"><text class="get-checkcode">获取验证码</text></input>
						</view>
						<view class="cu-form-group margin-top">
							<text class="cuIcon-lock"></text>
							<input placeholder="请输入密码(至少6位)" name="input" placeholder-class="place" v-model="regpsw"></input>
						</view>
						<button class="cu-btn bg-green margin-tb-sm lg btn-register" @tap="Register">注册</button>

						<view class="text-center margin-top">
							<text @tap="showModal" data-target="Modal">已有账号，<text style="color: #00CE47;">直接登录</text></text>
						</view>
					</form>
				</view>
			</view>
		</view>
		
		<!-- <FootBar></FootBar> -->
	</view>
</template>

<script>
	import FootBar from '@/components/FootBar/FootBar.vue';
	export default {
		components:{
			FootBar,
		},
		data() {
			return {
				modalName: null,
				username: '',
				psw: '',
				regusername: '',
				regpsw: '',
			}
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			login(){
				let userdata = `username=${this.username}&psw=${this.psw}`;
				this.$axios.get('http://localhost:3000/users/login?'+userdata).then((result)=>{
					// console.log(result);
					if(result.data.code == 1){
						window.localStorage.setItem('token', result.data.data);
						uni.navigateBack({
							delta:1
						});
						/* this.$router.push({
							path: '/',
						}); */
					}else {
						alert(result.data.msg);
					}
				});
			},
			Register(){
				let userdata = `username=${this.regusername}&psw=${this.regpsw}`;
				this.$axios.get('http://localhost:3000/users/reg?'+userdata).then((result)=>{
					// console.log(result);
					if(result.data.code == 1){
						let status = confirm("您已经注册成功！确定前往登录页面吗？");
						if(status){
							this.modalName = "Modal";
							/* this.$router.push({
								path: '/login',
							}); */
						}
					}else{
						alert(result.data.msg);
					}
				});
			},
		}
	}
</script>

<style>
	@import '../../static/css/login.css';
	@import '../../colorui/icon.css';
	@import '../../colorui/main.css';
</style>
