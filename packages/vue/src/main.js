import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Plugins
import Unlabel from '@unlabel/vue'
import '@unlabel/vue/dist/tnt.css'
import '@unlabel/vue/src/assets/index.css'

// Global Components
import ApplicationLayout from './layouts/Application.vue'
// import AuthenticationLayout from './layouts/Authentication.vue'

Vue.component('ApplicationLayout', ApplicationLayout)
// Vue.component('authentication-layout', AuthenticationLayout)

Vue.use(Unlabel)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
