import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vuetify from 'vuetify' 


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vacunacion',
    name: 'Vacunacion',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Vacunacion.vue')
  },
  {
    path: '/principal',
    name: 'Principal',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Principal.vue')
  },
  {
    path: '/formulario1',
    name: 'Formulario1',
  
    component: () => import(/* webpackChunkName: "about" */ '../components/Formulario1.vue')
  },

  {
    path: '/pedircita',
    name: 'Pedircita',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Pedircita.vue')
  },

  {
    path: '/informacion',
    name: 'Informacion',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Informacion.vue')
  },
  {
    path: '/preguntasfrecuentes',
    name: 'Preguntasfrecuentes',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Preguntasfrecuentes.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
