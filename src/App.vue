<script setup lang="ts">

import {onMounted, ref} from "vue";
import route from "../src/router/router.js";

//import axios from "axios";
//import {HttpFile} from "@/api/http";
onMounted(()=>{
  console.log("跳转home")
  try {
   // route.push('/userVideoUploder')
    route.push('/home')
  }catch (e){
    console.error("error:",e)
  }


})

//
//const fileInputRef = ref(null);
//const file = ref(null);
//const image= ref(null)
//// 进度  内容
//const progress = ref(0);
//
//const handleFileSelect = (event) => {
//  file.value = event.target.files[0];
//};
//const handleFileSelectImage=(e)=>{
//  image.value=e.target.files[0]
//}
//const uploadFile = async () => {
//  const play={
//    "video":{
//      "url":"",
//      "title":"你好",
//      "brief":"测试",
//      "label":"java;python"
//    },
//
//    "comments":[]
//  }
//   const formData = new FormData();
//    formData.append('video', file.value);
//    formData.append('coverImage',image.value)
//    formData.append('play',JSON.stringify(play))
//    await HttpFile('/video/upload',formData,progress)
//    console.log("上传成功")
//};
</script>

<template>


<!--  <div class="common-layout">-->
<!--    <el-container>-->
<!--      <el-header>Header</el-header>-->
<!--      <el-main>Main</el-main>-->
<!--      <el-footer>Footer</el-footer>-->
<!--    </el-container>-->
<!--  </div>-->
  <!-- <input type="file" ref="fileInput" @change="handleFileSelect"> 视频
  <input type="file" ref="imagefileInput" @change="handleFileSelectImage"> 封面
  <button @click="uploadFile">上传</button>
  <div v-if="progress > 0">
    上传进度：{{ progress }}%
  </div>
  <video src></video> -->
<!--<div>-->
<!--  按钮-->
<!--  <el-button>按钮</el-button>-->
<!--</div>-->

  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>


</template>
<style >
*{
  margin: 0;
  padding: 0;
  user-select: none;
}
html{
  background: #0264e7;
  width: 100%;
  height: 100%;
  font-size: 1vw;
  overflow: hidden;
  position: fixed;
  font-family: HYKaiti;
}

</style>
