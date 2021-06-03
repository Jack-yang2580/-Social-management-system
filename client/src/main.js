import Vue from 'vue';
import App from './App';
import router from './router';
import axios from './utils/http';
import store from './store';

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
});