<template>
  <div class="header">
    <div class="header-icon-menu" v-show="backDisplay" @click="goBack"><i class="iconfont icon-fanhui"></i></div>
    <div class="header-cont"><p>{{title}}</p></div>
      <router-link to="/user/msg">
        <div class="header-icon" v-show="menuDisplay" @click="showBar"><i class="icon iconfont icon-xiaoxi"></i></div>
      </router-link>
    <div class="header-icon" v-show="mapDisplay" @click="getMap"><i class="iconfont icon-dingwei"></i></div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      menuDisplay: Boolean,
      backDisplay: Boolean,
      mapDisplay: Boolean
    },
    data() {
      return {
        
      }
    },
    methods: {
      goBack () {
        window.history.back()
      },
      getMap () {
         this.$store.dispatch('setNavState', true)
      },
      showBar () {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/css/function';

.header{
  position: fixed;
  transform: translateZ(0);
  top: 0;
  z-index: 4;
  height: px2rem(100px);
  width: 100%;
  background: #3ddde3;
  display: flex;
  flex-direction: row;
  .header-icon-menu{
    i{
      font-size:px2rem(40px);
      color:white;
      margin-left:px2rem(20px);
      margin-right:px2rem(-20px);
      text-align: center;
    }

    text-align: center;
    >i{
      line-height: px2rem(100px);
    }
  }
  .header-icon{
    i{
      font-size:px2rem(48px);
      color:white;
    }
    .icon{
      margin-right:px2rem(20px);
    }
    flex:1;
    text-align: center;
    >i{
      line-height: px2rem(100px);
    }
    .map-icon{
      font-size: 22px;
    }
  }
  
  .header-cont {
    flex: 8;
    padding-left: px2rem(40px);
      >p{
        line-height: px2rem(100px);
        color: #ffffff;
        font-size:17px;
      }
    }
  }
</style>