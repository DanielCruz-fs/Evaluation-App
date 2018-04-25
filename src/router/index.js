import Vue from 'vue'
import Router from 'vue-router'
import LoginApp from '@/components/LoginApp'
import FormApp from '@/components/FormApp'

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
       name: 'FormApp',
       component: FormApp,
       meta:{
         forAuth : true
       }
    }
  ]
})
