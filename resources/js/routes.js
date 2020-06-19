import Dashboard from './components/admin/DashboardComponent.vue'
import Map from './components/admin/MapComponent.vue'

export const routes = [
    {
        path:'/',
        component:Dashboard
    },
    {
        path:'/map',
        component:Map
    },
];