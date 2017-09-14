<template>
	<div class="user">
		<div v-if="!loginStatus">
			<div class="user-h">
				<div class="avatar u-avatar">
					<img src="../assets/images/user-img0.png" alt="">
				</div>
				<div class="u-button">
					<router-link to="/user/login" class="t-login">登录</router-link>
					<router-link to="/user/regist" class="t-regist">注册</router-link>
				</div>
			</div>	
		</div>
		<div v-else>
			<div class="user-h islogin">
				<div class="avatar i-avatar">
					<img src="../assets/images/user-img0.png" alt="">
				</div>
				<div class="user-d">
					<p class="username">{{userInfo.username}}</p>
					<p class="desc">女</p>
				</div>
			</div>
			<div class="circle">
				<div>
					<div class="circle-n">
						圈子
					</div>
					<div class="circle-p">
						<ul>
							<li><img src="../assets/images/user-img2.png" alt=""></li>
							<li><img src="../assets/images/user-img3.png" alt=""></li>
							<li><img src="../assets/images/user-img4.png" alt=""></li>
						</ul>
					</div>
				</div>
				<div class="circle-more">
					<img src="../assets/images/more.png" alt="">
				</div>
			</div>	
		</div>
		
		
		<group :cell-lists="cellLists1"></group>
		<group :cell-lists="cellLists2"></group>
		<group :cell-lists="cellLists3"></group>
	</div>
</template>

<script>
import group from '@/components/group'

import { mapGetters } from 'vuex'
import api from '../fetch/api.js'

export default {

	components: {
		group
	},
	data() {
		return {
			cellLists1: [
                { link: "/user/msg", iconUrl: '', text: '我的消息', desc: '', badg: '',  badg: '4', more: true},
                { link: 'user/part', iconUrl: '', text: '我参加的', desc: '', badg: '', more: true}, 
                { link: 'user/posted', iconUrl: '', text: '我发布的', desc: '', more: true}, 
                { link: 'user/msg', iconUrl: '', text: '基本信息', desc: '', more: true},        
            ],
           
			cellLists3: [
                { link: 'user/set', iconUrl: '', text: '设置', desc: '', badg: '', more: true},
                { link: '', iconUrl: '', text: '关于我们', desc: '', badg: '', more: true}               
            ],
			pubTotravelNum: 0,
			pubTosportNum: 0
		}
	},
	created () {
		if(this.loginStatus) {
			api.getPubTotravelNum(this.userInfo.objectId)
				.then(res => {
					this.pubTotravelNum = res.data
				})
		}
	},
	computed: {
		...mapGetters([
			'loginStatus',
            'userInfo'
		])
	}
}
</script>

<style lang="scss" scoped>
@import '../assets/css/function';

.user {
	height: 100%;
	.islogin {
		display: flex;
		.i-avatar {
			margin: px2rem(40px) px2rem(30px) 0;
		}
		.user-d {
			color:rgba(255,255,255,0.7);
			margin-top: px2rem(70px);
			p {
				line-height: px2rem(50px);
				text-align: left;
				&.username {
					font-size: 20px;
					color: #fff;
				}
				&.desc {
					font-size: 16px;
					padding-left: 2px;
				}
			}
		}
	}
	.user-h {
		box-sizing: border-box;
		height: px2rem(310px);
		color: #323232;
    	background: #3ddde3;
		text-align: center;
		padding-top: px2rem(20px);
		.avatar {
			width: px2rem(160px);
			height: px2rem(160px);
			border-radius: 50%;
			border: 3px solid rgba(255, 255, 255, 0.4);		
			overflow: hidden;
			img {
				width: 100%;
			}
		}
		.u-avatar {
			margin: 0 auto;
		}
		.u-button {
			display: flex;
			justify-content: center;
			margin-top: px2rem(20px);
			a {
				display: block;
				text-align: center;
				width: px2rem(160px);
				color: #2ad2c9;
				background: #fff;
				height: px2rem(72px);
				line-height: px2rem(72px);
				font-size: 14px;
				border-radius: 0 5px 5px 0;
			}
			.t-login {
				background: #24a4a9;
				color: #fff;
				border-radius: 5px 0 0 5px;
			}
		}
	}
	.circle {
		display: flex;
		justify-content: space-between;
		height: px2rem(150px);
		line-height: px2rem(150px);
		background: #fff;
		margin-bottom: px2rem(20px);
		>div:first-child {
			display: flex;
		}
		.circle-n {
			width: px2rem(100px);
			text-align: center;
			font-size: 15px;
		}
		.circle-p {
			li {
				display: inline-block;
				width: px2rem(90px);
				height: px2rem(90px);
				margin-top: px2rem(20px);
				margin-right: px2rem(10px);

				img {
					width: 100%;
					border-radius:100%;
					border:1px solid #eee;
				}
			}
		}
	}
	.circle-more {
		img {
			width: px2rem(35px);
			height: px2rem(35px);
			margin-top: px2rem(60px);
			margin-right: px2rem(20px);
		}
	}
	.user-h-list {
		background: #fff;
		padding: px2rem(20px) 0;
		margin-bottom: px2rem(20px);
		ul {
			display: flex;
			li {
				flex: 1;
				text-align: center;
				height: px2rem(80px);
				line-height: px2rem(80px);
				border-right: 1px solid #89F0EB;
				font-size: 14px;
				&:last-child {
					border-right: none;
				}
				a {
					display: block;
					.num {
						color: #2AD2C9;
					}
				}
			}
		}
	}
}
</style>