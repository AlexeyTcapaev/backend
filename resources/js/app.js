require('./bootstrap');
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import store from './store/index'
import router from './router/index'
Vue.use(Vuetify)
const App = () =>
    import('./components/App.vue');
const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
