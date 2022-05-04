import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import { router } from './router/router'

Vue.config.productionTip = false

// Vue.use(vuetify)

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
