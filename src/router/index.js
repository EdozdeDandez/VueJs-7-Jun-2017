import Vue from 'vue'
import Router from 'vue-router'
import World from '@/components/World'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Get from '@/components/Get'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'World',
      component: World
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      meta: {auth: true}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {auth: false}
    },
    {
      path: '/get',
      name: 'get',
      component: Get,
      meta: {auth: true}
    },
    {
      path: '/post',
      name: 'Post',
      component: Post,
      meta: {auth: true}
    }
  ]
})
