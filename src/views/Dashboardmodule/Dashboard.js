import HomePage from './HomePage.vue'



const DashboardRoutes = [
    {
        path: "/HomePage",
        component: HomePage,
        name: "HomePage",
        redirect: '/HomePage/DashBoard',
        children: [
            {
                path: 'UploadPage',
                component: () => import('./UploadsPage.vue'),
                name: 'UploadPage'
            },
            {
                path: 'DashBoard',
                component: () => import('./DashBoard.vue'),
                name: 'DashBoard'
            },
            {
                path: 'DiscountReport',
                component: () => import('./DiscountReport.vue'),
                name: 'DiscountReport'
            },
            {
                path: 'OcEnt',
                component: () => import('./OcEnt.vue'),
                name: 'OcEnt'
            }
            ,
            {
                path: 'ECharts',
                component: () => import('./ECharts.vue'),
                name: 'ECharts'
            },
            {
                path: 'ApexCharts',
                component: () => import('./ApexCharts.vue'),
                name: 'ApexCharts'
            },
            {
                path: 'GCharts',
                component: () => import('./GCharts.vue'),
                name: 'GCharts'
            }
        ]
    }
]
export default DashboardRoutes