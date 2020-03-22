import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

Vue.use(Router)    // Vue实例引用路由模块
const ROUTES = [
  { path: '/',redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/category', component: Category },
  { path: '/cart', component: Cart },
  { path: '/profile', component: Profile },
]

const ROUTER = new Router({
  routes: ROUTES,
  mode: 'history'
});

export default ROUTER;
