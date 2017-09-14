<template>
	<div class="travel-list">
      <div class="allSort">
       <div class="sortMenu clearfix">
        <ul class="sortMenu-ul" >
          <li class="cell">
            <mt-navbar v-model="selected">
             <mt-tab-item id="1" @click.native.prevent="active ='1'"><span class="tab-cell">运功</span></mt-tab-item>
             <mt-tab-item id="2"  @click.native.prevent="active ='2'"><span class="tab-cell">旅游</span></mt-tab-item>
             <mt-tab-item id="3"   @click.native.prevent="active ='3'"><span class="tab-cell">游戏</span></mt-tab-item>
             <mt-tab-item id="4"  @click.native.prevent="active ='4'"><span class="tab-cell">聚餐</span></mt-tab-item>
            <mt-tab-item id="5"  @click.native.prevent="active ='5'"><span class="tab-cell">k歌</span></mt-tab-item>
            <mt-tab-item id="6" @click.native.prevent="active ='6'"><span class="tab-cell">电影</span></mt-tab-item>
            <mt-tab-item id="7"  @click.native.prevent="active ='7'"><span class="tab-cell">音乐</span></mt-tab-item>
            <mt-tab-item id="8"  @click.native.prevent="active ='8'"><span class="tab-cell">演出</span></mt-tab-item>
             </mt-navbar>
      </li>
        </ul>
      </div>
    </div>
        <!-- tab-container -->
        <mt-tab-container v-model="active">
        <mt-tab-container-item id="1">
            <play-list :playLists="sportsLists"></play-list>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
            <play-list :playLists="tripLists"></play-list>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
           <play-list :playLists="gameLists"></play-list>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
           <play-list :playLists="mealLists"></play-list>
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
           <play-list :playLists="musicLists"></play-list>
        </mt-tab-container-item>
       
       <mt-tab-container-item id="6">
           <play-list :playLists="movieLists"></play-list>
        </mt-tab-container-item>
       
       <mt-tab-container-item id="7">
           <play-list :playLists="layoutLists"></play-list>
        </mt-tab-container-item>
       
       
       
    </mt-tab-container>
        <!--<panel v-for="(item,index) in sportList" :sport="item"></panel>-->
	</div>
</template>

<script>
import playList from '@/components/playing'


import { Navbar, TabItem, Cell, TabContainer,TabContainerItem} from 'mint-ui';
export default {
    props: {

    },
    components: {
        playList,
        'nav-bar':Navbar,
        'tab-item':TabItem,
        'cell': Cell,
        'tab-container': TabContainer,
        'tab-container-item':TabContainerItem,
    },
     created: function () {
        this.$http.get('api/sportsLists')
            .then((res) => {
           this.sportsLists = res.data
           //alert(res.data)
       }, (err) => {
          console.log(err)
      })
            this.$http.get('api/tripLists')
            .then((res) => {
           this.tripLists = res.data
           //alert(res.data)
       }, (err) => {
          console.log(err)
      })
      this.$http.get('api/gameLists')
            .then((res) => {
           this.gameLists = res.data
           //alert(res.data)
      }, (err) => {
          console.log(err)
      })
      this.$http.get('api/mealLists')
          .then((res) => {
          this.mealLists = res.data
           //alert(res.data)
      }, (err) => {
          console.log(err)
      })
    },
	name: 'allSort',
  data () {
    return {
      sportsLists:[],
           active: '1', 
      sortMenu: [
        { sortname: 'k歌' },
        { sortname: '电影' },
        { sortname: '演出' },
        { sortname: '音乐' },
      ],
      sortName: [
        { sortname: '家用电器' },
        { sortname: '母婴' },
        { sortname: '百货' },
        { sortname: '珠宝配饰' },
        { sortname: '运动户外' },
        { sortname: '食品' },
        { sortname: '美妆' },
        { sortname: '家装' },
        { sortname: '家居家纺' },
        { sortname: '鲜花宠物' },
        { sortname: '图书乐器' },
        { sortname: '生活服务' },
        { sortname: '游戏动漫' }
      ],
      subitemsExpanded: false
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/css/function';

.sortMenu{
  width: 100%; 
  background-color:#fff; 
  overflow-x: scroll; 
  -webkit-overflow-x: scroll;
}
.sortMenu::-webkit-scrollbar{ 
  width: 0; 
  height: 0;   
  background-color: #fff;  
}
.sortMenu-ul { 

  min-width:500px; 
  display: flex;
  justify-content: flex-start;
}
.sortMenu .cell{
  display: inline-block; 
  font-size: 12px;
  margin: 0px 1em;
  height: 40px;
  line-height: 40px;
  text-align: center;
  position: relative;
      text-overflow: ellipsis;
    word-break: keep-all;
}
.sortMenu .cell.special a{
  color: #ff474c;
}
.sortMenu .cell.special:before {
  content: '';
  height: 2px;
  width: 100%;
  background: #ff474c;
  position: absolute;
  bottom: 0px;
}
.sortMenu .all{
  right: 0;
  top: 50px;
  height: 35px;
  width: 35px;
  position: absolute;
  background: #fff;
  z-index: 10;
  display: flex;
  justify-content:center;
  align-items:center;
}
.sortMenu .all:before{
  content: '';
  height: 25px;
  width: 1px;
  position: absolute;
  box-shadow: 1px 0px 1px #e0e0e0;
  left: 0px;
}
.sortMenu .all img{
  display: block;
  width: 16px;
}
.sortMenu .pull-down{
  position: absolute;
  top: 40px;
  height:auto;
  width: 100%;
  background: #fff;
  z-index: 1;
  border-top: 1px solid #f2f2f2;

}
.pull-down-sort{
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: space-around;
  flex-wrap: wrap;
  flex-direction: row
}
.pull-down-sort li{
  float: left;
  padding: .1rem
}
.pull-down-sort li a:hover{
  color: #ff474c;
}
.tab-cell{
    font-size:px2rem(30px);
    display:inline-block;
    margin-right:px2rem(30px);
    line-height:px2rem(30px);
   margin-top:-12px;

}



</style>