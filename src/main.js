import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import isAuth from './auth/auth';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css';
import ECharts from 'vue-echarts';
import VueGoogleCharts from 'vue-google-charts';
import VueApexCharts from 'vue3-apexcharts';



const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
});


const app = createApp(App);


app.use(VueGoogleCharts);


app.component('v-chart', ECharts);
app.use(VueApexCharts)
app.component('ApexChart', VueApexCharts);


app.use(router);
app.use(vuetify);


app.mount('#app');


router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => !record.meta.isLoginPage)) {
        if (!isAuth()) {
            next({ name: 'LoginPage' });
        } else {
            next();
        }
    } else {
        if (isAuth()) {
            next({ name: 'HomePage' });
        } else {
            next();
        }
    }
});
