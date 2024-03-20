<script setup lang="ts">

import {onMounted, ref} from "vue";
import route from "@/router/router";
import axios from "axios";
import {HttpFile} from "@/api/http";
onMounted(()=>{
  //route.push('/home')
})

const fileInputRef = ref(null);
const file = ref(null);
const image= ref(null)
// 进度  内容
const progress = ref(0);

const handleFileSelect = (event) => {
  file.value = event.target.files[0];
};
const handleFileSelectImage=(e)=>{
  image.value=e.target.files[0]
}
const uploadFile = async () => {
  const play={
    "video":{
      "url":"",
      "title":"你好",
      "brief":"测试",
      "label":"java;python"
    },

    "comments":[]
  }
   const formData = new FormData();
    formData.append('video', file.value);
    formData.append('coverImage',image.value)
    formData.append('play',JSON.stringify(play))
    await HttpFile('/video/upload',formData,progress)
    console.log("上传成功")
};
</script>

<template>
  <input type="file" ref="fileInput" @change="handleFileSelect"> 视频
  <input type="file" ref="imagefileInput" @change="handleFileSelectImage"> 封面
  <button @click="uploadFile">上传</button>
  <div v-if="progress > 0">
    上传进度：{{ progress }}%
  </div>
  <video src></video>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>

</template>
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
@/api/Http