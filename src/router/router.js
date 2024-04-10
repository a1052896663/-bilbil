
import {createRouter,createWebHashHistory} from "vue-router";
import home from "../components/home/home.vue";
import   login from "../components/login/login.vue";
import view from "@/components/view/view.vue";
import search from "@/components/home/search/search-view.vue"

import ommentSection from "@/components/comment/comment-section.vue"
const routes=[
    {
        path:'/home',
        component:home
    },
    {
        path:'/login',
        component:login
    },
    {
        path: '/view',
        component: view,
    },
    {
        path: '/search',
        component: search
    },
    {
        path: '/ommentSection',
        component: ommentSection
    }
]

let route =createRouter({
    history:createWebHashHistory(),
    routes
})
export default route;