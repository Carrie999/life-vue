<template>
    <div class="cell">
        <ul class="detail-cell">
            <li>
                <i class="iconfont icon-riqi"></i>
                <div>
                    <p class='p1'>{{beginDate}}</p>
                    <p class='p2'>{{beginTime}}</p>
                </div>
            </li>
            <li>
                <i class="iconfont icon-didian"></i>
                <div>
                    <p class='p1'>{{destination}}</p>
                    <p class='p2'>{{place}}</p>
                </div>
            </li>
            <li>
                <i class="iconfont icon-icon164"></i>
                <div>
                <p class='p3'>{{releaseUsername}}</p>
                <p class='p2'></p>
                </div>
            </li>   
        </ul> 
    </div>
   
</template>

<script>
export default {
    props: {
        beginDate: String,
        beginTime: String,
        place: String,
        cantJoinTime: String,
        destination: String,
        releaseUsername: String,
    },
    data() {
        return {
            
        }
    },
    methods() {
        console.log(this.beginTime)
    },
    filters: {
        formatTime (value) {
            
            // let time = Date(value)
            // // return new Date(time).toLocaleString()
            // return new Date(time)
            // // console.log(time)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/function';

.cell {
    background: #fff;
    .detail-cell {
        color: #999;
        border-bottom: 0px solid #EAEAEA;
     
        font-size: 15px;
        div{
            border-bottom: 1px solid #f1f1f1;
            flex:10;
            padding: px2rem(25px) 0px;
        }
        li {
            border-top: 0px solid #f1f1f1;
            padding: 0 px2rem(20px);
       
            display:flex;
            &:nth-of-type(4) {
                color: red;

            }
            .p1{
                font-size:px2rem(35px);
                color:#2c2c2c;

                padding:0;
            }
            i{
                margin-top:px2rem(55px);
                text-align:center;
                flex:1;
            }
            .p2{
               margin-top:px2rem(16px);
               font-size:px2rem(28px);
               color:#c6c6c6;
            }
            .p3{
                margin-top:px2rem(20px);
              font-size:px2rem(35px);
                color:#2c2c2c;

                padding:0;
            }
        }
        .iconfont {
            line-height:px2rem(15px);
            color: #b4b4b4;
            font-size: 17px;
            margin-right: px2rem(15px);
        }
    }
    

}
</style>