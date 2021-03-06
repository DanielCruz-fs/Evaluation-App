// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Auth from './packages/auth/Auth.js'
import VueSweetalert2 from 'vue-sweetalert2'


Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Auth)
Vue.use(VueSweetalert2)
window.EventBus = new Vue()

Vue.http.options.root = 'http://localhost:8000'
//Vue.http.options.root = 'http://app-unifranz.herokuapp.com'
Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()

router.beforeEach(
   (to, from, next) => {
      if(to.matched.some(record => record.meta.forVisitors)) {
         if(Vue.auth.isAuthenticated()){
             next({
                 path: '/form'
             })
         } else next()
      } 
      else if(to.matched.some(record => record.meta.forAuth)) {
        if(!Vue.auth.isAuthenticated()){
            next({
                path: '/'
            })
        } else next()
     } 
      else next()
   }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


