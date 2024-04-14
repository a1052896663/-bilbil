<script setup lang="ts">

import route from "@/router/router.js";
import {Play, SERVICE_ROUT} from '../../../util/type'
import {ref} from "vue";

import {HttpFile} from "../../../api/http";
import {formatDateTime} from "@/util/util";
const visible=ref(true)
function OnClickBar(){
  visible.value=false
  setTimeout(()=>{
    route.back()
  },200)

}


const play:Play={
  video: {




    title:"文件上传测试"+formatDateTime(Date.now()),
    brief:"上传测试",
    label:"java;c++",
    date:Date.now() // 日期

  }

}


const fileList = ref([]);

const progressVue=ref(0)
const video=ref(null)
const image=ref(null)
const formData=new FormData();
const afterRead = async (file) => {

  video.value=file.file
  formData.append('video',file.file)

  console.log("视频对象构建成功")



};
const afterRead2 = async (file) => {

  image.value=file.file
  formData.append('coverImage',file.file)
  console.log("图片对象构建成功")





};


const Upload=async ()=>{
  console.log("开始上传")
  formData.append("play",JSON.stringify(play))
 // formData.append("play",JSON.stringify(play))

  if(!(video||video.value||image||image.value)){
    console.error("文件正在构建")
  }
  setInterval(()=>{
    console.log("上传进度:",progressVue.value)
  },500)
  await HttpFile(SERVICE_ROUT.VIDEO_UPLOAD_POST,formData,progressVue)
}

</script>

<template>
  <transition name="van-slide-right">
    <div id="user-video-uploder" v-show="visible">
      <van-nav-bar
          title="发布视频"
          left-text="返回"
          left-arrow
          @click-left="OnClickBar"

      />

<!--      <van-uploader>-->
<!--        <van-button  :after-read="afterRead" icon="plus" type="primary">上传文件</van-button>-->
<!--      </van-uploader>-->
      <van-uploader accept="*" :max-count="1" :after-read="afterRead" />
      <van-uploader accept="*" :max-count="1" :after-read="afterRead2" />
      <van-button  @click="Upload" icon="plus" type="primary">上传文件</van-button>

    </div>
    </transition>
</template>

<style scoped>
@import "@/css/mobile/user-video-uploder.css";
</style>