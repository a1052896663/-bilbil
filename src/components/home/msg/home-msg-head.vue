<script setup lang="ts">

import {computed, ref} from "vue";
import route from "@/router/router.js";
import HomeMsgHeadCar from "@/components/home/msg/home-msg-head-car.vue";

import {MSG_HEAD_TYPE, MsgCard} from '../../../util/type'
const visible=ref(true)

function OnClickBar(){
  visible.value=false
  setTimeout(()=>{
    route.back()
  },200)

}


const  props= defineProps({
  type:{
    type:String,
    default:MSG_HEAD_TYPE.LIKE
  }
})
const title=computed(()=>{
  return props.type
})

const tt=ref<MsgCard>({
  id:0, // 消息id,
  imageShow:true ,// 消息：类型，
  commentShow:false,
  userName:"初音未来2", // 用户的名字
  userComment:"你好",// 用户的评论
  myComment: "收到", // 我的评论内容
  time:Date.now(),// 消息时间
  videoImageSrc:"public/interlude_Miku_in_Museland_5.png",// 图片路径
})

</script>

<template>
  <transition name="van-slide-right">

    <div id="time-view" v-show="visible">
      <div id="time-view-head">
        <van-nav-bar
            :title="title"
            left-text="返回"
            left-arrow
            @click-left="OnClickBar"

        />
      </div>
      <home-msg-head-car :content="tt" v-for="i in 10" :type="MSG_HEAD_TYPE.LIKE_VIDE"></home-msg-head-car>
<!--      <time-card v-for="i in 10"></time-card>-->
    </div>
  </transition>

</template>

<style scoped>
@media screen  and (min-device-width: 200px) and (max-device-width:500px) {


  #time-view{
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    /*background: #0bc15f;*/
  }
  #time-view-head{
    /*background: yellow;*/
    flex: 0 0 11rem;
    /*display: ;*/
    top: 0;
    position: sticky;
    z-index: 999;
  }

}
</style>