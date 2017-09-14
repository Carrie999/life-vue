<template>
    <div class="login">
    <div class="lvjing">
        <div class="title"></div>
        <div class="coordinates-icon">
            <div class="coordinates topAct">
                <p>趣生活</p>
            </div>
        </div>
        <div class="login-form">
            <form action="#">
                <div class="user-name common-div">
                    <span class="eamil-icon common-icon">
                        <i class="iconfont icon-shouji"></i>
                    </span>
                    <input type="text" name="username" v-model="username" placeholder="手机号" />        
                </div>
                <div class="user-pasw common-div">
                    <span class="pasw-icon common-icon">
                        <i class="iconfont icon-mima"></i>
                    </span>
                    <input type="password" name="password" v-model="password" placeholder="密码" />        
                </div>
                <div class="login-btn" @click="_login">登录</div>
            </form>
        </div>
        <div class="forgets">
            <router-link to="">忘记密码?</router-link>
            <router-link to="regist">注册</router-link>
        </div>
    </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import api from '../fetch/api'
import * as _ from '../util/tool'

export default {

    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        ...mapActions({ setUserInfo: 'setUserInfo' }),

        // 用户登录
        _login() {
            if (!this.username || !this.password) {
                _.alert('请填写完整')
                return
            }
            let data = {
                //username: this.username,
                //password: this.password
            }
            this.$store.dispatch('setLoadingState', true)
            this.$http.get('/api/login')
                .then((res) => {
                            console.log('1111111')
                            // let userInfo = Object.assign()
                            this.$store.dispatch('setLoadingState', false)
                            this.setUserInfo(res.data)
                            this.$router.replace('/user')
                           }, (err) => {
                          console.log('222222')
                           console.log(err)
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
      padding-bottom: px2rem(360px);
    }
   
    .title{
        width:100%;
        height:auto;
        overflow:hidden;
        font-size:18px;
        text-align:center;
        height:px2rem(200px);
        color:#fff;
    }
    .coordinates-icon{ 
        height:px2rem(250px);
        
        .coordinates{
            text-align:center;
            overflow:hidden;
            margin:0 auto;

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
        }
        .user-name,.user-pasw{
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
            margin-bottom: px2rem(25px);
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