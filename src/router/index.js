import Vue from 'vue'
import Router from 'vue-router'
import LoginApp from '@/components/LoginApp'
import Feed from '@/components/Form'

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
       component: Feed
    }
  ]
})
