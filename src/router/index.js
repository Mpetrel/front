import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import SearchResult from '@/views/SearchResult'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/search',
      name: 'SearchResult',
      component: SearchResult
    }
  ]
})
