import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Messages from './views/Messages.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/messages', component: Messages },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

