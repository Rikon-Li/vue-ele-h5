import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: ()=>import(/* webpackChunkName: "main" */'../views/Main'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: ()=>import(/* webpackChunkName: "home" */'../views/Home'),

      },
      {
        path: 'orders',
        name: 'orders',
        component: ()=>import(/* webpackChunkName: "orders" */'../views/Orders')
      },
      {
        path: 'personal',
        name: 'personal',
        component: ()=>import(/* webpackChunkName: "personal" */'../views/Personal')
      },
      {
        path: 'Detail',
        name: 'detail',
        component: ()=>import(/* webpackChunkName: "detail" */'../views/Detail')
      }
    ]
  },
  {
    path: '**',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
