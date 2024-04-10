<script setup lang="ts">

import {commentSectionReplyShow} from "../../store/DataStore";
import {ref} from "vue";
import {ViewComment} from "../../util/type";
import {formatDateTime} from "@/util/util";
import {commentRoute} from '../../store/DataStore'
//import {ref} from "vue/dist/vue";


const cardData= defineProps({
  childShow:{  // 是否显示回复框的内容
    type:Boolean,
    default:true
  },
  testData:{
    type:Boolean,
    default:true
  }
})



//const popupShow=ref(false)

const noticeText=ref("那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己")  // 最后一定要是\n

// 三个评论区
const child=ref<ViewComment[]>([])

// 测式数据   <----
const comment=ref<ViewComment>({
  deleteShow: true,
  likeSize: 0,
  videoId: 0,

  child: [], content: noticeText.value, id: 0, parentId: 0, time: Date.now(), userImageSrc: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg", userName: "足下可识武安君否"

})


if(!cardData.testData){
  // 不是测试数据
  comment.value=  commentRoute.value
}

function test(){
  for(let i=0;i<getIndex();i++){
    const comment2=ref<ViewComment>({
      deleteShow: true,
      likeSize: 0,
      videoId: 0,
      child: [], content: `${i}`+ noticeText.value, id: 0, parentId: 0, time: Date.now(), userImageSrc: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg", userName: "足下可识武安君否"+i

    })
    comment.value.child.push(comment2.value)

  }
  if( comment.value.child.length>=3){
    for (let i=0;i< 3;i++){
      child.value.push( comment.value.child[i])
    }
  }else {
    child.value=comment.value.child
  }
  console.log("得到的数据：",comment.value)
}

test()

// 测式数据   ---->

function getIndex():number{
  // console.log(randomNum); // 输出随机整数
  return Math.floor(Math.random() * 10)
}

const i=ref(getIndex())

</script>

<template>
  <div class="comment-section-content-item" >
    <van-divider />
    <div class="comment-section-content-item-image">
      <van-image
          round
          width="9rem"
          height="9rem"
          fit="cover"

          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      />
    </div>
    <div class="comment-section-content-item-card">
      <div class="comment-section-content-item-card-user">
        <div class="comment-section-content-item-card-user-name">{{comment.userName}}</div>
        <div  class="comment-section-content-item-card-user-time">{{formatDateTime(comment.time)}}</div>
      </div>
      <div class="comment-section-content-item-card-comment">
        <div class="comment-section-content-item-card-comment-title">


          <van-text-ellipsis
              rows="6"
              :content="comment.content+'\n'"
              :expand-text="'\n'+'展开'"
              collapse-text="收起"
              dots=""
          />
        </div>
        <div class="comment-section-content-item-card-comment-fonts">
          <div class="comment-section-content-item-card-comment-font"><van-icon size="5rem" name="good-job-o" /> <span style="text-indent: 1rem;">{{comment.likeSize}}</span></div>
          <div class="comment-section-content-item-card-comment-font"><van-icon size="5rem" name="chat-o" /></div>
          <div class="comment-section-content-item-card-comment-font-m"> </div>
          <div class="comment-section-content-item-card-comment-font-last" v-if="comment.deleteShow"><van-icon size="5rem" name="delete-o" /></div>
        </div>

      </div>
      <div class="comment-section-content-item-card-reply"   v-if="childShow&&comment.child.length>0">
        <div class="comment-section-content-item-card-reply-item" >
          <div class="comment-section-content-item-card-reply-name" v-for="(item,index) in child" :key="index">
            <span>{{item.userName}}：</span>
            <span class="comment-section-content-item-card-reply-name-pl">{{item.content}}</span>

          </div>



        </div>
        <div v-if="comment.child.length>3"   @click="commentSectionReplyShow=true" class="comment-section-content-item-card-reply-more">共{{comment.child.length}}条回复 <van-icon name="arrow" /></div>
      </div>

    </div>

  </div>

</template>

<style scoped >
@import "@/css/mobile/comment-section-card.css";
</style>