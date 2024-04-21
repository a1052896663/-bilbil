<script setup lang="ts">
import {onMounted, ref} from "vue";
import {Response, SERVICE_ROUT, Video, HomeViewCard, ViewUserCard} from "../../../util/type";
import {HttpGet} from "@/api/http";
import {viewVideoId} from '../../../store/DataStore'
import {formatTime} from '../../../util/util'
import route from "../../../router/router.js";
import {showToast} from "vant";

const play=ref<Response<HomeViewCard[]>>()
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

    await EnrollInit()

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


// const view= document.getElementById('view')
// console.log("view dom:",view)
// const handleScroll = (e) => {
//   let el = e.target
//
//
//   if (Number(el.scrollTop + el.clientHeight).toFixed(0) == el.scrollHeight) {
//     //console.log(currentPage.value, "yema");
//     // currentPage.value++
//     console.log("滚动到底部")
//     //etchDatas()
//   }
// }
// view.addEventListener('scroll', handleScroll );


async function EnrollInit(){ // 注册shij

  try {
    const handleScroll =async (e) => {
      let el = e.target
    //  console.log("滚动")

      if (Number(el.scrollTop + el.clientHeight).toFixed(0) == el.scrollHeight) {
        console.log("滚动到底部")
       const rep:Response<HomeViewCard[]>= await (await HttpGet(SERVICE_ROUT.VIDEO_INIT_GET)).data

         if(rep.status==200){
           rep.body.pop() // 只要10 条数据
           console.log("添加新数据：",rep.body)
          play.value.body.push(...rep.body)
        }


      }
    }
    const homeMainDom=document.getElementById('home-main-home')
    console.log("dom:",homeMainDom)
    homeMainDom.addEventListener('scroll', handleScroll );
  }catch (e){
    console.error(e)
  }

}



// 上拉刷新
const count = ref(0);
const loading2 = ref(false);
const onRefresh = () => {
  setTimeout(() => {
    showToast('刷新成功');
    loading.value = false;
    count.value++;
  }, 1000);
};


</script>

<template>

<!--  <van-pull-refresh v-model="loading2" @refresh="onRefresh">-->
<!--    <p>刷新次数: {{ count }}</p>-->

  <div id="home-main-home"  >


<!--        <p>刷新次数: {{ count }}</p>-->
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