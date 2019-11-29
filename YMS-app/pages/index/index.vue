<template>
	<view>
		<Choose v-if="pagecur=='choose'"></Choose>
		<Find v-if="pagecur=='find'"></Find>
		<Login v-if="pagecur=='my'"></Login>
		<FootBar @navchange="navchange"></FootBar>
	</view>
</template>

<script>
	import Login from '../Login/Login.vue';
	import Choose from '../Choose/Choose.vue';
	import FootBar from '@/components/FootBar/FootBar.vue';
	import Find from '../zs/find.vue';
	export default {
		components:{
			Login,
			Choose,
			FootBar,
			Find,
		},
		data() {
			return {
				pagecur: 'choose',
			}
		},
		methods: {
			navchange(data){
				this.pagecur = data; 
			}
		}
	}
</script>

<style>

</style>
