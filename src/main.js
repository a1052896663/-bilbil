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

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import {
    Skeleton,
    SkeletonTitle,
    SkeletonImage,
    SkeletonAvatar,
    SkeletonParagraph,
} from 'vant';




const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(Skeleton);
app.use(SkeletonTitle);
app.use(SkeletonImage);
app.use(SkeletonAvatar);
app.use(SkeletonParagraph);

app.use(router).use(createPinia()).use(Search).use(ElementPlus).use(TabbarItem).use(Tabbar).mount('#app')
