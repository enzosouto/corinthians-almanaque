import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'capa',
      component: () => import('../pages/Home.vue'),
    },
    {
      path: '/indice',
      name: 'indice',
      component: () => import('../pages/Indice.vue'),
    },
    {
      path: '/historia',
      name: 'historia',
      component: () => import('../pages/Historia.vue'),
    },
    {
      path: '/temporadas',
      name: 'temporadas',
      component: () => import('../pages/Temporadas.vue'),
    },
    {
      path: '/temporadas/:ano',
      name: 'temporada-detalhe',
      component: () => import('../pages/TemporadaDetalhe.vue'),
      props: true,
    },
    {
      path: '/titulos',
      name: 'titulos',
      component: () => import('../pages/Titulos.vue'),
    },
    {
      path: '/idolos',
      name: 'idolos',
      component: () => import('../pages/Idolos.vue'),
    },
    {
      path: '/momentos',
      name: 'momentos',
      component: () => import('../pages/GrandesMomentos.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
