import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/accueil'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/accueil'
      },
      {
        path: 'accueil',
        component: () => import('@/views/Accueil.vue')
      },
      {
        path: 'city',
        component: () => import('@/views/City.vue')
      },
      {
        path: 'departement',
        component: () => import('@/views/Departement.vue')
      },
      {
        path: 'region',
        component: () => import('@/views/Region.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
