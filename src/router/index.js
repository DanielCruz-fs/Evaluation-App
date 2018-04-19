import Vue from 'vue'
import Router from 'vue-router'
import LoginApp from '@/components/LoginApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginApp',
      component: LoginApp
    }
  ]
})
