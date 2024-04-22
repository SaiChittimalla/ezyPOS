
import OutletPage from "./OutletPage.vue";
import PrintSetting from "./PrintSetting.vue";
import SettingPage from "./SettingPage.vue";



const SettingRoutes = [
    {
        path: '/SettingPage',
        component: SettingPage,
        name: 'SettingPage',
        redirect: '/SettingPage/PrintSetting',
        children: [

            {
                path: 'PrintSetting',
                name: "PrintSetting",
                component: PrintSetting
            },
            {
                path: 'OutletPage',
                component: OutletPage,
                name: 'OutletPage'
            }
        ]
    }
]
export default SettingRoutes