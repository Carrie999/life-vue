<template>
	<div class="home">
		<swipe class="my-swipe" >
			<swipe-item   :style="{backgroundImage: 'url(' + img.img[0] + ')'}"  class="item"></swipe-item>
			<swipe-item :style="{backgroundImage: 'url(' + img.img[1] + ')'}" class="item"></swipe-item>
			<swipe-item  :style="{backgroundImage: 'url(' + img.img[2] + ')'}" class="item"></swipe-item>
		</swipe>
		<v-nav></v-nav>
		<travel-list :travel-lists="travelListIndex"></travel-list>
	</div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';
require("../assets/css/vue-swipe")

import nav from '@/components/nav'
import travelList from '@/components/travelList'

import { mapGetters } from 'vuex'

export default {
	
	components: {
		'swipe': Swipe,
		'swipe-item': SwipeItem,
		'v-nav': nav,
		 travelList
	},
	data() {
		return {
			img:{
				img:[require('../assets/images/a.png'),require('../assets/images/b.png'),require('../assets/images/c.png')]
			},
			swiperOption: {
				pagination: '.swiper-pagination',
				slidesPerView: 1,
				autoplay: 5000,
				paginationClickable: true,
				spaceBetween: 30,
				loop: true
			}
		}
	},
	created() {
        if (this.travelListIndex.length == 0) {
            this.$store.dispatch('getTravelsList')
        }
    },
	computed: {
		...mapGetters([
			'travelListIndex'
		])
	},
	mounted(){
		
    },
	methods: {
		
	}
}
</script>

<style scoped lang="scss">
@import '../assets/css/function';
@import '../assets/css/vue-swipe';
.my-swipe {
  height: px2rem(380px);
  color: #fff;
  font-size: 30px;
  text-align: center;
  .item{
  	 background-repeat:no-repeat;
  	 background-size:cover;
  	 -moz-background-size:cover;
  	 -webkit-background-size:cover;
  }
}
</style>