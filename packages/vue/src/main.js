import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Unlabel from '@unlabel/vue'

import '@unlabel/vue/dist/tnt.css'
import '@unlabel/vue/src/assets/index.css'

Vue.use(Unlabel)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
