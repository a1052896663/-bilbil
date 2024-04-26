<script setup lang="ts">

import {active} from "@/store/DataStore.js";
import HomeSpace from "@/components/home/space/home-space.vue";
import {ref} from "vue";
import HomeSpace2 from "@/components/home/space/home-space2.vue";




// 标签页面
const Tap=ref(['关注','全站'])
const Tap_active=ref(0)


</script>

<template>
  <div>
  <van-tabs v-model:active="Tap_active" scrollspy sticky title-active-color="#1989fa" swipeable="false"  >
    <van-tab v-for="(item,index) in Tap" :title="item" :key="index">

    </van-tab>

  </van-tabs>

  <home-space v-if="Tap_active==0"></home-space>
  <home-space2 v-if="Tap_active==1"></home-space2>
  </div>

</template>

<style scoped>

</style>