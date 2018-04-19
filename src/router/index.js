import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/homes/home.vue'
import Cadastro from '@/components/cadastro/cadastro'


Vue.use(Router)

export default new Router({
  mode:'history', // tirar o #
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro
    }
  ]
})

