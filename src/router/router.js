
import {createRouter,createWebHashHistory} from "vue-router";
import home from "../components/home/home.vue";
import   login from "../components/login/login.vue";

const routes=[
    {
        path:'/home',
        component:home
    },
    {
        path:'/login',
        component:login
    }
]

let route =createRouter({
    history:createWebHashHistory(),
    routes
})
export default route;