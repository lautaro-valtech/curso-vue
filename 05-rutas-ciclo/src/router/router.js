import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '@/modules/pokemon/pages/HomePage'
import AboutPage from '@/modules/pokemon/pages/AboutPage'
import PokemonDetailPage from '@/modules/pokemon/pages/PokemonDetailPage'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/id', component: PokemonDetailPage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router