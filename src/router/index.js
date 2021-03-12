import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Dashboard from '../views/Dashboard.vue'
import UsersCreate from '../views/UsersCreate.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (store.getters['auth/authenticated']) {
        return next({ name: 'dashboard' })
      }
      next()
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/authenticated']) {
        return next({ name: 'signin' })
      }

      next()
    }
  },

  {
    path: '/users/create',
    name: 'userscreate',
    component: UsersCreate,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/authenticated']) {
        return next({ name: 'signin' })
      }

      next()
    }
  },

  {
    path: '*',
    name: 'NotFound',
    redirect: { name: 'home' }
  },
  
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
})

export default router
