<template>
	<div class="tabar" v-show="isShowTabbar">
		<div class="tab">
			<div class="tab-item">
				<router-link to="/home">
					<div class="tab-icon"><i class="iconfont icon-icon01">	</i></div>
					<div class="tab-text">首页</div>
				</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/activity">
					<div class="tab-icon"><i class="iconfont icon-wan">
					</i></div>
					<div class="tab-text">活动</div>
				</router-link>
			</div>
			<div class="tab-item" >
				<router-link to="/find">
					<div class="tab-icon"><i class="iconfont icon-faxian">
					</i></div>
					<div class="tab-text">发现</div>
				</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/user">
					<div class="tab-icon"><i class="iconfont icon-wode">
					</i></div>
					<div class="tab-text">我的</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
		
		}
	},
	computed: {
		isShowTabbar () {
			let routeLength = this.$route.path.split('/').length
			return routeLength > 2 ? false : true
		}

	},
	methods:{
		
	}
}
</script>

<style scoped lang="scss">
@import '../assets/css/function';

.tabar{
	.tab{
		position: fixed;
		bottom: 0;
		left: 0;
	    display: flex;
	    width: 100%;
	    height: px2rem(120px);
	    line-height: px2rem(120px);
	    background: #fff;
		box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
	    &:after{
			display: block;
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			border-top: 1px solid rgba(7, 17, 27, 0.1);
			content: '';
		}
	    .tab-item{
	    	flex: 1;
	    	text-align: center;
			a{
				display: block;
				margin-top:-10px;
				font-size: 14px;
					color: rgb(77, 85, 93);
					&.active{
						color: #3ddde3;
						text-decoration: none;
					}
				.tab-icon{
					padding:5px;
					display:block;
					margin-bottom:100px;
					i{
						font-size:px2rem(50px);
						line-height:px2rem(100px);
						display:block;
						width: 100%;
					}
					width: px2rem(50px);
					height: px2rem(50px);
					margin: 0 auto;
				}
				.tab-text{
					height: px2rem(80px);
					line-height: px2rem(80px);
				}
			}
			
	    }
	}
}
</style>