<script setup lang="ts">
// 评论输入框

// 点击小红旗
import {ref, watch} from "vue";
import {emoji, emojiShow, inputCommentTopShow, replyObject} from '../../store/DataStore'
import {COMMENTS_TYPE, ViewComment} from "../../util/type";
import {getCOMMENTS_TYPE} from "../../util/util";


// 表情元素
const emojiRef= ref<string[]>(emoji)

// 输入框提示内容
const InputPlaceholder=ref("小心翼翼的留下足迹.....")

const empInputDmInputState=ref(false)

const  inputCommentInputDmInput=ref(null) // 真实弹幕输入框

function  onClickComments(e){
  e.stopPropagation();
  RecordPosition()

  console.log("当前是否亮：",empInputDmInputState)
  // input-comment-inputDmInput.value.focus()
  try {
    if(empInputDmInputState.value){
      empInputDmInputState.value=false

      inputCommentInputDmInput.value.focus()
      console.log("亮")
    }else {
      empInputDmInputState.value=true
    }



  }catch (e){
    console.error("点击弹幕选项设置按钮--小红旗：",e)
  }

}


// 记录上一次光标位置
const InputNextPosition=ref(0)
function RecordPosition(){
 try {
   console.log("当前光标位置：",inputCommentInputDmInput.value.selectionStart)
   InputNextPosition.value = inputCommentInputDmInput.value.selectionStart;
 }catch (e){
   console.error("InputNextPosition-error:",e)
 }

 // var endPos = inputBox.selectionEnd;
}

// 插入表情
function InsertEmote(emo){
  try {
   // const emo= emojiRef.value[i]
    // .substring(0, startPos) + emoji +text.slice(a);
    barrage.value=barrage.value.substring(0, InputNextPosition.value)+emo+barrage.value.slice(InputNextPosition.value);
    InputNextPosition.value+=emo.length
  }catch (e){
    console.error("InsertEmote--error:",e)
  }

}


// 弹幕数据发送 TODO
const show = ref(false); // 消息控件
function OnClickSend(e){
  e.preventDefault()
  e.stopPropagation();
   let sendObj:ViewComment
  console.log("需要回复的评论",replyObject," value:",replyObject.value)
  if(replyObject&&replyObject.value){


    const typeTemp=getCOMMENTS_TYPE(replyObject.value.type)

    let parentIdTemp=replyObject.value.parentId;
    console.log("父评论类型：",replyObject.value.type)
    if(typeTemp==COMMENTS_TYPE.VIDEO){
      parentIdTemp=-1
    }

     sendObj={
      child: [],
      content: "我新加了一条评论",
      deleteShow: true,
      id: 0,
      likeSize: 0,
      parentId: parentIdTemp,
      time: Date.now(),
      toComment:  replyObject.value,
      type:typeTemp,
      userImageSrc: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
      userName: "初音味道",
      videoId:  replyObject.value.videoId

    }

  }else {
    // 普通回复
     sendObj={
      child: [],
      content: "我新加了一条评论",
      deleteShow: true,
      id: 0,
      likeSize: 0,
      parentId: -1,
      time: Date.now(),
      toComment: null,
      type:COMMENTS_TYPE.VIDEO,
      userImageSrc: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
      userName: "初音味道",
      videoId:  0,

    }
  }

  barrage.value=""
  console.log("添加评论：",sendObj)



}

const deleteInputSize=ref(0)
watch(replyObject,(newValue)=>{
  if(newValue){
    //"回复：@".slice("回复：".length)
     deleteInputSize.value=("回复：@"+newValue.userName).length
    InputPlaceholder.value="回复：@"+newValue.userName
    console.log("改变：",InputPlaceholder.value)
    //barrage.value="回复：@"+newValue.userName
  }
})


const inputDmIcon2Color=ref('rgba(0, 0, 0, 0.2)')
const barrage=ref("");

// 点击 弹幕输入框
function OnClickinputDmInput(e){
  e.stopPropagation();
}


const InputState=ref(false) // 当前弹幕输入框的状态，是否处于输入状态
function onInputFocus() {
  emojiShow.value=true
  inputCommentTopShow.value=true
  console.log("获得焦点")
  empInputDmInputState.value=false
  InputState.value=true
  window.addEventListener('resize', updateKeyboardHeight);



}

function onInputBlur() {
  console.log("失去焦点")
  InputPlaceholder.value="小心翼翼的留下足迹....."
  InputState.value=false

  //this.isKeyboardVisible = false;

  window.removeEventListener('resize',updateKeyboardHeight);
}

// 停止悬浮输入框
watch(inputCommentTopShow,(newValue)=>{
  //console.log("有变化")
  try {
    if(!newValue){
      console.log("放置回最下方")
      const inputCommentInputDm= document.getElementById('input-comment-inputDm')
       inputCommentInputDm.style.position="fixed"
     inputCommentInputDm.style.top=""
      inputCommentInputDm.style.bottom='0px'

    }
  }catch (e){
    console.error("watch---inputCommentTopShow:",e)
  }
 // barrage.value=inputCommentTopShow.value

})

function updateKeyboardHeight() {

  const inputCommentInputDm= document.getElementById('input-comment-inputDm')
//  inputCommentInputDm.style.top="100%"

  //this.gd=input-comment-inputDm.getBoundingClientRect().top;

  inputCommentInputDm.style.position='absolute;'
  inputCommentInputDm.style.top= ''+inputCommentInputDm.getBoundingClientRect().top+'px'

  inputCommentInputDm.style.bottom=''

  const inputCommentInputDmSelect= document.getElementById('input-comment-inputDmSelect')
  inputCommentInputDmSelect.style.background='#e9e9eb'
  inputCommentInputDmSelect.style.position='absolute'


  const topTemp=inputCommentInputDm.getBoundingClientRect().top+inputCommentInputDm.getBoundingClientRect().height
  inputCommentInputDmSelect.style.width='100%'
  inputCommentInputDmSelect.style.top=topTemp+'px'

  inputCommentInputDmSelect.style.height='999px'

  //barrage.value= inputCommentInputDmSelect.style.top
  //const inputCommentInputComment-inputDm-body-color-select =document.getElementById('input-comment-input-comment-inputDm-body-color-select')
  //inputDmBodyEumSelect.style.height=(document.body.getBoundingClientRect()-inputCommentInputDm.getBoundingClientRect().top)+"px"
  //gd.value=inputDmBodyEumSelect.style.height

}
const gd=ref()

// <--- 弹幕弹出框所需要的输入框


// 点击下面的弹幕控件
function OnClickInputDmSelect(e){
  e.stopPropagation();
}

// const checkedFont=ref('2') // 选择字号
// const checkedLocation=ref('scroll') // 选择字体位置
// const checkedColor=ref('#FFFFFF') // 选择字体颜色
</script>

<template>
  <!--
            弹幕输入框

  -->
  <div :style="{'font-size':'4rem' }"  v-show="true" >
    <div  id="input-comment-inputDm"  :style="{position: 'fixed', bottom: 0,width: '100%'}">

      <input type="text" ref="inputCommentInputDmInput" :placeholder="InputPlaceholder" @keyup.enter="OnClickSend" id="input-comment-inputDm-input" v-model="barrage" @click="OnClickinputDmInput"    @focus="onInputFocus" @blur="onInputBlur" >


      <van-icon   @click="onClickComments"  :color="emojiShow&&empInputDmInputState?'#0264e7':'#c8c9cc'" size="7rem" class="input-comment-inputDm-icon1" name="smile-o" />

      <van-icon :color="inputDmIcon2Color"  @click="OnClickSend"  size="7rem" class="input-comment-inputDm-icon2" name="guide-o" />
    </div>

    <!--
              弹幕字号选择--舍弃
    -->
    <div  v-show="empInputDmInputState&&emojiShow"   class="keyboard-overlay" id="input-comment-inputDmSelect" @click="OnClickInputDmSelect" >





      <!--
                弹幕颜色选择
      -->

      <div  class="input-comment-inputDm-body" id="input-comment-input-comment-inputDm-body-color-select">
        <div class="input-comment-inputDm-body-font" @click="InsertEmote(enm)"  v-for="enm in emojiRef" :key="enm">
          {{enm}}
        </div>

      </div>

      <!--
              占位置控件
      -->
      <div id="input-comment-input-comment-inputDm-bottom"></div>

    </div>
  </div>


</template>

<style scoped>


/*
//@import "@/css/mobile/input-comment.css";
 */
@media screen  and (min-device-width: 200px) and (max-device-width:5000px) {


  #input-comment-inputDm {
    display: flex;
    background: white;
    height: 9rem;
    align-items: center;


    border-top: 1px solid #e9e9eb; /* 绘制线条 */
    border-bottom: 1px solid #e9e9eb; /* 绘制线条 */
    /*top:544px*/
  }

  #input-comment-inputDm-input{
    /* 去除默认样式 */
    border: none;
    outline: none;
    flex: 0 0 80rem;
    height: 7rem;
    margin: 0 auto;
    text-indent: 6rem;
    font-size: 3.8rem;
    color: #c8c9cc;
    background: #e9e9eb;
    border-radius: 4rem;
  }

  #input-comment-inputDmSelect{
    /*padding-top: 2rem;*/
    /*width: 100%;*/
    position: fixed;
    background: #e9e9eb;

    /*height: 999px;*/
    /*top: 579px;*/
    display: flex;
    flex-direction: column;
  }

  .input-comment-inputDm-icon1{
    margin-left: 1rem;
  }
  .input-comment-inputDm-icon2{
    margin-right: 2rem;

  }

  /*    弹幕发送框相关 */
  .input-comment-inputDm-body{
    flex: 0 0 8rem;
    margin: 1rem 3rem;
    /*background: #0264e7;*/
    display: flex;
    align-items: center;
    /*background: #e9e9eb;*/

  }
  .input-comment-inputDm-body-font{
    margin-right: 2rem;
    flex: 0 0 20%;
    font-size: 6rem;
    text-align: center;
    margin: 0 auto;
    width: 8rem;
    /*height: 8rem;*/
    /*background: #6aee59;*/
  }

  #input-comment-input-comment-inputDm-bottom{
    flex: 1 1 1rem;

  }



  #input-comment-input-comment-inputDm-body-color-select{
    flex: 0 0 80rem;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    /*height: 88px;*/
    overflow-y: auto;

  }
















}
</style>