import Vue from "vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter);
const index = () =>
    import('../components/Index.vue');
const form = () =>
    import('../components/Form.vue');
const table = () =>
    import('../components/Table.vue');
const seek = () =>
    import('../components/Seek.vue');
export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'index',
        component: index,
        children: [{
                path: '/table',
                name: 'table',
                component: table
            },
            {
                path: '/form',
                name: 'form',
                component: form
            },
            {
                path: '/seek',
                name: 'seek',
                component: seek
            }
        ]
    }]
});
