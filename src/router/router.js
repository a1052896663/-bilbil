
import {createRouter, createWebHashHistory, onBeforeRouteLeave} from "vue-router";
import home from "../components/home/home.vue";
import   login from "../components/login/login.vue";
import view from "@/components/view/view.vue";
import search from "@/components/home/search/search-view.vue"

import ommentSection from "@/components/comment/comment-section.vue"
import timeView from "@/components/home/user/time/time-view.vue";
import homeMsgHead from "@/components/home/msg/home-msg-head.vue";
import userVideoUploder from "@/components/home/user/user-video-uploder.vue";
import router  from "@/components/view/router.vue";
import {onActivated} from "vue";
import userSetting from "@/components/home/user/user-setting.vue";
import userDynamic from "@/components/home/user/user-dynamic.vue";
import userSettingVideo from "@/components/home/user/user-setting-video.vue";
import userSettingVideoSetting from "@/components/home/user/user-setting-video-setting.vue";
import homeSpaceAdd from "@/components/home/space/home-space-add.vue";
import homeSpaceSelect from "@/components/home/space/home-space-select.vue";


const routes=[
    {
        path:'/home',
        name:'home',
        component:home,
        meta: { keepAlive: true }
    },

    {
        path:'/login',
        component:login,
        name:'login'
    },
    {
        path: '/view',
        component: view,
        name:'view',
        meta: { keepAlive: false }
    },
    {
        path: '/search',
        component: search,
        name:'search'
    },
    {
        path: '/ommentSection',
        component: ommentSection,
        name:'ommentSection',
        meta: { keepAlive: false }
    },
    {
        path: '/timeView',
        component: timeView,
        name:'timeView'
    },
    {
        path: '/homeMsgHead',
        component: homeMsgHead,
        name:'homeMsgHead'
    },
    {
        path: '/userVideoUploder',
        name:'userVideoUploder',
        component: userVideoUploder
    },
    {
      path: '/route',
        name: 'route',
        meta: { keepAlive: false },
        component: router
    },
    {
        path: '/userSetting',
        component: userSetting
    },
    {
        path: '/userDynamic',
        component: userDynamic
    },
    {
        path: '/userSettingVideo',
        component: userSettingVideo
    },
    {
        path: '/userSettingVideoSetting',
        component: userSettingVideoSetting
    },
    {
        path: '/homeSpaceAdd',
        component: homeSpaceAdd
    },
    {
        path: "/homeSpaceSelect",
        component: homeSpaceSelect
    }
]

let route =createRouter({
    history:createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
})



// const router = createRouter({
//     history: createWebHistory(baseUrl),
//     routes: [...],
//     scrollBehavior(to, from, savedPosition) {
//         if (savedPosition) {
//             return savedPosition;
//         } else {
//             return { top: 0 };
//         }
//     },
// })


// // 跳转路由守卫
// onBeforeRouteLeave((to, from, next) => {
//     // 将当前位置进行一个状态保存
//     cars.remeberScroll = document.documentElement.scrollTop
//     next()
// })
// //   组件激活
// onActivated(() => {
//     if (cars.remeberScroll != null && cars.remeberScroll > 0) {
//         console.log(111)
//         document.documentElement.scrollTop = cars.remeberScroll
//         document.body.scrollTop = cars.remeberScroll
//     }
// })

export default route;