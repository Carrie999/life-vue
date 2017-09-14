<template>
	<div class="sidebar">
		<div class="sidebar-con" :class="{showbar: showbar}">
			<mt-header title="城市列表">
				<div @click='hidebar' slot="right">返回
					<i class="iconfont icon-fanhui2"></i>
					</div>
				<mt-button icon="more"></mt-button>
			</mt-header>
	      <v-city></v-city>
	    </div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import city from '@/components/city'
import * as _ from '../util/tool'

export default {
	components: {
       'v-city': city,

    },
	data () {
		return {
			
		}
	},
	// created () {
	// 	let userId = localStorage.userId
	// 	let phone = localStorage.phone
	// 	if (userId && phone) {
	// 		this.isLogin = true
	// 	} else {
	// 		this.isLogin = false
	// 	}
	// },
	computed: {
		...mapGetters([
			'loginStatus',
            'userInfo'
		]),
		showbar () {
			return this.$store.state.com.leftNavStatus
		}
	},
	methods: {
		hidebar () {
			this.$store.dispatch('setNavState', false)
		},
		logout () {
			this.$store.dispatch('setSignOut')
			_.alert('退出登录成功')
			setTimeout(() => {
				this.$router.replace('/user')
			}, 500)
		}
	}
}
</script>

<style scoped lang="scss">
@import '../assets/css/function';

.sidebar {

	.sidebar-con {
	    position: fixed;
	    top: 0;
	    left: -100%;
	    transform: translateZ(0);
	    width: 100%;
	    z-index: 1002;
	    background: #fff;
	    height: 100%;
	    overflow: auto;
	    transition: all .3s ease;
	    &.showbar {
	    	transform: translateX(100%);
	    }
	    .sidebar_head{
		    padding: px2rem(35px) px2rem(35px) 0;
		    color: #fff;
		    background: #76D49B;
		    .user {
				img {
				    width: px2rem(100px);
				    height: px2rem(100px);
				    border-radius: 50%;
				    vertical-align: middle;
				}
				span{
				    padding-left: px2rem(15px);
				    font-size: 22px;
				}
			}
			.function{
			    display: flex;
			    margin-top: px2rem(20px);
			    .function_sub{
				    flex: 1;
				    padding-left: px2rem(30px);
				    height: px2rem(100px);
				    line-height: px2rem(100px);
				    a {
				    	display: block;
					    color: #fff;
					}
				}
			}
		}
		.sidebar_list {
			.sidebar_list_first{
			    height: px2rem(100px);
			    line-height: px2rem(100px);
			    font-size: 19px;
			    padding-left: px2rem(35px);
			    a {
			    	display: block;
					color: #76D49B;
			    }
			}
			.sidebar_list_ul{
			    line-height: px2rem(100px);
			    li{
				    height: px2rem(100px);
				    padding-left: px2rem(40px);
				    a{
					    display: block;
					}
					span{
					    float: right;
					    margin-right: px2rem(50px);
					    font-size: 16px;
					    opacity: 0.7; 
					}
				}
			}
		}
		.icon {
			vertical-align: middle;
		}
	}
	.sidebar_mask{
	    position: fixed;
	    width: 100%;
	    margin: 0 auto;
	    top: 0;
	    left: 0;
	    bottom: 0;
	    right: 0;
	    z-index: 1001;
	    background: rgba(0,0,0,.7);
	}
}
.mint-header{

	background:#3ddde3;
	height:px2rem(100px);
	font-size:px2rem(32px);
}
</style>