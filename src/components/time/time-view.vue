<script setup lang="ts">

import TimeCard from "@/components/time/time-card.vue";
import route from "@/router/router";
import {onMounted, ref} from "vue";
import {HttpGet} from "@/api/http";
import {HomeViewCard,Response, SERVICE_ROUT} from "../../util/type";



const visible=ref(true)
const history=ref<Response<HomeViewCard[]>>()
onMounted( async ()=>{
  try {
    history.value= (await HttpGet(SERVICE_ROUT.USER_HISTORY)).data
    console.log("历史记录：",history.value)

  }catch (e){
    console.error(e)
  }

})


function OnClickBar(){
  visible.value=false
  setTimeout(()=>{
    route.back()
  },200)

}



</script>

<template>
  <transition name="van-slide-right">

  <div id="time-view" v-show="visible"  v-if="history&&history.body">
    <div id="time-view-head">
      <van-nav-bar
          title="观看历史"
          left-text="返回"
          left-arrow
          @click-left="OnClickBar"

      />
    </div>
    <time-card  :homeViewCard="item" v-for="(item,index) in history.body" :key="index"></time-card>
  </div>
  </transition>

</template>

<style scoped>
@import "@/css/mobile/time-view.css";
</style>