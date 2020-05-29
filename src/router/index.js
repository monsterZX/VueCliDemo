import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import nprogress from 'nprogress' // 引入进度条效果

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,form,next)=>{
  nprogress.start()
  next()
})

router.afterEach((to,form) => {
  nprogress.done()
})
export default router
