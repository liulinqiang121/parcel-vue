import Vue from "vue/dist/vue.common.js"
import vueRouter from 'vue-router'
import router from './router/router'
import ElementUI from 'element-ui'
import App from './App.vue'
import './style/base.css'
Vue.use(vueRouter)
Vue.use(ElementUI)
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})