import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App'
import axios from 'axios'
import router from 'router'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Antd)
Vue.use(router)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App)
}).$mount('#app')
