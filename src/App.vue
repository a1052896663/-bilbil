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
// 进度  内容
const progress = ref(0);

const handleFileSelect = (event) => {
  file.value = event.target.files[0];
};

const uploadFile = async () => {
    await HttpFile('/user/avatar',file,progress)
    console.log("上传成功")
};
</script>

<template>
  <input type="file" ref="fileInput" @change="handleFileSelect">
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
