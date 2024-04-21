<script setup lang="ts">
import animate from "animate.css";
import {HttpGet} from "@/api/http";
import {onMounted, ref, onActivated, onUnmounted, watch, reactive} from "vue";
import {SERVICE_ROUT, Response, Play, Video, HomeViewCard} from '../../util/type'
//import {formatTime, routerTo} from "../../util/util"
import route from "@/router/router";
import {TabsPaneContext} from "element-plus";
import * as http from "http";
import HomeMainHome from "@/components/home/main/home-main-home.vue";
import HomeUser from "@/components/home/user/home-main-manager-user.vue";
import {active} from '../../store/DataStore'
import HomeMsg from "@/components/home/msg/home-msg.vue";

import {userImage} from '../../store/UserSrore'
const player = ref(null)
let url=ref('')
const streamUrl = ref('')
const progressBar = ref(null)


// 在页面跳转之前记录滚动位置
const beforeRouteLeave = (to, from, next) => {
  // 在路由元信息中添加需要记录滚动位置的标志，例如 meta: { scrollToTop: true }
  if (from.meta.scrollToTop) {
    from.meta.savedScrollY = window.scrollY;
  }
  next();
};

// 在页面返回时重新设置滚动位置
const afterEach = (to, from) => {
  if (to.meta.scrollToTop) {
    // 利用 setTimeout 确保页面已经渲染完毕
    setTimeout(() => {
      window.scrollTo(0, from.meta.savedScrollY || 0);
    }, 0);
  }
};

const play=ref<Response<HomeViewCard[]>>(null)
//
// onMounted( async ()=>{
//   console.log("组件home激活");
//   try {
//
//     play.value=(await HttpGet(SERVICE_ROUT.VIDEO_INIT_GET)).data
//
//     setTimeout(()=>{
//       loading.value=!loading.value
//     },100)
//
//     if(play.value.status==404){
//       console.error("home页面错误：404")
//     }
//
//     console.log("得到的数据：play.value:",play.value)
//     console.log("得到的数据：play.value.body",play.value.body)
//     console.log("得到的数据：play.value.status",play.value.status)
//   }catch (e){
//     console.error("home页面错误：",e)
//   }
//
// })

// onUnmounted(async ()=>{
//   console.log("组件home销毁")
// })
const  to=()=>{
  route.push("/login")
  console.log("跳转login");
  
}

// 下面导航卡片
const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const textActive=ref(false)

//const active = ref(3);
//  动画控件
const fly=ref("")

watch(active,(newValue,oldValue)=>{
  if(newValue>oldValue){
    fly.value="fly-inR"
  }else {
    fly.value="fly-inL"
  }
})


// 输入框
const input=ref("")
const onSearch=()=>{
  // 回车
}

const errorHandler = () => true



//  骨架
const loading=ref(true)




// 标签页面
const Tap=ref(['推荐','动漫','生活','影视','其他'])
const Tap_active=ref(0)


/// 下拉刷新
async function  onRefresh(){
  play.value=(await HttpGet(SERVICE_ROUT.VIDEO_INIT_GET)).data
  count.value++;
  loading.value=false
  console.log("下拉刷新:",play.value)
}
const count=ref(0)
// https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png
</script>

<template>
<!--  &lt;!&ndash; <div>-->
<!--    <video ref="player" :src="streamUrl" @timeupdate="updateProgress" controls></video>-->
<!--    <progress ref="progressBar" max="100"></progress>-->
<!--  </div> &ndash;&gt;-->
<!--  <button @click="to">跳转login</button>-->
<!--  <div id="test">-->

<!--  </div>-->

  <div id="home">
    <div id="home-head" v-if="active!=3&&active!=2">

        <div id="home-user" @click="active=3">
            <van-image
                round
                height="10rem"
                width="10rem"
                :src="userImage"
            />
        </div>

<!--        <input placeholder="搜索"  id="home-search">-->
<!--        <div id="home-search-font">搜索</div>-->
      <van-search
          v-model="input"

          shape="round"
          background="#ffffff"
          placeholder="请输入搜索关键词"
          @search="onSearch"

      />
              <div id="home-search-font"><span>搜索</span></div>
<!--      <i id="home-el-icon" class="el-icon-search"></i>-->


    </div>
    <van-tabs v-model:active="Tap_active" scrollspy sticky title-active-color="#1989fa" swipeable="false"  v-show="active==0" >
      <van-tab v-for="(item,index) in Tap" :title="item" :key="index">

      </van-tab>

    </van-tabs>
    <div id="home-main">
<!--      <van-pull-refresh v-model="loading"  success-text="刷新成功" @refresh="onRefresh">-->

<!--      </van-pull-refresh>-->
<!--主页显示-->
      <home-main-home    v-show="active==0&&Tap_active==0"></home-main-home>
<!--        <view v-show="true"></view>-->

      <div id="home-main-qr"  :class="fly"  v-if="active==1">
        <div>home2</div>
        <van-skeleton>
          <template #template>


              <div :style="{ flex: 1, marginLeft: '16px' }">
                <van-skeleton-paragraph row-width="60%" />
                <van-skeleton-paragraph />
                <van-skeleton-paragraph />
                <van-skeleton-paragraph />

            </div>
          </template>
        </van-skeleton>

      </div>



      <div id="home-main-chat"    v-if="active==2">
        <home-msg></home-msg>

      </div>



      <div id="home-main-manager"   v-if="active==3">
        <home-user></home-user>
      </div>


    </div>

    <div id="home-bottom" v-if="false">
<!--      <el-badge :value="12" class="item">-->
<!--        <el-button>comments</el-button>-->
<!--      </el-badge>-->

<!-- 先关闭掉状态页面 -->
      <van-tabbar v-model="active" v-if="false">
        <van-tabbar-item icon="wap-home-o">主页</van-tabbar-item>
        <van-tabbar-item icon="qr">社区</van-tabbar-item>
        <van-tabbar-item icon="chat-o"  badge="20">消息</van-tabbar-item>
        <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<style  scoped >


@import "@/css/pc/home.css";
@import "@/css/mobile/home.css";

</style>

