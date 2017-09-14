<template>
    <div class="login">
     <div class="lvjing">
       <div class="title"></div>
        <div class="coordinates-icon">
            <div class="coordinates topAct">
                <p>趣生活</p>
            </div>
            <div class="circle-1-1 circle-show-2"></div>
            <div class="circle-2-2 circle-show-1"></div>
            <div class="circle-3-3 circle-show"></div>
        </div>
        <div class="login-form">
            <form action="#">
                <div class="user-name common-div">
                    <span class="eamil-icon common-icon">
                        <i class="iconfont icon-shouji"></i>
                    </span>
                    <input type="text" v-model="username" placeholder="手机号" />  
                </div>
                <div class="user-pasw common-div">
                    <span class="pasw-icon common-icon">
                        <i class="iconfont icon-mima"></i>
                    </span>
                    <input type="password" v-model="password" placeholder="密码" />        
                </div>
                <div class="user-code common-div">
                    <span class="pasw-icon common-icon">
                        <i class="iconfont icon-mima"></i>
                    </span>
                    <input type="text" style="width: 50%;" v-model="verificode" placeholder="验证码" />
                    <span class="verifi-code" @click="getVerifiCode" v-show="!sendCode">
                        获取验证码
                    </span>
                    <span class="verifi-code readonly" v-show="sendCode">
                        {{timeOut}}秒重新获取
                    </span>
                </div>
                <div class="login-btn" @click="regist">注册</div>
            </form>
        </div>
        <div class="forgets">
            <router-link to=""></router-link>
            <router-link to="/user/login">已有账号?登录</router-link>
        </div>
         </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex'

const REG_PHONE = '/^1[34578]\d{9}$/'

import api from '../fetch/api'
import * as _ from '../util/tool'

export default {

    data() {
        return {
            username: '',
            password: '',
            verificode: '',
            sendCode: false,
            timeOut: 60
        }
    },
    // computed: {
    //     sendCode() {

    //     }
    // },
    methods: {
        getVerifiCode () {
            if (!this.username) {
                _.alert('请输入手机号')
                return
            }
            api.RegistVerifiCode(this.username)
                .then(res => {
                    this.sendCode = true
                    this.setTimeOut()
                })
                .catch(err => {
                    _.alert('短信发送失败')
                })
            // if (!REG_PHONE.test(this.username)) {
            //     alert('请输入有效手机号')
            //     return
            // }
        },
        setTimeOut () {
            let timer = setTimeout(() => {
                this.setTimeOut()
                if(this.timeOut > 0) {
                    this.timeOut--
                }
            }, 1000)
            if(this.timeOut <= 0) {
                this.sendCode = false
                this.timeOut = 60
                clearTimeout(timer)
            }
        },
        regist () {
            if (!this.username || !this.password || !this.verificode) {
                _.alert('请填写完整')
                return
            }
            // if (!('/^1[34578]\d{9}$/').test(this.username)) {
            //     alert('请输入有效手机号')
            //     return
            // }
            // if (!('/^\w{6,15}$/').test(this.password)) {
            //     alert('请设置6－15位密码，可以使用数字、字母及下划线')
            //     return;
            // }
            let data = {
                tellphone: this.username,
                password: this.password,
                verificode: this.verificode
            }
            this.$store.dispatch('setLoadingState', true)
            api.Regist(data)
                .then(res => {
                    if(res.success) {
                        // let userInfo = Object.assign()
                        this.$store.dispatch('setLoadingState', false)
                        this.setUserInfo(res.data)
                        this.$router.replace('/home')
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/function';


.login{
   
    box-sizing:padding-box;
    width:100%;
    height: 100%;    
    background-image: url("../assets/images/10.jpg");
    background-repeat: "no-repeat";
    background-size:cover;
    .lvjing{
       background-color:rgba(0,0,0,0.8);
      padding-bottom: px2rem(320px);
    }
   
    .title{
        width:100%;
        height:auto;
        overflow:hidden;
        font-size:18px;
        text-align:center;
        line-height:px2rem(200px);
        color:#fff;
    }
      .coordinates-icon{ 
        height:px2rem(250px);
        padding-top:px2rem(80px);
        padding-bottom:px2rem(30px);
        .coordinates{
            text-align:center;
            overflow:hidden;
            margin:px2rem(100px) auto  0;

            p{ 
                color:rgba(255,255,255,0.95);;
                font-size:px2rem(100px);
            }
        }
    }
        
    .login-form{
        width:px2rem(600px);
        height:auto;
        margin:0 auto;
        .common-div{
            width:100%;
            height:px2rem(80px);
            overflow:hidden;
            border-radius:4px;
            margin-bottom: px2rem(50px);
            >.common-icon{
                float:left;
                width:px2rem(40px);
                height:px2rem(40px);
                line-height: px2rem(40px);
                overflow:hidden;
                margin:px2rem(20px);
                text-align: center;
                img{
                    width:100%;
                    height:auto;
                }
            }
            >input{
                float:left;
                line-height: px2rem(80px);
                background-color:transparent;
                border:none;
                outline:none;
                font-size:16px;
                color:#fff;
            }
            .verifi-code {
                display: inline-block;
                width: px2rem(200px);
                height: px2rem(80px);
                line-height: px2rem(80px);
                background: #3ddde3;
                font-size: px2rem(26px);
                color: #fff;
                text-align: center;
                padding-left: px2rem(20px);
            }
            .readonly {
                background: #eee;
                color: #555;
            }
        }
        .user-name,.user-pasw,.user-code{
              background-color:rgba(255,255,255,0.2);
            .iconfont{
                color:rgba(255,255,255,0.9);
            }
        }
        　:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            color:rgba(255,255,255,0.3);
        }

        ::-moz-placeholder { /* Mozilla Firefox 19+ */
            color: rgba(255,255,255,0.3);
        }

        input:-ms-input-placeholder{
            color: rgba(255,255,255,0.3);
        }

        input::-webkit-input-placeholder{
            color:rgba(255,255,255,0.3);
        }
        .login-btn{
            background-color:#3ddde3;
            color:#fff;
            font-size:20px;
            text-align:center;
            height:px2rem(100px);
            line-height:px2rem(100px);
            margin-bottom: px2rem(50px);
            border-radius:4px;
        }
    }
    .forgets{
        width:px2rem(600px);
        height:auto;
        margin:0 auto;
        >a{
            color:#fff;
            opacity:0.5;
            font-size:16px;
            +a{
                float:right;
            }
        }
    }
}


</style>