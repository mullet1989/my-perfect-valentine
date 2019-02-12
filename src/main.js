import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import VueMaterial from 'vue-material';
import Choice from '@/components/Choice';
import NotFound from '@/components/404';
import Heart from '@/components/heart';

Vue.use(VueMaterial);
Vue.use(Vuex);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
    {path: '/', redirect: '/next/0'},
    {path: '/next/10', component: Heart}, // show this on the 10th
    {path: '/next/:id', component: Choice},
    {path: '*', component: NotFound}
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
});

const store = new Vuex.Store({
    state: {
        step: 0,
        options: [
            {
                title: 'City',
                choices: [{text: 'London', desc: '🏴󠁧󠁢󠁥󠁮󠁧󠁿'}, {text: 'New York', desc: '🇺🇸󠁧󠁢󠁥󠁮󠁧󠁿'}]
            },
            {
                title: 'Running',
                choices: [{text: 'Track', desc: '󠁧󠁢󠁥󠁮󠁧󠁿'}, {text: 'Cross-Country', desc: '󠁧󠁢󠁥󠁮󠁧󠁿'}]
            },
            {
                title: 'Milers',
                choices: [{text: 'Klosterhalfen', desc: '󠁧󠁢󠁥󠁮󠁧󠁿'}, {text: 'Kejelcha', desc: '󠁧󠁢󠁥󠁮󠁧󠁿'}]
            },
            {
                title: 'Color',
                choices: [{text: 'Yellow', desc: '💛󠁧󠁢󠁥󠁮󠁧󠁿'}, {text: 'Red', desc: '❤️󠁧󠁢󠁥󠁮󠁧󠁿'}]
            },
            {
                title: 'Programming',
                choices: [{text: 'Scala', desc: '󠁧󠁢󠁥󠁮󠁧󠁿'}, {text: '.NET', desc: '️󠁧󠁢󠁥󠁮󠁧󠁿'}]
            },
            {
                title: 'Parks',
                choices: [{text: 'Richmond Park', desc: '󠁧󠁢󠁥󠁮󠁧󠁿'}, {text: 'Central Park', desc: '️󠁧󠁢󠁥󠁮󠁧󠁿'}]
            },
            {
                title: 'Time ⏱️',
                choices: [{text: 'Morning run', desc: '󠁧󠁢󠁥󠁮󠁧󠁿'}, {text: 'Evening run', desc: '️󠁧󠁢󠁥󠁮󠁧󠁿'}]
            },
            {
                title: 'Who\'d more likely eat worms?',
                choices: [{text: 'Sean Dyche', desc: '󠁧󠁢󠁥󠁮󠁧󠁿'}, {text: 'Claudio Ranieri', desc: '️󠁧󠁢󠁥󠁮󠁧󠁿'}]
            },
            {
                title: 'Training session',
                choices: [{text: 'Home Park Road', desc: '󠁧󠁢󠁥󠁮󠁧󠁿'}, {text: 'Bath Gate Road', desc: '️󠁧󠁢󠁥󠁮󠁧󠁿'}]
            },
            {
                title: 'Surname',
                choices: [{text: 'Toomer', desc: '󠁧󠁢󠁥󠁮󠁧󠁿'}, {text: 'Brandley', desc: '️󠁧󠁢󠁥󠁮󠁧󠁿'}]
            }
        ]
    },
    mutations: {
        incrementStep(state) {
            state.step++;
        },
        setStep(state, number) {
            state.step = number;
        }
    },
    getters: {
        step: state => {
            return state.step;
        },
        option: state => step => {
            return state.options[step];
        }
    }
});

new Vue({
    render: h => h(App),
    router: router,
    store: store,
}).$mount('#app');
