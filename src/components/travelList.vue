<template>
    <div class="travel-list">
        <div class="travel-list-head">
            <div class="head-l">
                <i class="iconfont icon-remen"></i>
                <span>热门活动</span>
            </div>
            <div class="head-r">
                <router-link to="/activity">
                    <i class="iconfont icon-gengduo"></i>
                </router-link>
            </div>
        </div>
        <travel v-for="(item,index) in travelLists" :travel="item"></travel>
    </div>
</template>

<script>
import travel from '@/components/travel'

export default {
    props: {

    },
    components: {
        travel
    },
    created: function () {
        this.$http.get('api/travelLists')
        .then((res) => {
           this.travelLists = res.data
           //alert(res.data)
       }, (err) => {
          console.log(err)
     
      })
    },
    data() {
        return {
            travelLists: []
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