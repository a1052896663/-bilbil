<script setup lang="ts">
import {HttpGet} from "@/api/http";
import {onBeforeUnmount, onMounted, ref} from "vue";
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'video.js/dist/video-js.css'
const player = ref(null)
let url=ref('')
const streamUrl = ref('')
const progressBar = ref(null)

onMounted(() => {
  const player = document.getElementById('player')

  // 在组件挂载后，可以对播放器进行操作
  //player.addEventListener('timeupdate', updateProgress)
})

const updateProgress = () => {
  const player = document.getElementById('player') as any

  if (progressBar.value && player.duration) {
    const progress = (player.currentTime / player.duration) * 100
    progressBar.value.value = progress
  }
}

onMounted( () => {
  const at=async ()=>{
   let  req=await  HttpGet("/url")
    streamUrl.value=req.data
    console.log("播放地址：",streamUrl.value)
  }
  at();

})


</script>

<template>
  <div>
    <video ref="player" :src="streamUrl" @timeupdate="updateProgress" controls></video>
    <progress ref="progressBar" max="100"></progress>
  </div>
</template>

<style scoped>

</style>