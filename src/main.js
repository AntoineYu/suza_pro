import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

// Vue.use(VueAwesomeSwiper)

// import 'swiper/dist/css/swiper.css'

// Vue.prototype.$axios = Axios
// Axios.defaults.baseURL = '/api'
// Axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
