import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./components/LoginPage.vue";
import DashboardRoutes from "./views/Dashboardmodule/Dashboard";
import NotFound from './components/NotFound.vue'
import SettingRoutes from "./views/Settingsmodule/Settings";

const routes = [
    {
        path: "/",
        component: LoginPage,
        name: "LoginPage",
        meta: {
            isLoginPage: true
        },
        props: true
    },
    ...DashboardRoutes,
    ...SettingRoutes,
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;