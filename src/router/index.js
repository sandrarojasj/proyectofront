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
    path: '/formulario_vacunados',
    name: 'Formulario_vacunados',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Formulario_vacunados.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
