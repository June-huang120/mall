/**
 * Created by Administrator on 2021/5/13.
 */
import Router from 'vue-router'
import Vue from 'vue'

const Home = ()=>import('views/Home/Home.vue')
const Category = ()=>import('views/Category/Category.vue')
const Shopcart = ()=>import('views/Shopcart/Shopcart.vue')
const Profile = ()=>import('views/Profile/Profile.vue')
const Details = ()=>import('views/Details/Details.vue')

Vue.use(Router)

//避免多次访问路由重复报错
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/details/:id',
    component: Details
  }
]

export default new Router({
  routes,
  mode: 'history'
})