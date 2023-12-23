
import {createRouter,createWebHashHistory} from "vue-router";
import home from "../components/home/home.vue";


const routes=[
    {
        path:'/home',
        component:home
    }
]

let route =createRouter({
    history:createWebHashHistory(),
    routes
})
export default route;