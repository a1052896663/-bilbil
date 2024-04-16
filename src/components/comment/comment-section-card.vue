<script setup lang="ts">

import {commentRoute, headObject,commentSectionReplyShow,replyObject} from "../../store/DataStore";
import {computed, ref} from "vue";
import {COMMENTS_TYPE, ViewComment} from "../../util/type";
import {formatDateTime} from "@/util/util";
//import {ref} from "vue/dist/vue";


const cardData= defineProps({
  childShow:{  // 是否显示回复框的内容
    type:Boolean,
    default:true
  },
  testData:{
    type:Boolean,
    default:true
  },
  itemData:{
    type:ref<ViewComment>,
    default:undefined

  }


})


console.log("收到的数据A：",cardData.itemData)
console.log("收到的数据B：",cardData.childShow)

//const popupShow=ref(false)

const noticeText=ref("那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己")  // 最后一定要是\n

// 三个评论区
//const child=ref<ViewComment[]>([])

// 测式数据   <----
// const comment=ref<ViewComment>({
//   deleteShow: true,
//   likeSize: 0,
//   videoId: 0,
//
//   child: [], content: noticeText.value, id: 0, parentId: 0, time: Date.now(), userImageSrc: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg", userName: "足下可识武安君否"
//
// })

const comment=computed(()=>{
  return cardData.itemData
})

    //ref<ViewComment>(cardData.itemData)
 //child.value=comment.value.child
// if(!cardData.testData){
//   // 不是测试数据
//   comment.value=  commentRoute.value
// }
//
// function test(){
//   for(let i=0;i<getIndex();i++){
//     const comment2=ref<ViewComment>({
//       deleteShow: true,
//       likeSize: 0,
//       videoId: 0,
//       child: [], content: `${i}`+ noticeText.value, id: 0, parentId: 0, time: Date.now(), userImageSrc: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg", userName: "足下可识武安君否"+i
//
//     })
//     comment.value.child.push(comment2.value)
//
//   }
//   if( comment.value.child.length>=3){
//     for (let i=0;i< 3;i++){
//       child.value.push( comment.value.child[i])
//     }
//   }else {
//     child.value=comment.value.child
//   }
//   console.log("得到的数据：",comment.value)
// }


//test()

const childTemp=computed(()=>{
  if(!(comment&&comment.value.child)){
    return []
  }
  if(comment.value.child.length<=3){
        return comment.value.child
  }
  if (comment.value.child.length>3){
    return [comment.value.child[0],comment.value.child[1],comment.value.child[2]]
  }

})

// 测式数据   ---->

function getIndex():number{
  // console.log(randomNum); // 输出随机整数
  return Math.floor(Math.random() * 10)
}

const i=ref(getIndex())

const h=ref(' <span>回复</span>')



// 跳转评论区的评论区
function OnClickToReply(item:ViewComment){
  //e.stopPropagation();
  commentRoute.value=item
  headObject.value=item
  console.log("发送的值：",commentRoute.value)
  commentSectionReplyShow.value=true



}

// 输入回复
const  inputCommentInputDmInput=ref(null) // 真实弹幕输入框

function inputComment(item:ViewComment){

  replyObject.value=item
  console.log("回复对象：",replyObject.value)
  try {
    const inputCommentInputDmInput=document.getElementById('input-comment-inputDm-input')  // 输入框
    inputCommentInputDmInput.focus()  // 唤醒输入框
  }catch (e){
    console.error("唤醒输入框失败：",e)
  }

}
function OnClickTextEllipsis(e){
  e.stopPropagation();
}




// 点击按时间或是按风景
const fontColor=ref<"#2c3e50"|"#1989fa">("#2c3e50")
const OnTime=ref(false)
function OnClickHortOrTime(e){ // 换颜色
  e.stopPropagation();
  inputComment(comment.value)
  OnTime.value=!OnTime.value
  fontColor.value="#1989fa"
  setTimeout(()=>{
    fontColor.value="#2c3e50"
  },200)
}


</script>

<template>
  <div class="comment-section-content-item" v-if="itemData&&comment">
    <van-divider />
    <div class="comment-section-content-item-image">
      <van-image
          round
          width="9rem"
          height="9rem"
          fit="cover"

          :src="comment.userImageSrc"
      />
    </div>
    <div class="comment-section-content-item-card">
      <div class="comment-section-content-item-card-user">
        <div class="comment-section-content-item-card-user-name">{{comment.userName}}</div>
        <div  class="comment-section-content-item-card-user-time">{{formatDateTime(comment.time)}}</div>
      </div>
      <div class="comment-section-content-item-card-comment">
<!--        <div   @click ="inputComment(comment)" class="comment-section-content-item-card-comment-title">-->
        <div    class="comment-section-content-item-card-comment-title">

        <span v-if="comment&&comment.type==COMMENTS_TYPE.VIDEO_REFUTATION&&comment.toComment">回复：<span style="color: #1989fa">@{{comment.toComment.userName}}:</span></span>

           <van-text-ellipsis
            @click-action="OnClickTextEllipsis"
              rows="6"
              :content="comment.content+'\n'"
              :expand-text="'\n'+'展开'"
              collapse-text="收起"
              dots=""


          />


        </div>
        <div class="comment-section-content-item-card-comment-fonts">
          <div class="comment-section-content-item-card-comment-font"><van-icon size="5rem" name="good-job-o" /> <span style="text-indent: 1rem;">{{comment.likeSize}}</span></div>
          <div class="comment-section-content-item-card-comment-font" @click ="OnClickHortOrTime"><van-icon size="5rem" :color="fontColor" name="chat-o" /></div>
          <div class="comment-section-content-item-card-comment-font-m"> </div>
          <div class="comment-section-content-item-card-comment-font-last" v-if="comment.deleteShow"><van-icon size="5rem" name="delete-o" /></div>
        </div>

      </div>
      <div class="comment-section-content-item-card-reply"  @click.stop="OnClickToReply(comment)"  v-if="comment&&comment.type==COMMENTS_TYPE.VIDEO&&childShow&&comment.child.length>0">
        <div class="comment-section-content-item-card-reply-item" >
          <div class="comment-section-content-item-card-reply-name" v-for="(item,index) in childTemp" :key="index">
            <template v-if="item.type==COMMENTS_TYPE.VIDEO_REPLY">
              <span>{{item.userName}}：</span>
              <span class="comment-section-content-item-card-reply-name-pl">{{item.content}}</span>

            </template>
            <template v-else>
              <span>{{item.userName}}<span style="color: black"> 回复 </span> @{{item.toComment.userName}}：</span>
              <span class="comment-section-content-item-card-reply-name-pl">{{item.content}}</span>

            </template>
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