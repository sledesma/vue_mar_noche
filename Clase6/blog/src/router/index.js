import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Maestro',
    component: () => import(/* webpackChunkName: "maestro" */ '../views/Maestro.vue')
  },
  {
    path: '/detalle/:id',
    name: 'Detalle',
    component: () => import(/* webpackChunkName: "detalle" */ '../views/Detalle.vue')
  }
]

const router = createRouter({
  //history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
