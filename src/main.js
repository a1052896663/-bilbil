import './assets/main.css'
//import './store/RouterStore.js'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import router from "./router/router.js"


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'vant/lib/index.css';
import { Tabbar, TabbarItem ,Search } from 'vant';


import App from './App.vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import {
    Skeleton,
    SkeletonTitle,
    SkeletonImage,
    SkeletonAvatar,
    SkeletonParagraph,
} from 'vant';
import { Tab, Tabs } from 'vant';
import { NavBar } from 'vant';
import { Image as VanImage } from 'vant';

import { Button } from 'vant';

import { Field, CellGroup } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { Toast } from 'vant';


import { Collapse, CollapseItem } from 'vant';

const app = createApp(App)

//const pian=
app.use(createPinia())

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

import { PullRefresh } from 'vant';
import NPlayer from "@nplayer/vue";
import { Icon } from 'vant';
import { Divider } from 'vant';
import { Tag } from 'vant';
import { ShareSheet } from 'vant';
import { NoticeBar } from 'vant';
import { Popup } from 'vant';
import { TextEllipsis } from 'vant';
import V3Emoji from 'vue3-emoji'

import { List } from 'vant';

import { Uploader } from 'vant';


app.use(Uploader)
app.use(List);

app.use(V3Emoji)
app.use(ShareSheet);

app.use(NoticeBar);

app.use(PullRefresh);

app.use(Popup);

app.use(TextEllipsis);

app.use(Tag);

app.use(Icon)

app.use(Divider);

app.use(Button)

app.use(VanImage);
app.use(Skeleton);
app.use(SkeletonTitle);
app.use(SkeletonImage);
app.use(SkeletonAvatar);
app.use(SkeletonParagraph);

app.use(Toast);

app.use(Radio);
app.use(RadioGroup);

app.use(Collapse);
app.use(CollapseItem);

app.use(Tab);
app.use(Tabs);

app.use(NavBar);

app.use(NPlayer);




app.use(Field);
app.use(CellGroup);

app.use(NPlayer, { name: 'NPlayer' })


//console.log("pian--:",pian)

app.use(router).use(Search).use(ElementPlus).use(TabbarItem).use(Tabbar).mount('#app')
