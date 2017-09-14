<template>
    <div class="add-activity">
        <time-picker v-show="showTimePicker" @confirm="confirm"></time-picker>
        <form class="create-event " method="post" data-abide="" prevent-submit="false" novalidate="">
			<div class="form-group">
				<span class="iconfont icon-biaoti"></span>
				<input type="text" class="form-control title" placeholder="活动标题" required v-model="title" maxlength="100">
			</div>
			
            <div class="form-group datetime">
                <span class="iconfont icon-riqi1"></span>
                <input type="text" class="form-control beginTime"  placeholder="日期" required v-model="beginTime" readonly="" @click="showPicker">
            </div>
            <div class="form-group datetime">
                <span class="iconfont icon-shijianpaixu"></span>
                <input type="text" class="form-control beginTime"   @click="openPicker" placeholder="开始时间"  v-model="time1" readonly="">
            </div>
			<div class="form-group">
				<span class="iconfont icon-didian1"></span>
				<input type="text" class="form-control destination1" id="multiPickerInput" v-model="destination1" placeholder="地点" required readonly="">
			</div>
			<div class="form-group">
				<span class="iconfont icon-didian1"></span>
				<input type="text" class="form-control" placeholder="详细地址" required v-model="destination2">
			</div>
			<div class="form-group">
				<span class="iconfont icon-feiyong"></span>
				<input type="text" class="form-control joinMax" placeholder="费用" required v-model="joinMax">
                <span style="margin-right:30px">元</span>
			</div>
			<div class="event-edit form-group">
		        <span class="iconfont "></span>
		        <textarea class="form-control textarea" cols="30" rows="10" placeholder="活动详情介绍" required v-model="content" data-abide-validator="minLength"></textarea>
	      	</div>
	      	<div class="A-cimg travelPic">
	      		<img src="">
	      	</div>
	      	<input type="button" class="btn cy-btn" style="margin: 10px 0;cursor: pointer;" value="上传海报图">
            <input id="btn_create_event" type="button" @click="post1" class="btn cy-btn" value="确定发布">
        </form>

        <div id="address-select">
        </div>
        <mt-datetime-picker
        ref="picker"
        type="time"
        v-model="time2"
        @confirm="handleConfirm">
       </mt-datetime-picker>
    </div>
</template>

<script>

import timePicker from '@/components/timePicker'
import { DatetimePicker } from 'mint-ui'
import { mapState } from 'vuex'
import * as _ from '../util/tool'
import api from '../fetch/api'



require('../util/city-picker.js')

import $city from '../util/city.js'

export default {
    components: {
        timePicker,
        DatetimePicker
    },
    data() {
        return {
            title: '',
            beginTime: '',
            endTime: '',
            cantJoinTime: '',
            destination1: '',
            destination2: '',
            joinMax: '',
            content: '',
            time1: '',
            time2: '',

        }
    },
    computed: mapState({


        showTimePicker: state => state.com.showTimePicker
    }),
    methods: {
        showPicker() {

            this.$store.dispatch('showTimePicker', true)
        },
        openPicker() {
            this.$refs.picker.open();
        },
        handleConfirm() {
            this.time1= this.time2;
        },
        confirm(startDate, endDate) {
			this.beginTime = startDate
			this.endTime = endDate
		},
        post1() {
            _.alert('发布成功')
            this.$router.replace('/home')
        },
        address() {
            api.getAddressJson()
                .then(res => {
                    console.log(res.data)
                })
        }
    },
    mounted() {
		new MultiPicker({
		    input: 'multiPickerInput',//点击触发插件的input框的id
		    container: 'address-select',//插件插入的容器id
		    jsonData: $city,
		    success: (arr) => {
		        console.log(arr)
                switch(arr.length) {
                    case 2:
                        this.destination1 = arr[0].value + ' ' + arr[1].value
                        break
                    case 3:
                        this.destination1 = arr[0].value + ' ' + arr[1].value + ' ' + arr[2].value
                        break
                }
		    }//回调
	    });
	},
}
</script>

<style lang="scss" scoped>
@import '../assets/css/function';
@import '../../static/css/city-picker.css';

.add-activity {
    position: relative;
    background: #fff;
    padding-bottom: px2rem(50px);
    .create-event {
        .form-group {
            display: flex;
            border-bottom: 1px solid #eee;            border-bottom: 1px solid #f5f5f5;
            line-height: px2rem(100px);
            .iconfont {
                font-size:px2rem(30px);
                color: #666;
                padding: 0 px2rem(20px);
            }
            :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                color: red; opacity:1; 
            }

            ::-moz-placeholder { /* Mozilla Firefox 19+ */
                color: red;opacity:1;
            }

            input:-ms-input-placeholder{
                color:red;opacity:1;
            }

            input::-webkit-input-placeholder{
                color: #d0d0d0;opacity:1;
            }
            input {
                border: none;
                width: 100%;
                height: px2rem(80px);
                line-height: px2rem(80px);
                margin-top: px2rem(10px);
                box-shadow: none;
            }
            textarea {
                box-sizing: border-box;
                width: 100%;
                margin-top: px2rem(15px);
                padding: px2rem(20px) 0;
                height: px2rem(300px);
                border: none;
                overflow: hidden;
                resize: none;
                outline: none;
                overflow: auto;
            }
        }
        .btn {
            width: 100%;
            height: px2rem(100px);
            line-height: px2rem(100px);
        }
        #btn_create_event {
            background: #3ddde3;
            color: #fff;
            font-size: 14px;
        }

    }
    .multi-picker-btn{
            color:#3ddde3;
        }
    
}


</style>