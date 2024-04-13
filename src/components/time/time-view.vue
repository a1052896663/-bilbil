<script setup lang="ts">

import TimeCard from "@/components/time/time-card.vue";
import route from "@/router/router";
import {ref} from "vue";

const visible=ref(true)

function OnClickBar(){
  visible.value=false
  setTimeout(()=>{
    route.back()
  },200)

}

</script>

<template>
  <transition name="van-slide-right">

  <div id="time-view" v-show="visible">
    <div id="time-view-head">
      <van-nav-bar
          title="观看历史"
          left-text="返回"
          left-arrow
          @click-left="OnClickBar"

      />
    </div>
    <time-card v-for="i in 10"></time-card>
  </div>
  </transition>

</template>

<style scoped>
@import "@/css/mobile/time-view.css";
</style>