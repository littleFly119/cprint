import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
    redirect: '/layout/help',
    component: () => import('../views/layout/index.vue'),
    children: [
      {
        path: 'help',
        name: 'help',
        component: () => import('../views/help/index.vue')
      },
      {
        path: 'print',
        name: 'print',
        component: () => import('../views/print/index.vue')
      },
      {
        path: 'printList',
        name: 'printList',
        component: () => import('../views/printList/index.vue')
      },
      {
        path: 'printLocal',
        name: 'printLocal',
        component: () => import('../views/printLocal/index.vue')
      },
      {
        path: 'scanList',
        name: 'scanList',
        component: () => import('../views/scanList/index.vue')
      },
      {
        path: 'useList',
        name: 'useList',
        component: () => import('../views/useList/index.vue')
      }
    ]
  },
  {
    path:'*',
    name:'notFound',
    component: () => import('../views/notFound/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
