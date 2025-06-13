import Contato from '@/pages/Contato.vue'
import Home from '@/pages/Home.vue'
import Produtos from '@/pages/Produtos.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/contato', component: Contato, name: 'Contato' },
    { path: '/', component: Home, name: 'Home' },
    { path: '/produtos', component: Produtos, name: 'Produtos' },

  ],
})

export default router
