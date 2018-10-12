import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
// import 'babel-polyfill'

//引用es6的新特性 import()的来实现按需加载，webpack的require,ensure()就是按照正则使用import()来实现的
const home  = () =>  import('../components/home.vue')
const table = () =>   import('../components/table.vue')
const losePage = () =>  import('../components/404.vue')
let router = new VueRouter({
    routes: [,
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: home,
            meta: {
                requireAuth: false
            },
        },
        {
            path: '/table',
            name: 'table',
            component: table,
            meta: {
                requireAuth: false
            },

        },
        {
            path: '/losePage',
            name: 'losePage',
            component: losePage,
            meta: {
                requireAuth: false
            },

        },
        {
            path: '*',
            redirect: '/losePage'
        },
    ]

})

export default router