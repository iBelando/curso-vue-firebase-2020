import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter);

Vue.directive('alerta', {
  bind(el,binding) {
    el.style.color = 'red';
    el.style.fontSize = binding.value + 'px'
  }
})

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
