<script setup lang="ts">
// 评论区
//import {commentSectionReplyShow} from '../../store/DataStore'


import {ref} from "vue";
import CommentSectionCard from "@/components/comment/comment-section-card.vue";
import CommentSectionReply from "@/components/comment/comment-section-reply.vue";
import {COMMENTS_TYPE, ViewComment} from "../../util/type";
import {commentRoute, typeShow} from "@/store/DataStore";
// import CommentSectionReply from "@/components/comment/comment-section-reply.vue";
// import CommentSectionCard from "@/components/comment/comment-section-card.vue";


const popupShow=ref(false)

const noticeText=ref("那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己")  // 最后一定要是\n


function getIndex():number{
  // console.log(randomNum); // 输出随机整数
  return Math.floor(Math.random() * 4)
}

const i=ref(2)

const testViewComment= ref<ViewComment>({
      deleteShow: true,
      likeSize: 0,
      videoId: 0,

      child: [], content: '那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己',
  id: 0, parentId: 0, time: Date.now(), userImageSrc: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg", userName: "足下可识武安君否",
      type:COMMENTS_TYPE.VIDEO
    }
)

const childA=ref<ViewComment>({
  content: "我支持你",
  deleteShow: true,
  id: 2,
  likeSize: 20,
  parentId: 0,
  time: Date.now(),
  userImageSrc: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  userName: "小王",
  videoId: 0,
  type:COMMENTS_TYPE.VIDEO_REPLY
})

const childF=ref<ViewComment>({
  content: "话说得真好听，爱了！爱了！",
  deleteShow: true,
  id: 6,
  likeSize: 320,
  parentId: 0,
  time: Date.now(),
  userImageSrc: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  userName: "小周",
  videoId: 0,
  type:COMMENTS_TYPE.VIDEO_REPLY
})

const childB=ref<ViewComment>({
  content: "我不不支持他",
  deleteShow: true,
  id: 3,
  likeSize: 211,
  parentId: 0,
  time: Date.now(),
  userImageSrc: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  userName: "小红",
  videoId: 0,
  type:COMMENTS_TYPE.VIDEO_REPLY

})
const childC=ref<ViewComment>({
  content: "同。",
  deleteShow: true,
  toComment:childA.value,
  id: 4,
  likeSize: 30,
  parentId: 0,
  time: Date.now(),
  userImageSrc: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  userName: "小里",
  videoId: 0,
  type:COMMENTS_TYPE.VIDEO_REFUTATION

})


testViewComment.value.child.push(childA.value)
testViewComment.value.child.push(childB.value)
testViewComment.value.child.push(childF.value)
testViewComment.value.child.push(childC.value)


// 点击按时间或是按风景
const fontColor=ref<"#b1b3b8"|"#1989fa">("#b1b3b8")
const OnTime=ref(false)
function OnClickHortOrTime(){ // 换颜色
  OnTime.value=!OnTime.value
  fontColor.value="#1989fa"
  setTimeout(()=>{
    fontColor.value="#b1b3b8"
  },200)
}


</script>

<template>
  <van-notice-bar
      scrollable

      left-icon="volume-o"

      :text='noticeText'
      v-if="typeShow==1"
  />
    <div id="comment-section">








      <div id="comment-section-content" >
        <div id="comment-section-popup-content-main">
          <!--             评论头-->
          <div class="comment-section-popup-content-main-size">{{OnTime?'最新评论':'热门评论'}}</div>
          <div class="comment-section-popup-content-main-m"></div>
          <div class="comment-section-popup-content-main-font" @click="OnClickHortOrTime" :style="{color:fontColor}" ><van-icon :color="fontColor" name="list-switch" /> {{OnTime?'按时间':'按热度'}}</div>
        </div>
        <comment-section-card :itemData="testViewComment" v-for="index in 10"></comment-section-card>

      </div>

    </div>
</template>

<style scoped>
@import "@/css/mobile/comment-section.css";

</style>