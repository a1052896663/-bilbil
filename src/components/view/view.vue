<script setup lang="ts">


import {onMounted, ref, watch} from "vue";
import Danmaku from "@nplayer/danmaku";
import route from "@/router/router";


//  <----- 视频播放器相关

// 弹幕元素
const danmakuOptions = {
  items: [
    { time: 1, text: '弹幕～' }
  ]
}





const danmaku= new Danmaku(danmakuOptions);


// 播放数据
let player={
  src: 'http://127.0.0.1:9000/video/4/03348210-1188-4668-9750-f2c220fdc532.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=4MB8URZOWR6MCNSIDLFB%2F20240402%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240402T133508Z&X-Amz-Expires=604800&X-Amz-Security-Token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NLZXkiOiI0TUI4VVJaT1dSNk1DTlNJRExGQiIsImV4cCI6MTcxMjA3NzA0NCwicGFyZW50IjoiYWRtaW4ifQ.Lf9AD7-ptB5Gvw0Ff-6HuMrv2Msqe_bmPFgGI6WZ_RNouCGgm2xCYjkUZPiUmKx1W9GPNyAtiHqb5QJgVSxVjw&X-Amz-SignedHeaders=host&versionId=null&X-Amz-Signature=da4008a8ddc0c56dfbed4945caf34208ef94b8649732e7594897f416dbdbda82',

  plugins: [
    danmaku
  ],


}

// 构造函数
const setPlayer= (p) => {
    p.on('DanmakuSend', (opts) => {
     console.log("接收的弹幕：",opts)
     });

    player = p;
}

const options=ref(player)

//  -----> 视频播放器相关

//  <----- tab页面相关
const active=ref(0)
const tab=ref(['简介','评论'])



function TabTo(to:number){
  active.value=to
}
//  -----> tab页面相关

// 切换选择页面
</script>

<template>
    <div id="view">
      <div id="view-head">
        <van-nav-bar
            title="标题"
            left-text="返回"
            left-arrow
            @click-left="route.back();"
        />
      </div>

      <div>
        <NPlayer
            :options="options"
            :set="setPlayer"
        />
      </div>


      <div>
        <div id="view-select">
          <button @click="TabTo(0)">切换1</button>
          <button @click="TabTo(1)">切换2</button>
          <div  id="view-van-tabs-input2" ></div>
        </div>

        <van-tabs v-model:active="active" animated  id="view-van-tabs" title-active-color="#0264e7" ellipsis="false"  shrink="true">

          <van-tab v-for="(item,index) in tab" :title="item" :key="index">
            <div id="view-user"  v-if="active==0">
              {{item}}
            </div>
            <div id="view-comments"  v-if="active==1" >
              {{item}}
            </div>

          </van-tab>

        </van-tabs>

      </div>



<!--      <van-tabs v-model:active="active" title-active-color="#0264e7" ellipsis="false"  shrink="true">-->
<!--        <van-tab v-for="index in 2">-->
<!--          <template #title >-->
<!--            <van-icon name="more-o" />选项-->

<!--          </template>-->
<!--          <div v-if="index==2" id="view-van-tabs-input2"> </div>-->
<!--          内容 {{ index }}-->
<!--        </van-tab>-->
<!--      </van-tabs>-->

<!--      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">-->
<!--        <el-tab-pane label="User" name="first">User</el-tab-pane>-->
<!--        <el-tab-pane label="Config" name="second">Config</el-tab-pane>-->
<!--        <el-tab-pane label="Role" name="third">Role</el-tab-pane>-->
<!--        <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>-->
<!--        <div  id="view-van-tabs-input2"> </div>-->
<!--      </el-tabs>-->
    </div>
</template>

<style scoped>
@import "@/css/mobile/view.css";
@import "@/css/pc/view.css";
</style>