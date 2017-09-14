<template>
	<div class="travel-list">
        <travel v-for="(item,index) in  playLists" :travel="item"></travel>
	</div>
</template>

<script>
import travel from '@/components/travel'

export default {
    props: {
       playLists: Object
    },
    components: {
        travel
    },
	data() {
		return {


		}
	}
}
</script>

<style scoped lang="scss">
@import '../assets/css/function';

.travel-list {
    margin-top: px2rem(15px);
    background: #fff;
}
.travel-list-head {
    height: px2rem(80px);
    line-height: px2rem(80px);
    display: flex;
    justify-content: space-between;
    padding: 0 px2rem(20px);
    border-bottom: 1px solid #f1f1f1;
    .head-l {
        .icon {
            color: #F14343;
            font-size: px2rem(40px);
            vertical-align: middle;
            padding-right: 3px;
        }
    }
    .head-r {
        width: px2rem(80px);
        text-align: right;
        .icon {
            color: #555;
        }
    }
    span{
        font-size: px2rem(25px);
    }

}

</style>