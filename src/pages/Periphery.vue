<template>
	<div class="periphery">
		<nav class="nav-box clearfix">
			<ul class="nav-bar">
				<li v-for="(item, index) in itemTab" class="nav-bar-item" :class="{'nav-bar-active':initIndex === index}" @click="changeTab(index)">
					{{item.title}}
				</li>
			</ul>
		</nav>
		<section class="scroll-list">
		<div class="new" v-show="initIndex == 0" v-for="item in shareList">
			<div class="author">
				<img :src="item.avadar">
				<div class="ren">
					<p>{{item.author}}</p>
					<p>{{item.publishTime}}</p>
				</div>
				<div class="focus" @click="focus($event)" >
				+关注
				</div>
			</div>
			<div class="con">
				<p>{{item.content}}</p>
				<img :src='item.pic'>
			</div>	
			<div class="operation">
				<span><i class='iconfont icon-pinglun'></i>评论</span>
				<span><i class='iconfont icon-hengtianjinfuicon03
'></i>点赞</span>
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
				{ 'title': '最新', 'type': 'new' },
				{ 'title': '关注', 'type': 'focus' }
				],
				shareList: [
				{ 'avadar': require('../assets/images/3.jpg'), 
				  'author': '朝花夕拾',
				  'publishTime': '7月12日',
                  'content': '遇见朋友,分享快乐',
                  'pic': require('../assets/images/2.jpg'),
                  'comment':'1',
                  'zan':'1',
                  'focus':'1'
				},
				{ 'avadar': require('../assets/images/2.jpg'), 
				  'author': '朝花夕拾',
				  'publishTime': '7月12日',
                  'content': '遇见朋友,分享快乐',
                  'pic': require('../assets/images/3.jpg'),
                  'comment':'1',
                  'zan':'1',
                  'focus':'0'
				},
				{ 'avadar': require('../assets/images/2.jpg'), 
				  'author': '朝花夕拾',
				  'publishTime': '7月12日',
				  'publishTime': '7月12日',
                  'content': '遇见朋友,分享快乐',
                  'pic': require('../assets/images/1.jpg'),
                  'comment':'1',
                  'zan':'1',
                  'focus':'0'
				}
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
	.periphery{
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
					font-size: 14px;
				}
				.nav-bar-active {
					border-bottom: 3px solid #3ddde3;
					color: #3ddde3;
				}
			}

		}
		.scroll-list {
            margin-top: px2rem(100px);
            background: #fff;
        }
		.new {
			padding:px2rem(30px) px2rem(24px) px2rem(30px) px2rem(24px);
			border-bottom:1px solid #eee;
			background: #fff;
			.author{
				display:flex;
				img{
					flex:1;
					width:px2rem(80px);
					height:px2rem(80px);
					margin-right:px2rem(20px);
					border-radius:100%;
				}
				.ren{
					flex:7;
                    :first-child{
                    	font-size:px2rem(28px);
                    	padding-top:px2rem(10px);
                    }
                    :last-child{
                    	font-size:px2rem(24px);
                    	color:#ccc;
                    	padding-top:px2rem(14px);
                    }
				}
				.focus{
					flex:1;
					padding-top:px2rem(16px);
					color:#3ddde3;
				}
			}
			.con{
                padding:px2rem(18px) 0;
				p{
					font-size:px2rem(30px);
					line-height:px2rem(70px);
				}
				img{
					height:px2rem(400px);
					width:px2rem(400px);
					background-size:cover;
				}
			}
			.operation{
				span{
					color:#adadad;
                    i{
                    	font-size:px2rem(26px);
                       margin-right:px2rem(6px);
                    }
					margin-right:px2rem(34px);
				}
			}
		}
	}
</style>