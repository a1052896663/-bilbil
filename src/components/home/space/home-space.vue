<script setup lang="ts">

// 卡片有两类

/**
 * 说说
 *
 * 视频投稿
 *
 *
 * // 分页
 */

import HomeSpaceVideoCard from "@/components/home/space/home-space-video-card.vue";
import {onMounted, ref} from "vue";
import {ViewSpaceCard, SPACE_TYPE, Comments, COMMENTS_TYPE} from "../../../util/type";
import {SpaceInputComment, SpaceInputDom, SpaceInputShow, SpaceInputShowMsg} from "../../../store/DataStore";
import {showToast} from "vant";
import HomeSpaceShuoCard from "@/components/home/space/home-space-shuo-card.vue";



onMounted(async ()=>{
  SpaceInputDom.value=inputDom.value // dom赋值
})


const InputPlaceholder=ref("小心翼翼的留下足迹.....")
const barrage=ref("");




const tt1=ref<ViewSpaceCard>({
  commentList: [],
  id:0,
  data: Date.now(),
  showImageList: [],
  title: " 求什么标题好呢求什么标题好呢求什么标题好呢求什么标题好呢求什么标题好呢求什么标题好呢求什么标题好呢求什么标题好呢求什么标题好呢 ",
  type: SPACE_TYPE.SHOW,
  upId: 0,
  upImageSrc: "http://zxp200405221.com:9000/user/e292b78d-7d28-42b8-8a1b-8ebe0a7f4fbd/dde3e1a4-095e-482f-bce7-24e00aa5a17b?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=admin%2F20240425%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240425T100536Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8c192dc398c3562466f78c533cadf639a1842c4a01e575c52e0c61e29f035500",
  upName: "初音未来",
  videoId: 0,
  videoImagSrc:"http://zxp200405221.com:9000/video/4/9f0569cf-473f-4932-a289-c438c5734a33.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=admin%2F20240425%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240425T100536Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a046281daa352b93e2541aa6177a9e44b82d0873357ac1ac1ac0523699b677f4"

})

const c1=ref<Comments>({
  commentsType: COMMENTS_TYPE.DYNAMIC, // 回复
  content: "我好开心呀好开心",
  date: 0,
  spaceId:0,
  deleted: 0,
  id: 0,
  likeNum: 0,
  parentId: 0,
  parentName: "",
  review: false,
  toCommentId: 0,
  userId: 1,
  userImageSrc: "",
  userName: "小红帽",
  videoId: 0,
  upload:true

})

const c2=ref<Comments>({
  commentsType: COMMENTS_TYPE.DYNAMIC_REPLY, // 回复的回怼
  content: "我也是",
  spaceId:0,
  date: 0,
  deleted: 0,
  id: 0,
  likeNum: 0,
  parentId: 1,   // 这里当成是用户 id -- 之前是当成评论 id
  parentName: "小红帽",
  review: false,
  toCommentId: 0,
  userId: 2,
  userImageSrc: "",
  userName: "小白",
  videoId: 0,
  upload:true

})


tt1.value.commentList.push(c1.value)
tt1.value.commentList.push(c2.value)



// 输入框
const inputDom=ref(null)

function jd(){
  try {
    console.error("唤起焦点")
    console.log("dom:",inputDom.value)
    inputDom.value.focus()
  }catch (e){
    console.error("唤起焦点错误")
  }

}




// 获得焦点
function  OnFocus(){

}


// 失去焦点
function OnBlur(){
  SpaceInputShowMsg.value="悄悄地留下足迹"
  console.log("清空回复对象")
 // SpaceInputComment.value=null // 清空回复对象
//  SpaceInputShow.value=false; // 关闭显示
}


// 发送消息
function sendMsg(){  // 评论
  console.log("发送消息")
  SpaceInputComment.value.content=barrage.value;
const temp= SpaceInputComment.value
  tt1.value.commentList.push(temp)

  SpaceInputShowMsg.value="悄悄地留下足迹"
  console.log("清空回复对象")
  SpaceInputComment.value=null // 清空回复对象
  SpaceInputShow.value=false; // 关闭显示
  barrage.value=""


}



function OnInputDiv(){
  inputDom.value.focus()
}

function OnAppClick(){  // 清除冒泡
  SpaceInputShowMsg.value="悄悄地留下足迹"
  console.log("清空回复对象")
   SpaceInputComment.value=null // 清空回复对象
  SpaceInputShow.value=false; // 关闭显示
}


// 点击发布表
const onClick = () => {
  showToast('点击气泡');
};
</script>

<template>
  <div id="home-space" @click="OnAppClick">

<!--    <home-space-video-card  v-for="i in 3" v-if="tt1" :Date2="tt1"></home-space-video-card>-->
    <home-space-shuo-card  v-for="i in 3" v-if="tt1" :Date2="tt1"></home-space-shuo-card>


    <div :style="{'font-size':'4rem' }"   @click.stop="OnInputDiv"  v-show="SpaceInputShow">
      <div @click.stop=""  id="input-comment-inputDm"  style="position: fixed;background: #E6E8EB; display: flex;align-items: center; bottom: 13rem;width: 100%;min-height:10rem">

        <!--      <input type="text" ref="inputCommentInputDmInput" :placeholder="InputPlaceholder" @keyup.enter="OnClickSend" id="input-comment-inputDm-input" v-model="barrage" @click="OnClickinputDmInput"    @focus="onInputFocus" @blur="onInputBlur" >-->

        <el-input

            v-model="barrage"
            style="width: 88rem; margin-right: 1rem"
            :autosize="{ minRows: 1, maxRows: 2 }"
            type="textarea"
            :placeholder="SpaceInputShowMsg"

            @focus="OnFocus"
            @blur="OnBlur"
            ref="inputDom"

            size="large"
            :input-style="{

                      'border': 'none',
        'outline': 'none',
        'flex': '0 0 86rem',
        'height': '7rem',
        'margin': '0 auto',

        'font-size': '3.8rem',
        'color': '#c8c9cc',
        'background': '#e9e9eb',
        'border-radius': '4rem',
        'padding-left': '6rem'
            }"

        />




        <van-icon   id="input-comment-inputDm-icon"  @click.stop="sendMsg"  size="9rem" class="input-comment-inputDm-icon2" name="guide-o" />
      </div>











    </div>
    <van-floating-bubble style="margin-left: 8rem" gap="60" icon="plus" @click="onClick" />

  </div>

</template>

<style scoped>
@media screen  and (min-device-width: 200px) and (max-device-width:500px) {

  #home-space{
    width: 100vw;
    max-height: 95vh;
    background: #f1f1f2;;
    overflow: hidden;
    overflow-y: auto;

  }

}
</style>