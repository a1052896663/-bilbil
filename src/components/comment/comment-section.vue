<script setup lang="ts">
// 评论区
//import {commentSectionReplyShow} from '../../store/DataStore'


import {ref} from "vue";
import CommentSectionCard from "@/components/comment/comment-section-card.vue";
import CommentSectionReply from "@/components/comment/comment-section-reply.vue";
import {COMMENTS_TYPE, ViewComment} from "../../util/type";
import {commentRoute} from "@/store/DataStore";
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

      child: [], content: '消息传递测试', id: 0, parentId: 0, time: Date.now(), userImageSrc: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg", userName: "足下可识武安君否",
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


</script>

<template>
    <div id="comment-section">
      <van-notice-bar
          left-icon="volume-o"
          :text='noticeText'
          v-if="!popupShow"
      />




<!--      <van-popup-->
<!--          @click-close-icon="popupShow=!popupShow"-->
<!--          @click-overlay="popupShow=!popupShow"-->
<!--          v-model:show="popupShow"-->
<!--          closeable-->
<!--          position="bottom"-->
<!--          id="comment-section-popup"-->
<!--      >-->
<!--        <div id="comment-section-popup-content">内容</div>-->
<!--      </van-popup>-->


      <div id="comment-section-content" >
<!--        <button  @click="popupShow=!popupShow">  展开评论区</button>-->
<!--        <div class="comment-section-content-item" v-for="index in 10">-->
<!--          <van-divider />-->
<!--          <div class="comment-section-content-item-image">-->
<!--            <van-image-->
<!--                round-->
<!--                width="9rem"-->
<!--                height="9rem"-->
<!--                fit="cover"-->

<!--                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"-->
<!--            />-->
<!--          </div>-->
<!--          <div class="comment-section-content-item-card">-->
<!--            <div class="comment-section-content-item-card-user">-->
<!--              <div class="comment-section-content-item-card-user-name">足下可识武安君否</div>-->
<!--              <div  class="comment-section-content-item-card-user-time">2023-2-26</div>-->
<!--            </div>-->
<!--            <div class="comment-section-content-item-card-comment">-->
<!--              <div class="comment-section-content-item-card-comment-title">-->


<!--                <van-text-ellipsis-->
<!--                    rows="6"-->
<!--                    :content="noticeText+'\n'"-->
<!--                    :expand-text="'\n'+'展开'"-->
<!--                    collapse-text="收起"-->
<!--                    dots=""-->
<!--                />-->
<!--              </div>-->
<!--              <div class="comment-section-content-item-card-comment-fonts">-->
<!--                <div class="comment-section-content-item-card-comment-font"><van-icon size="5rem" name="good-job-o" /> <span>1750</span></div>-->
<!--                <div class="comment-section-content-item-card-comment-font"><van-icon size="5rem" name="chat-o" /></div>-->
<!--                <div class="comment-section-content-item-card-comment-font-m"> </div>-->
<!--                <div class="comment-section-content-item-card-comment-font-last"><van-icon size="5rem" name="delete-o" /></div>-->
<!--              </div>-->

<!--            </div>-->
<!--            <div class="comment-section-content-item-card-reply"  v-if="i!=0">-->
<!--              <div class="comment-section-content-item-card-reply-item">-->
<!--                <div class="comment-section-content-item-card-reply-name" v-for="i2 in i">-->
<!--                  <span>枫之前那个：</span>-->
<!--                  <span class="comment-section-content-item-card-reply-name-pl">那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己</span>-->

<!--                </div>-->



<!--              </div>-->
<!--              <div v-if="true"   @click="commentSectionReplyShow=true" class="comment-section-content-item-card-reply-more">共{{i}}条回复 <van-icon name="arrow" /></div>-->
<!--            </div>-->

<!--          </div>-->

<!--        </div>-->
        <comment-section-card :itemData="testViewComment" v-for="index in 10"></comment-section-card>

      </div>
      <comment-section-reply></comment-section-reply>
    </div>
</template>

<style scoped>
@import "@/css/mobile/comment-section.css";

</style>