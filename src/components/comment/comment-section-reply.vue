<script setup lang="ts">
/**
 * 评论回复的展示
 *
 * 评论的评论
 */
import {commentSectionReplyShow} from '../../store/DataStore'
import {commentRoute} from '../../store/DataStore'
import CommentSectionCard from "@/components/comment/comment-section-card.vue";

commentRoute.value={
  deleteShow: true,
  likeSize: 0,
  videoId: 0,

  child: [], content: '消息传递测试', id: 0, parentId: 0, time: Date.now(), userImageSrc: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg", userName: "足下可识武安君否"

}

</script>

<template>
    <div id="comment-section-reply" >
      <van-popup
          @click-close-icon="commentSectionReplyShow=!commentSectionReplyShow"
          @click-overlay="commentSectionReplyShow=!commentSectionReplyShow"
          v-model:show="commentSectionReplyShow"
          duration="0.3"
          position="bottom"
          id="comment-section-reply-popup"
      >
        <div id="comment-section-popup-content">
          <div id="comment-section-popup-content-user">
          <comment-section-card  :childShow="false"  :testData="false"></comment-section-card>
          </div>
          <div id="comment-section-popup-content-main">
<!--             评论头-->
          </div>
          <div id="comment-section-popup-content-child">

          </div>
        </div>
      </van-popup>
    </div>
</template>

<style scoped>
@import "@/css/mobile/comment-section-reply.css";

</style>