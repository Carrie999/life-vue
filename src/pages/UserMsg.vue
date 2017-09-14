<template>
	<div class="msg">
		<nav class="nav-box clearfix">
			<ul class="nav-bar">
				<li v-for="(item, index) in itemTab" class="nav-bar-item" :class="{'nav-bar-active':initIndex === index}" @click="changeTab(index)">
					{{item.title}}
				</li>
			</ul>
		</nav>
		<section class="scroll-list">
			<div class="tongzhi" v-show="initIndex == 0">
				<div class="con" v-for="item in partList">
					<div class="content-head">
						<img :src='item.avadar'>
						<span class='name'>{{item.author}}</span>
						<span class='time'>{{item.partTime}}</span>
					</div>
					<h2>{{item.content}}</h2>
					<h3>{{item.title}}</h3>
					<div  class="see">
						<span>立即查看</span>
						<span class='iconfont icon-fanhui2'></span>
					</div>
				</div>
				<div>
					<div class="hudong" v-show="initIndex == 1">
						123213213
					</div>	
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				initIndex: 0,
				itemTab: [
				{ 'title': '通知', 'type': 'new' },
				{ 'title': '互动', 'type': 'focus' }
				],
				partList: [
				{ 'avadar': require('../assets/images/user-img4.png'), 
				'author': '花花',
				'partTime': '7-12',
				'content': '报名参加了你的活动',
				'title': '周六日去古水北镇',
			    },
			    { 'avadar': require('../assets/images/user-img2.png'), 
				'author': '花花',
				'partTime': '7-12',
				'content': '报名参加了你的活动',
				'title': '周六日去古水北镇',
			    },
			    { 'avadar': require('../assets/images/user-img3.png'), 
				'author': '花花',
				'partTime': '7-12',
				'content': '报名参加了你的活动',
				'title': '周六日去古水北镇',
			    },
	            ],
}
},
methods: {
	changeTab(index) {
		window.scroll(0, 0)
		this.initIndex = index
	},
	focus(event){

	}
}
}
</script>
<style scoped lang="scss">
	@import '../assets/css/function';
	.msg{
		.nav-box {
			border-bottom:1px solid #eee;
			position: fixed;
			top: px2rem(100px);
			z-index: 1;
			width: 100%;
			height: px2rem(100px);
			line-height: px2rem(100px);
			text-align: center;
			background: #fff;
			.nav-bar {
				display: flex;
				.nav-bar-item {
					flex: 1;
					font-size:px2rem(30px);
				}
				.nav-bar-active {
					border-bottom: 3px solid #3ddde3;
					color: #3ddde3;
				}
			}
    
		}
		.scroll-list {
			margin-top: px2rem(120px);
			.tongzhi{
				padding:0;
				.con{
					margin:px2rem(20px);
					box-shadow:1px 1px 5px #d2d2d2;
					padding:px2rem(30px) px2rem(30px) px2rem(0px) px2rem(30px);
					background:#fff;
		
					.content-head{
						display:flex;
						img{
							flex:1;
							width:px2rem(70px);
							height:px2rem(70px);
							border-radius:100%;
						}
						.name{
							flex:10;
							display:inline-block;
							line-height:px2rem(70px);
							margin-left:px2rem(20px);
							font-size:px2rem(30px);
						}
						.time{
							flex:2;
							text-align:right;
							display:inline-block;
							line-height:px2rem(70px);
							font-size:px2rem(26px);
							color:#555;
						}
					}
					h2{
						font-size:px2rem(32px);
						line-height:px2rem(64px);
						color:#000;
					}
						h3{
						font-size:px2rem(30px);
						line-height:px2rem(20px);
						color:#666;
						margin-top:px2rem(15px);
						margin-bottom:px2rem(30px);
					}
					.see{
						padding:px2rem(28px) 0;
						font-size:px2rem(28px);
						border-top:1px solid #eee;
						color:#666;
					.iconfont{
						text-align:rihgt;
						float:right;
					}
					}
				}		
			}
		}
	}
</style>