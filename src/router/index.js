import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home'
import Activity from '../pages/Activity'
import Find from '../pages/Find'
import Detail from '../pages/Detail'
import User from '../pages/User'
import Login from '../pages/Login'
import Regist from '../pages/Regist'
import UserInfo from '../pages/UserInfo'
import Set from '../pages/Set'
import Post from '../pages/Post'
import UserMsg from '../pages/UserMsg'
import Navbar from '../pages/Navbar'
import NotFound from '../pages/NotFound'
import Periphery from '../pages/Periphery'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/activity',
      name: 'activity',
      component: Activity
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/activity/:id',
      name: 'detail',
      component: Detail
    },
     {
      path: '/find/periphery',
      name: 'periphery',
      component: Periphery
    },
      {
      path: '/find/:id',
      name: 'detail',
      component: Detail
    },

    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
			path: '/user/login',
			component: Login
		},
		{
			path: '/user/regist',
			component: Regist
		},
		{
			path: '/user/info',
			component: UserInfo
		},
		{
			path: '/user/set',
			component: Set
		},
		{
			path: '/user/post',
			component: Post
		},
		{
			path: '/user/msg',
			component: UserMsg
		},
    {
			path: '/user/navbar',
			component: Navbar
		},
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
