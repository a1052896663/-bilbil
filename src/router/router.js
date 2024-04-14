
import {createRouter,createWebHashHistory} from "vue-router";
import home from "../components/home/home.vue";
import   login from "../components/login/login.vue";
import view from "@/components/view/view.vue";
import search from "@/components/home/search/search-view.vue"

import ommentSection from "@/components/comment/comment-section.vue"
import timeView from "@/components/time/time-view.vue";
import homeMsgHead from "@/components/home/msg/home-msg-head.vue";
import userVideoUploder from "@/components/home/user/user-video-uploder.vue";
const routes=[
    {
        path:'/home',
        component:home,
        meta: { keepAlive: true }
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
    },
    {
        path: '/timeView',
        component: timeView
    },
    {
        path: '/homeMsgHead',
        component: homeMsgHead
    },
    {
        path: '/userVideoUploder',
        component: userVideoUploder
    }
]

let route =createRouter({
    history:createWebHashHistory(),
    routes
})
export default route;