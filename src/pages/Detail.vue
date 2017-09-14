<template>
    <div class="travel-detail">
        <div class="A-cimg activity-pic">
           <div class="header" >
            <div  class="headerimg" :style="{ 'background-image':  'url(' + bg + ')'  }">
                <div class="lvjing">
                </div>
            </div>
         </div>
         <div class='floatheader'> 
         <img :src="detail.travelTu" v-show="detail.travelTu">
         <p>这是一台音乐戏剧，是一场音乐背后故事的探寻</p>
         <span class='price'>免费</span>
         </div>
        </div>     	
        <detail-cell
            :begin-date="detail.date"
            :begin-time="detail.time"
            :place="detail.place"
            :destination="detail.placeDet"
            :release-username="detail.releaseUsername">
        </detail-cell>   
        <v-dialog v-show="dialog" :dialog-msg="dialogMsg" :link-url="linkUrl" @confirm="confirm" @cancel="cancel"></v-dialog>
        <div class='partner'> 
            <div class='p-header'>
                <span class='nav'>可能遇到的小伙伴</span>
                <span class='nav2'>全部4人<i class='iconfont icon-fanhui2'></i></span>
            </div>
            <div class="p-con" >
                <img :src="detail.joinPoeple[0]" />
                <img :src="detail.joinPoeple[1]" />
                <img :src="detail.joinPoeple[2]" />
            </div>
        </div>
        <div class="activity-details">
            <div class='p-header'>
                <span class='nav'>活动详情</span>
            </div>
            <p>{{detail.content}}</p>
        </div>
        <!--div class="btn-apply">
            <div @click="join">
                <i class="icon">&#xe678;</i>
                <span>去报名</span>
            </div>
        </div-->
        <div class='partin' @click="join">立即报名</div>
     </div>
</template>

<script>

import detailCell from '@/components/detailCell'
import dialog from '@/components/dialog'

import { mapGetters } from 'vuex'

import * as _ from '../util/tool'

export default {
    components: {
        detailCell,
        'v-dialog': dialog,

    },
    data () {
        return {
            bg:require('../assets/images/1.jpg'),
            dialog: false,
            dialogMsg: '确认报名?',
            linkUrl: '',
            detail: {
            travelTu:require('../assets/images/1.jpg'),
            objectId:'123',
            joinNum:'5',
            joinPoeple:[require('../assets/images/user-img2.png'),require('../assets/images/user-img3.png'),require('../assets/images/user-img4.png'),require('../assets/images/user-img3.png'),require('../assets/images/user-img3.png')],
            title:'周末去lamb花舞森林展会',
            date:'9月5日 周六 ',
            time: '10:00-15:00',
            place:'北京市西城区广安门外大街',
            placeDet:'中国国家话剧院小剧场',
            releaseUsername:'CoCo',
            content:'这是一台音乐戏剧，是一场音乐背后故事的探寻，亦是一次灵魂游吟的对话,这是一台音乐戏剧，是一场音乐背后故事的探寻，亦是一次灵魂游吟的对话,这是一台音乐戏剧，是一场音乐背后故事的探寻，亦是一次灵魂游吟的对话,这是一台音乐戏剧，是一场音乐背后故事的探寻，亦是一次灵魂游吟的对话'
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            //vm.detail = ''
            //vm.getDetailData(vm)
        })
    },
    computed: {
		//...mapGetters({
            //detail: 'getDetail',
            // loading: 'loading'
       // })
	},
    methods: {
        getDetailData(el) {
            window.scroll(0, 0)
            let id = el.$route.params.id
            let router = this.$route.path.split('/')[1]
            let params = {
                id,
                router
            }
            el.$store.dispatch('getDetail', params)
            if(router == 'travel') {
                el.$store.dispatch('travelClicks', id)
            }
            
        },
        confirm() {
            this.dialog = false
            _.toast('报名成功', 'success')
        },
        cancel() {
            this.dialog = false
        },
        join() {
            // _.toast('报名成功', 'success')
            this.dialog = true
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/function';

.travel-detail {
    .A-cimg {
        position: relative;
        img {
            max-height: px2rem(350px);
            border: 0;
            vertical-align: middle;
            width: 100%; 
        }
        .header{ 
            height:px2rem(340px);
            overflow:hidden;
        }
        .headerimg{
             -webkit-filter: blur(5px);
            -moz-filter: blur(5px);
            -o-filter: blur(5px);
            -ms-filter: blur(5px);
            filter: blur(5px);
             -webkit-transform: scale(1.2);
             height:px2rem(400px);
        }
        .lvjing{
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.3);
            height:px2rem(500px);
        }
        .floatheader{
            position:absolute;
            top:px2rem(36px);
            left:px2rem(25px);
            p{
               margin-right:px2rem(20px);
               font-size:px2rem(34px);
               color:#f4f4f4;
               margin-bottom:px2rem(37px);
               line-height:px2rem(50px);
            }
            img{
                width:px2rem(220px);
                height:px2rem(260px);
                border-radius:3px;
                  background-size:cover;
                  float:left;
                  margin-right:10px;
            }
            span{
                color:#fe7420;
                font-size:px2rem(44px);
               
            }
        }
        .p-number {
            background-color: rgba(0, 0, 0, 0.37);
            color: #FFF;
            padding: px2rem(3px) px2rem(15px);
            font-size: 14px;
            position: absolute;
            top: px2rem(20px);
            right: 0px;
            border-radius: px2rem(20px) 0 0 px2rem(20px);
            .icon {
                font-size: 14px;
            }
        }
        h1 {
            font-weight: normal;
            font-size: 17px;
            padding: px2rem(20px) px2rem(20px) px2rem(15px);
        }
        a {
            color: #06F;
            margin-left: px2rem(20px);
            font-size: 16px;
        }
        span {
            color: #B9B9B9;
            font-size: 14px;
        }
    }
   
    .activity-details {
        padding: px2rem(30px);
        border-top: px2rem(20px) solid #f1f1f1;
        margin-bottom: px2rem(60px);
        background: #fff;
        border-bottom:px2rem(150px) solid #f1f1f1;
        p{
            color: #a5a5a5;
            line-height: px2rem(45px);
            font-size:px2rem(28px);
             margin-bottom: px2rem(60px);
        }
        .p-header{
             padding:px2rem(0px) px2rem(10px) px2rem(30px) px2rem(0px);
              font-size:px2rem(35px);

        }

    }
    .btn-apply {
        position: fixed;
        bottom: px2rem(40px);
        right: px2rem(30px);
        width: px2rem(110px);
        height: px2rem(110px);
        background-color: #76D49B;
        border-radius: 50%;
        text-align: center;
        z-index: 9;
        line-height: 1;
        display: block;
        font-size: 14px;
        div {
            .icon {
                display: block;
                line-height: px2rem(60px);
            }
            span {
                color: #fff;
            }
        }
       
    }
     .partner{
           background:#fff;
           margin-top:px2rem(20px); 
           .p-header{
            .nav{
                font-size:px2rem(35px);
            }
            .nav2{
                 font-size:px2rem(20px);
                 color:#bababa;
                 float:right;
                 i{
                 font-size:px2rem(20px);
                 color:#bababa;
                 }
            }
            padding:px2rem(30px) px2rem(30px) px2rem(10px) px2rem(30px);
           }
           .p-con{
            padding:px2rem(30px);
          
             img{
                width:px2rem(70px);
                height:px2rem(70px);
                border-radius:50%;
                margin-right:px2rem(15px);
                border:1px solid #eee;
             }
           }
        }
        .partin{
            position:fixed;
            bottom:0px;
            left:0;
            width:100%;
            height:px2rem(100px);
            background:#ff9b30;
            color:white;
            line-height:px2rem(100px);
            text-align:center;
            font-size:px2rem(35px);
        }
}
</style>