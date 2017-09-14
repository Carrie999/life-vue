<template>
	<div class="y-nav">
        <div class="y_nav_h">
		</div>
        <ul>
			<li>
				<router-link to="/activity">
					<i  class="iconfont icon-zuixin"></i>
					<span>最新活动</span>
				</router-link>
			</li>
			<li>
				<router-link to="/find">
					<i  class="iconfont icon-remen"></i>
					<span>热门活动</span>
				</router-link>
			</li>
			<li>
				<router-link to="/find/periphery">
					<i class="iconfont icon-faxian"></i>
					<span>发现周边</span>
				</router-link>
			</li>
			<li>
				<router-link to="/user/post">
					<i class="iconfont icon-shizitianjia icon" ></i>
					<span>发布活动</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			
		}
	}
}
</script>

<style scoped lang="scss">
@import '../assets/css/function';

.y-nav {
    background: #fff;
    padding-bottom: px2rem(20px);
	.y_nav_h {
		width: px2rem(380px);
		margin: 0 auto;
		text-align: center;
		padding-top: 5px;
		position: relative;
		padding-bottom: 3px;
		
		img {
			width: px2rem(60px);
			height: px2rem(55px);
			margin-left: -5px;
			vertical-align: middle;
		}
	}
	ul {
		display: flex;
        margin-top: px2rem(15px);
		li {	
		    span{
		    	display:inline-block;
		    	height:px2rem(40px);
		    	line-height:px2rem(40px);
				font-size:px2rem(25px);
		    }
			width: 25%;
			text-align: center;
			.iconfont {
				display: block;
				width: px2rem(80px);
				height: px2rem(80px);
				line-height: px2rem(80px);
				background: #2ad2c9;
				font-size: px2rem(43px);
				margin: 0 auto;
				border-radius: 50%;
                margin-bottom: px2rem(15px);
                color:#fff; 
			}
			.icon{
                	font-size:px2rem(36px);
                }
			.icon-zuixin{
				background: #f28093;
			}
			.icon-remen{
				background: #f2e578;
			}
			.icon-faxian{
				background: #78f297;
			}
			.icon-shizitianjia{
				background: #94c0f2;
			}
		}
	}
}

</style>