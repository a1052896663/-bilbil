<script setup lang="ts">
/**
 *  收藏的数据历史观看的数据
 */
import {timeOrCollectionTitle} from '../../../../store/DataStore'

//import TimeCard from
import route from "@/router/router";
import {onMounted, ref} from "vue";
import {HttpGet} from "@/api/http";
import {HomeViewCard,Response, SERVICE_ROUT} from "../../../../util/type";
import TimeCard from "@/components/home/user/time/time-card.vue";



const visible=ref(true)
const history=ref<Response<HomeViewCard[]>>()
onMounted( async ()=>{
  try {
    switch (timeOrCollectionTitle.value){
      case "历史记录":
        history.value= (await HttpGet(SERVICE_ROUT.USER_HISTORY)).data
        console.log("历史记录：",history.value)
        break;
      case "我的收藏":
        history.value= (await HttpGet(SERVICE_ROUT.USER_COLLECTION)).data
        console.log("我的收藏：",history.value)
        break;
    }


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
          :title="timeOrCollectionTitle"
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