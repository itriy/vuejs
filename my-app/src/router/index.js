import Vue from 'vue'
import Router from 'vue-router'
import UserPage from '@/components/UserPage'
import UserEdit from '@/components/UserEdit'
import UserAdd from '@/components/UserAdd'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'UserPage',
      component: UserPage
    }, 
    {
        path: '/edit',
        name: 'UserEdit',
        component: UserEdit
    },
    {
        path: '/add',
        name: 'UserAdd',
        component: UserAdd
    }
  ]
})
