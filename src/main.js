import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App'
import axios from 'axios'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import myrouter from './routers/router'
Vue.use(VueAxios, axios)
Vue.use(Antd)
Vue.use(VueRouter)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

const router = new VueRouter({ myrouter })
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
