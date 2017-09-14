# life-vue

> 一个活动平台，可以在app上发布活动，报名参加活动，旨在让用户去认识更多的朋友、参加活动，过更有趣的生活。

### 技术栈

#### 前台
> * vue
> * vue-router
> * vuex
> * vue-resource
> * es6
> * sass
> * localStorage
> * webpack

#### 后台
> * json-server

### [具体详情](https://carrie999.github.io/life-vue/disty/)   模拟手机预览查看


#### 问题和bug坑
> * webpack 无法打包json-server，所以打包后预览的数据都是静态的
> * 因为json-server的限制没办法使用post请求，json-server对图片的加载也不支持
> * github-pages 对http的引用无法加载，故需要把文件下载下来，本地引用加载
> * 关于城市插件，用webpack无法打包 pinyin 插件，网上说使用include加载插件，目前打包时把城市选择去掉了，项目文件依然有




## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
