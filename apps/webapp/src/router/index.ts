import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
  Router,
} from 'vue-router'

import Dashboard from '../views/dashboard.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/sheet/:id',
    name: 'sheet',
    component: () => import('../views/sheet.vue'),
    props: true,
  },
]

export const createAppRouter = () => {
  const router: Router = createRouter({
    routes: routes,
    history: createWebHashHistory(),
  })
  
  return router
}
