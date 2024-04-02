<script setup lang="ts">
import {onMounted, ref} from "vue";
import {Resonse, SERVICE_ROUT, Video} from "../../../util/type";
import {HttpGet} from "@/api/http";

const play=ref<Resonse<Video[]>>()
//初始化
function InitPlay():void{
  play.value={body: [], status: 0}
  for(let i=0;i<11;i++){
    let video:Video={}

    play.value.body.push(video)
  }

}
//  骨架
const loading=ref(true)

onMounted( async ()=>{
  InitPlay()
  console.log("组件home激活");
  try {

    play.value=(await HttpGet(SERVICE_ROUT.VIDEO_INIT_GET)).data

    setTimeout(()=>{
      loading.value=!loading.value
    },5000)

    if(play.value.status==404){
      console.error("home页面错误：404")
    }

    console.log("得到的数据：play.value:",play.value)
    console.log("得到的数据：play.value.body",play.value.body)
    console.log("得到的数据：play.value.status",play.value.status)
  }catch (e){
    console.error("home页面错误：",e)
  }

})
</script>

<template>

  <div id="home-main-home"  >



    <div  v-if=" play&& play.body"  v-for="(item,index) in play.body" :key="index" class="home-main-home-item">
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
              :src="item.coverImageUrl"
          />
<!--          <img class="home-main-home-image-url" :src="item.coverImageUrl">-->
          <div class="home-main-home-image-url-m"> </div>
          <div class="home-main-home-item-font">
            <el-icon :size="index==0?'7rem':'5rem'" style="margin-right: 1rem" color="white"><VideoPlay/></el-icon>
            <span class="home-main-home-item-viwe"> 20</span>
            <div class="home-main-home-item-font-time">
              <!--                时间-->
              <span>06:30</span>
            </div>
          </div>


        </div>

        <div class="home-main-home-item-title">
          <!--            标题-->
          <div class="home-main-home-item-title-conter" >

            【IGN】9.0分，《黑啊之魂》评测：一部不可多得的魂类游戏巨作
          </div>
          <!--            作者-->
          <div class="home-main-home-item-title-user">

            <el-icon :size="index==0?'5rem':'4rem'"  ><User /></el-icon>
            <div class="home-main-home-item-title-user-name">
              ING中国
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