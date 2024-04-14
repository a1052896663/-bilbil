<script setup lang="ts">
import {onMounted, ref} from "vue";
import {Resonse, SERVICE_ROUT, Video, HomeViewCard} from "../../../util/type";
import {HttpGet} from "@/api/http";
import {viewVideoId} from '../../../store/DataStore'
import {formatTime} from '../../../util/util'
import route from "../../../router/router.js";

const play=ref<Resonse<HomeViewCard[]>>()
console.log("进入home-main")
//初始化
function InitPlay():void{
  play.value={body: [], status: 0}
  for(let i=0;i<11;i++){
    let video:HomeViewCard={}

    play.value.body.push(video)
  }

}
InitPlay()
//  骨架
const loading=ref(true)

onMounted( async ()=>{
  InitPlay()
  console.log("组件home激活");
  try {


      play.value=(await HttpGet(SERVICE_ROUT.VIDEO_INIT_GET)).data


    console.log("获得数据：HomeViewCard：",play.value)

    if(play.value.status==200){
      loading.value=false
    }
    if(play.value.status==404){
      console.error("home页面错误：404")
    }



  }catch (e){
    if(e.code === 'ECONNABORTED'){
      console.error("请求超时")
    }
    console.error("home页面错误：",e)
  }

})


function toViewVideo(id:number) {
  viewVideoId.value=id
  route.push('/view')

}
</script>

<template>

  <div id="home-main-home"  >



    <div  v-show="play&& play.body" @click="toViewVideo(item.videoId)"  v-for="(item,index) in play.body" :key="index" class="home-main-home-item">
      <van-skeleton   :row="3" :loading="loading" class="home-main-home-loading" title-width="90%">
        <template #template>


          <div :style="{ flex: 1, marginLeft: '16px' }">
            <van-skeleton-paragraph row-width="60%" :style="index==0? 'width: 124%;height: 73%; margin-left: -5rem;background: white;':  'width: 124%;height: 61%; margin-left: -5rem;background: white;'" />
            <van-skeleton-paragraph />
            <van-skeleton-paragraph />


          </div>
        </template>
        <div class="home-main-home-image">
          <!--            图片当作背景-->
          <van-image
              width="100%"
              height="100%"
              :src="item.imageSrc"
          />
<!--          <img class="home-main-home-image-url" :src="item.coverImageUrl">-->
          <div class="home-main-home-image-url-m"> </div>
          <div class="home-main-home-item-font">
            <el-icon :size="index==0?'7rem':'5rem'" style="margin-right: 1rem" color="white"><VideoPlay/></el-icon>
            <span class="home-main-home-item-viwe"> {{item.playback}}</span>
            <div class="home-main-home-item-font-time">
              <!--                时间-->
              <span>{{formatTime(item.time)}}</span>
            </div>
          </div>


        </div>

        <div class="home-main-home-item-title">
          <!--            标题-->
          <div class="home-main-home-item-title-conter" >

            {{item.title}}
          </div>
          <!--            作者-->
          <div class="home-main-home-item-title-user">

            <el-icon :size="index==0?'5rem':'4rem'"  ><User /></el-icon>
            <div class="home-main-home-item-title-user-name">
              {{item.userName}}
            </div>

          </div>
        </div>
        <!--            标题-->
        <!--            作者-->
      </van-skeleton>
    </div>

  </div>

</template>

<style scoped>
@import "@/css/mobile/home-main-home.css";

</style>