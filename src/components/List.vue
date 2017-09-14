<template>
  <div class="list">
    <template v-if="mold === 'thumbnail'" v-for="item in items">
      <router-link
        class="thumbnail"
        :to="{name: 'DetailView', params: { id: item.id }}">
        <div class="con">
          <img :src="item.image_hlarge" alt="cover">
          <h3>{{item.title}}</h3>
          <p>{{item.content | subStr}}</p>
        </div>
        <div class="author">
          <span class="name">{{item.category_name}}</span>
          <span class="label" v-if="item.subcategory_name">
            本活动来自栏目 {{item.subcategory_name}}
          </span>
        </div>
      </router-link>
    </template>
    <template v-if="mold === 'basic'">
      <ul class="basic">
        <li v-for="item in items">
          <a href="#">
            <h3>{{item.title}}</h3>
            <div class="info">{{item.comments}}</div>
          </a>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    mold: {
      type: String,
      default: 'basic'
    },
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    }
  },
  filters: {
    subStr: function (value) {
      let newVal = value.replace(/<.*?>/g, '')
      return newVal.slice(0, 30)
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../assets/css/function';
.list {
  .thumbnail {
    position: relative;
    display: block;
    background:white;
    padding: px2rem(25px) px2rem(18px) px2rem(25px) px2rem(18px);


    .con {
      overflow: hidden;
      padding-top:px2rem(10px);
      margin-bottom: px2rem(32px);
    }

    h3 {
      margin-top: 0;
      margin-bottom: px2rem(20px);
      line-height: 1.41;
      text-align: justify;
      font-size: px2rem(38px);
      font-weight: 500;
      color: #494949;
    }

    p {
      line-height: 1.5;
      text-align: justify;
      color: #aaa;
      font-size: px2rem(26px);
      overflow: hidden;
    }

    img {
      float: right;
      width: 25.6%;
      height: px2rem(230px);
      margin-left: px2rem(25px);
    }

    .author {
      font-size: px2rem(26px);
      color: #ccc;
    }

    .label {
      position: absolute;
      bottom: px2rem(25px);
      right: px2rem(18px);
    }
  }

  .thumbnail ~ .thumbnail::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: px2rem(2px);
    content:'';
    background: #e3e3e3;
  }

  .basic {
    h3 {
      padding: 0;
      line-height: 1.41;
      font-size: px2rem(26px);
      font-weight: 500;
      color: #494949;
    }

    .info {
      margin-top: px2rem(5px);
      font-size: px2rem(20px);
      color: #42bd56;
    }
  }
}
</style>
