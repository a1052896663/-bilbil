<script setup lang="ts">
// 评论区
//import {commentSectionReplyShow} from '../../store/DataStore'


import {ref} from "vue";
import CommentSectionCard from "@/components/comment/comment-section-card.vue";
import CommentSectionReply from "@/components/comment/comment-section-reply.vue";
// import CommentSectionReply from "@/components/comment/comment-section-reply.vue";
// import CommentSectionCard from "@/components/comment/comment-section-card.vue";


const popupShow=ref(false)

const noticeText=ref("那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己")  // 最后一定要是\n


function getIndex():number{
  // console.log(randomNum); // 输出随机整数
  return Math.floor(Math.random() * 4)
}

const i=ref(2)
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
        <comment-section-card  v-for="index in 10"></comment-section-card>

      </div>
      <comment-section-reply></comment-section-reply>
    </div>
</template>

<style scoped>
@import "@/css/mobile/comment-section.css";

</style>