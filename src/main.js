import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from '../src/vuex/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueAxios,axios);
Vue.use(VueCookie);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
