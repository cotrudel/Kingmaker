import Dashboard from './components/admin/DashboardComponent.vue'
import Map from './components/admin/MapComponent.vue'

export const routes = [
    {
        path:'/',
        name:'dashboard',
        component:Dashboard
    },
    {
        path:'/map',
        name:'map',
        component:Map
    },
];