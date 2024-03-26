import './assets/main.css'

import { createApp } from 'vue'
import router from "./router/router.js"
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'vant/lib/index.css';
import { Tabbar, TabbarItem ,Search } from 'vant';
import 'animate.css/animate.min.css'
import App from './App.vue'

createApp(App).use(router).use(createPinia()).use(Search).use(ElementPlus).use(TabbarItem).use(Tabbar).mount('#app')
