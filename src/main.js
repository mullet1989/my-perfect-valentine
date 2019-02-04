import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import VueMaterial from 'vue-material'
import Choice from '@/components/Choice';
import Home from '@/components/Home';
import NotFound from '@/components/404';


Vue.use(VueMaterial);

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
    {path: '/', component: Home},
    {path: '/next/:id', component: Choice},
    {path: '*', component: NotFound}
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
});

new Vue({
    render: h => h(App),
    router: router,
}).$mount('#app');
