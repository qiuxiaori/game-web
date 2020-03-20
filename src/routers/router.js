import Vue from 'vue'
import Router from 'vue-router'
Vue.user(Router)
const Foo = require('.././components/Body.vue')
export default new Router({
  mode: 'history',
  routes: [
    { path: '/foo', component: Foo }
  ]
})
