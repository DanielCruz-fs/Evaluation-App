import Vue from 'vue'
import Router from 'vue-router'
import LoginApp from '@/components/LoginApp'
import FormApp from '@/components/FormApp'
import SelectApp from '@/components/SelectApp'
import CheckApp from '@/components/CheckApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginApp',
      component: LoginApp,
      meta: {
         forVisitors: true
      }
    },
    {
       path: '/form',
       component: FormApp,
       meta:{
         forAuth : true
       },
       children: [
         {
             path: '',
             component: SelectApp
         },
         {
             path: 'check',
             component: CheckApp
         }
       ]
    }
  ]
})
