<script setup lang="ts">


import {computed, onMounted, ref, watch, watchEffect} from "vue";
import Danmaku from "@nplayer/danmaku";
import route from "@/router/router";
import ViewUser from "@/components/view/view-user.vue";
import ViewComments from "@/components/view/view-comments.vue";
import {BulletOption} from "@nplayer/danmaku/dist/src/ts/danmaku/bullet";


//  <----- 视频播放器相关

// 弹幕元素
const danmakuOptions = {
  items: [
    { time: 1, text: '弹幕～' }
  ]
}





const danmaku= new Danmaku(danmakuOptions);


// 播放数据
let player={
  src: 'http://127.0.0.1:9000/video/4/03348210-1188-4668-9750-f2c220fdc532.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=8KG65FE8KHOP3J3Q2KUF%2F20240405%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240405T105543Z&X-Amz-Expires=604800&X-Amz-Security-Token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NLZXkiOiI4S0c2NUZFOEtIT1AzSjNRMktVRiIsImV4cCI6MTcxMjM0NTYyMCwicGFyZW50IjoiYWRtaW4ifQ.4QkRLrU5n7WGr2hhsinHjqXeWCn3jxjSWbJ4m2JJLRMv-fVSIGpVgkdxMfMWOvHP8iFBi54gAY3UGfMitoJWLQ&X-Amz-SignedHeaders=host&versionId=null&X-Amz-Signature=3c34fa22614344e24bbbfcf5a1f9d7b3275ac51aa37e339abe1cee24ac2518f7',

  plugins: [
    danmaku
  ],


}

// 构造函数
const setPlayer= (p) => {
    p.on('DanmakuSend', (opts) => {
     console.log("接收的弹幕：",opts)
     });

    player = p;


}

setInterval(()=>{
  if(player&&('currentTime' in player)){
    console.log("播放数据",player.currentTime)  // 当前的播放时间
  }

},1000)

const getPlayer=(p)=>{
  console.log("获取播放对象",p)
}
const options=ref(player)

//  -----> 视频播放器相关

//  <----- tab页面相关
const active=ref(0)
const tab=ref(['简介','评论'])

const viewTabA=ref(true)  // 标签页面参数
const viewTabB=ref(false)  // 标签页面参数
function TabTo(to:number){
  active.value=to
  if(to==1){
    viewSelectColorA.value='black'
    viewSelectColorB.value='#0264e7'

    setTimeout(()=>{
      viewTabA.value=true
      viewTabB.value=false
    },1000)



    moveUnderline("A")
  }else {
    setTimeout(()=>{
      viewTabA.value=false
      viewTabB.value=true
    },1000)


    viewSelectColorA.value='#0264e7'
    viewSelectColorB.value='black'
    moveUnderline("B")
  }
}

const message=ref(`输入`)
const faoltInput=ref(null) // dom
function  moveInputAboveKeyboard() {
  // 将输入框移动到输入法上方
  const inputField = this.$refs.inputField;
  inputField.style.position = 'fixed';
  inputField.style.bottom = 'auto';
  inputField.style.zIndex = '9999';
  // 这里可以根据具体情况调整高度
  inputField.style.bottom = '50px';
}



// 弹出弹幕框
function Pl(){
  // 获得焦点
  faoltInput.value.focus()
}

const viewSelectButtonInput=ref(null)

function OnvViewSelectButtonInputClick(){
  // div.classList.toggle('expanded'); // 切换CSS类以触发动画
  console.log("点击输入弹幕")
  isExpanded.value = !isExpanded.value;
  inputMsg.value=''
  if(!isExpanded.value){
    inputMsg.value='点我发送弹幕'
  }

  // viewSelectButtonInput.value.classList.toggle('expanded');
}

const isExpanded=ref(false)
const inputMsg=ref('点我发送弹幕');
// 点击div时切换isExpanded的值，触发动画效果
const toggleSize = () => {
  isExpanded.value = !isExpanded.value;
};

const A=ref(null)
const B=ref(null)
const  underlineTransform=ref('translateX(7rem)') ; // 下划线的初始位置
// <--- 画线动
function moveUnderline(target) {
  if (target === 'B') {
    underlineTransform.value = 'translateX(7rem)'; // 移动到A下方
  } else if (target === 'A') {
    const offset =  B.value.offsetLeft; -  A.value.offsetLeft;
    underlineTransform.value = 'translateX(' + offset + 'px)'; // 移动到B下方
  }
}
// ---> 画线动画

const viewSelectColorA=ref('#0264e7')   // 选择的切换的颜色
const viewSelectColorB=ref('black')   // 选择的切换的颜色

//  -----> tab页面相关

// <---  切换动画
//const active = ref(0);
//  动画控件
const flyA=ref("")
const flyB=ref("")

watch(active,(newValue,oldValue)=>{
  if(newValue==1){
    flyA.value="fly-inR"

    flyB.value="fly-inLL"
  }else{
    flyA.value="fly-inL"

    flyB.value="fly-inRR"
  }

})

// --->  切换动画



// ---> 弹幕弹出框所需要的输入框

const InputState=ref(false) // 当前弹幕输入框的状态，是否处于输入状态
function onInputFocus() {
  console.log("获得焦点")
  inputDmInputState.value=false
  InputState.value=true
  window.addEventListener('resize', updateKeyboardHeight);



}
function onInputBlur() {
  InputState.value=false

  //this.isKeyboardVisible = false;

  window.removeEventListener('resize',updateKeyboardHeight);
}
function updateKeyboardHeight() {

  const inputDm= document.getElementById('inputDm')

  //this.gd=inputDm.getBoundingClientRect().top;

  inputDm.style.position='absolute;'
  inputDm.style.top= ''+inputDm.getBoundingClientRect().top+'px'
  inputDm.style.bottom=''

  const inputDmSelect= document.getElementById('inputDmSelect')
   inputDmSelect.style.background='#e9e9eb'
  inputDmSelect.style.position='absolute'

  const topTemp=inputDm.getBoundingClientRect().top+inputDm.getBoundingClientRect().height
  inputDmSelect.style.width='100%'
  inputDmSelect.style.top=topTemp+'px'
  inputDmSelect.style.height='999px'


}

// <--- 弹幕弹出框所需要的输入框

// 切换选择页面



// <--- 弹幕输入框
const inputDmIcon1Color=ref('rgba(0, 0, 0, 0.2)')
const inputDmIcon2Color=ref('rgba(0, 0, 0, 0.2)')

const checkedFont=ref('2') // 选择字号
const checkedLocation=ref('2') // 选择字体位置
const checkedColor=ref('2') // 选择字体颜色


const  inputDmInput=ref(null) // 真实弹幕输入框

// 点击输入弹幕
function InputBarrage(e){

  e.stopPropagation();
  inputMsg.value='正在输入弹幕'
  InputDomState.value=true  // 开启面板
  try {
    InputState.value=true
    const ShowFocus=()=>{
      setTimeout(()=>{
        try {
          inputDmInput.value.focus()
        }catch(e) {
          console.error("失败重试：",e)
          ShowFocus()

        }


      },10)
    }
    ShowFocus()




  //  inputDmInput.value.focus()
  }catch (E){
    console.error("点击弹幕输入虚拟框处：error:",E)
  }
}
// ---> 弹幕输入框


// 点击小红旗
const inputDmInputState=ref(false)

function  onClickComments(e){
  e.stopPropagation();


  console.log("当前是否亮：",inputDmInputState)
  // inputDmInput.value.focus()
  try {
    if(inputDmInputState.value){
      inputDmInputState.value=false
      inputDmInput.value.focus()
      console.log("亮")
    }else {
      inputDmInputState.value=true
    }



  }catch (e){
    console.error("点击弹幕选项设置按钮--小红旗：",e)
  }

}
// watch(inputDmInputState.value,(n)=>{
//   if(n){
//
//   }
// })

// 点击 弹幕输入框
function OnClickinputDmInput(e){
  e.stopPropagation();
}
// 点击下面的弹幕控件
function OnClickInputDmSelect(e){
  e.stopPropagation();
}

// 点击页面的其他地方
// 面板收起
const  InputDomState=ref(false)  // 弹幕设置组件显示控件--1
function AppOnClick(){
  InputDomState.value=false // 关闭
  inputMsg.value='点我输入弹幕'
  console.log("页面有点击")
}

/**
 弹幕对象

 interface BulletOption {
  color?: string; // 弹幕颜色
  text: string; // 弹幕文字
  time: number; // 弹幕出现时间
  type?: 'top' | 'bottom' | 'scroll'; // 弹幕类型，默认为滚动类型
  isMe?: boolean; // 是否是当前用户发送的
  force?: boolean; // 是否强制展示该弹幕（弹幕较多，并且是防碰撞模式时，可能会丢弃一部分弹幕）
}
 * @constructor
 */

const barrage=ref<BulletOption>({
  color:'white',
  text:'',
  time:0,
  type:'scroll',
  isMe:'true'
});

// 弹幕数据发送 TODO
function OnClickSend(){
  barrage.value.color=checkedColor.value // 弹幕颜色
 // barrage.value.text=''  // 弹幕文字
  if(player&&('currentTime' in player)){
    barrage.value.time=player.currentTime // 弹幕出现时间
  }
 // barrage.value.time=player.currentTime // 弹幕出现时间
  barrage.value.type=checkedLocation.value  // 'top' | 'bottom' | 'scroll'; // 弹幕类型，默认为滚动类型
  barrage.value.isMe=true  //  // 是否是当前用户发送的
  console.log("发送消息:",barrage.value)
}

</script>

<template>
    <div id="view"  @click="AppOnClick">
      <div id="view-head">
        <van-nav-bar
            title="标题"
            left-text="返回"
            left-arrow
            @click-left="route.back();"
        />
      </div>


<!--
      视频组件

-->
      <div>
        <NPlayer
            :options="options"
            :set="setPlayer"
            :get="getPlayer"
        />
      </div>


<!--

        Tab 页面切换按钮
-->
      <div>
        <div id="view-select">
          <div id="view-select-button-body">
            <div class="view-select-button" ref="A" @click="TabTo(0)" :style="{color:viewSelectColorA}" ><span class="view-select-button-font">简介</span></div>
            <div class="view-select-button" ref="B" @click="TabTo(1)" :style="{color:viewSelectColorB}"><span class="view-select-button-font" >评论</span></div>
            <div id="underline" :style="{ transform: underlineTransform }"></div>
          </div>

<!--
          弹幕输入虚拟框-- 上下顺序相反 左右
-->
          <div class="view-select-button-input-body">


            <div  class="view-select-button-input"  ref="viewSelectButtonInput"  :class="{ 'expanded': isExpanded }" >

<!--
    “弹” 字
-->
              <div class="view-select-button-input-dan"    @click="OnvViewSelectButtonInputClick">

                <span class="view-select-button-input-font">弹</span>
                <el-icon   size="6rem" color="#0264e7" v-if="!isExpanded" class="view-select-button-input-font-icon"><Check /></el-icon>
                <el-icon   size="6rem" color="rgba(0, 0, 0, 0.2)" v-if="isExpanded" class="view-select-button-input-font-icon"><Close /></el-icon>
              </div>
<!--
        控件--请输入文字
 -->
              <div class="view-select-button-input-body-msg"  @click="InputBarrage"><span class="view-select-button-input-body-msgFont">{{inputMsg}}</span></div>

            </div>


          </div>
        </div>


<!--

        用户简介页面
        评论输入界面
-->
        <div id="view-select-context">
          <div class="view-select-user" :class="flyA">
            <view-user></view-user>
          </div>
          <div class="view-select-comments" :class="flyB" >
            <view-comments></view-comments>
          </div>
        </div>

      </div>

<!--
          弹幕输入框

-->
      <div :style="{'font-size':'4rem' }"  v-show="InputDomState" >
        <div  id="inputDm"  :style="{position: 'fixed', bottom: 0,width: '100%'}">
          <van-icon   @click="onClickComments"  :color="inputDmInputState?'#0264e7':'#e9e9eb'" size="7rem" class="inputDm-icon1" name="flag-o" />
          <input type="text" ref="inputDmInput"  id="inputDm-input" v-model="barrage.text" @click="OnClickinputDmInput"    @focus="onInputFocus" @blur="onInputBlur" placeholder="点击输入框弹出键盘">
          <van-icon :color="inputDmIcon2Color"  @click="OnClickSend"  size="7rem" class="inputDm-icon2" name="guide-o" />
        </div>
 
<!--
          弹幕字号选择
-->
        <div    class="keyboard-overlay" id="inputDmSelect" @click="OnClickInputDmSelect">
            <div class="inputDm-body" >
              <div class="inputDm-body-font">弹幕字号</div>
              <div>

                <van-radio-group v-model="checkedFont"  direction="horizontal" checked-color="red">
                  <van-radio name="1" :style="{'--van-radio-label-color':checkedFont=='1'?' #0264e7 ':' black '}">
                    大字号
                    <template #icon="props">
                   </template>
                  </van-radio>
                  <van-radio name="2"  :style="{'--van-radio-label-color':checkedFont=='2'?' #0264e7 ':' black '}">
                    中字号
                    <template #icon="props">
                     </template>
                  </van-radio>
                  <van-radio name="3"  :style="{'--van-radio-label-color':checkedFont=='3'?' #0264e7 ':' black '}">
                    小字号
                    <template #icon="props">
                     </template>
                  </van-radio>
                </van-radio-group>
              </div>

            </div>

<!--
        弹幕位置选择
        // 'top' | 'bottom' | 'scroll'; // 弹幕类型，默认为滚动类型
-->
          <div class="inputDm-body">
            <div class="inputDm-body-font">弹幕位置</div>
            <div>

              <van-radio-group v-model="checkedLocation"  direction="horizontal" checked-color="red">
                <van-radio name="top" :style="{'--van-radio-label-color':checkedLocation=='top'?' #0264e7 ':' black '}">
                  顶部
                  <template #icon="props">
                  </template>
                </van-radio>
                <van-radio name="scroll"  :style="{'--van-radio-label-color':checkedLocation=='scroll'?' #0264e7 ':' black '}">
                  滚动
                  <template #icon="props">
                  </template>
                </van-radio>
                <van-radio name="bottom"  :style="{'--van-radio-label-color':checkedLocation=='bottom'?' #0264e7 ':' black '}">
                  底部
                  <template #icon="props">
                  </template>
                </van-radio>
              </van-radio-group>
            </div>
          </div>


<!--
          弹幕颜色选择
-->

            <div class="inputDm-body" id="inputDm-body-color-select">
              <div class="inputDm-body-font"  id="inputDm-body-font-select">弹幕颜色</div>
              <div>

                <van-radio-group v-model="checkedColor"  direction="horizontal" checked-color="red">
                  <van-radio name="#337ecc" >
                    <div class="inputDm-body-font-color" :style="{'border': checkedColor=='#337ecc'?' 2px solid #0264e7':' 0px solid #0264e7',background:'#337ecc'}" ></div>
                    <template #icon="props">
                    </template>
                  </van-radio>
                  <van-radio name="#79bbff" >
                    <div class="inputDm-body-font-color" :style="{'border': checkedColor=='#79bbff'?' 2px solid #0264e7':' 0px solid #0264e7',background:'#79bbff'}"></div>
                    <template #icon="props">
                    </template>
                  </van-radio>
                  <van-radio name="#529b2e"  >
                    <div class="inputDm-body-font-color" :style="{'border': checkedColor=='#529b2e'?' 2px solid #0264e7':' 0px solid #0264e7',background:'#529b2e'}"></div>
                    <template #icon="props">
                    </template>
                  </van-radio>


                  <van-radio name="#95d475"  >
                    <div class="inputDm-body-font-color" :style="{'border': checkedColor=='#95d475'?' 2px solid #0264e7':' 0px solid #0264e7',background:'#95d475'}"></div>
                    <template #icon="props">
                    </template>
                  </van-radio>
                  <van-radio name="#b88230"  >
                    <div class="inputDm-body-font-color" :style="{'border': checkedColor=='#b88230'?' 2px solid #0264e7':' 0px solid #0264e7',background:'#b88230'}"></div>
                    <template #icon="props">
                    </template>
                  </van-radio>
                  <van-radio name="#eebe77"  >
                    <div class="inputDm-body-font-color" :style="{'border': checkedColor=='#eebe77'?' 2px solid #0264e7':' 0px solid #0264e7',background:'#eebe77'}"></div>
                    <template #icon="props">
                    </template>
                  </van-radio>
                  <van-radio name="#c45656" >
                    <div class="inputDm-body-font-color" :style="{'border': checkedColor=='#c45656'?' 2px solid #0264e7':' 0px solid #0264e7',background:'#c45656'}"></div>
                    <template #icon="props">
                    </template>
                  </van-radio>
                  <van-radio name="#f89898"  >
                    <div class="inputDm-body-font-color" :style="{'border': checkedColor=='#f89898'?' 2px solid #0264e7':' 0px solid #0264e7',background:'#f89898'}"></div>
                    <template #icon="props">
                    </template>
                  </van-radio>
                  <van-radio name="#73767a"  >
                    <div class="inputDm-body-font-color" :style="{'border': checkedColor=='#73767a'?' 2px solid #0264e7':' 0px solid #0264e7',background:'#73767a'}"></div>
                    <template #icon="props">
                    </template>
                  </van-radio>
                  <van-radio name="#b1b3b8"  >
                    <div class="inputDm-body-font-color" :style="{'border': checkedColor=='#b1b3b8'?' 2px solid #0264e7':' 0px solid #0264e7',background:'#b1b3b8'}"></div>
                    <template #icon="props">
                    </template>
                  </van-radio>
                  <van-radio name="#000000"  >
                    <div class="inputDm-body-font-color" :style="{'border': checkedColor=='#000000'?' 2px solid #0264e7':' 0px solid #0264e7',background:'#000000'}"></div>
                    <template #icon="props">
                    </template>
                  </van-radio>
                  <van-radio name="#FFFFFF"  >
                    <div class="inputDm-body-font-color" :style="{'border': checkedColor=='#FFFFFF'?' 2px solid #0264e7':' 0px solid #0264e7',background:'#FFFFFF'}"></div>
                    <template #icon="props">
                    </template>
                  </van-radio>
                </van-radio-group>
              </div>
            </div>

<!--
        占位置控件
-->
            <div id="inputDm-bottom"></div>

        </div>
      </div>

<!--      <van-field-->
<!--          v-model="message"-->
<!--          rows="1"-->
<!--          ref="faoltInput"-->
<!--          autosize-->
<!--          label="留言"-->
<!--          type="textarea"-->
<!--          placeholder="请输入留言"-->
<!--          class="faoltInput"-->
<!--      />-->



<!--      <van-tabs v-model:active="active" title-active-color="#0264e7" ellipsis="false"  shrink="true">-->
<!--        <van-tab v-for="index in 2">-->
<!--          <template #title >-->
<!--            <van-icon name="more-o" />选项-->

<!--          </template>-->
<!--          <div v-if="index==2" id="view-van-tabs-input2"> </div>-->
<!--          内容 {{ index }}-->
<!--        </van-tab>-->
<!--      </van-tabs>-->

<!--      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">-->
<!--        <el-tab-pane label="User" name="first">User</el-tab-pane>-->
<!--        <el-tab-pane label="Config" name="second">Config</el-tab-pane>-->
<!--        <el-tab-pane label="Role" name="third">Role</el-tab-pane>-->
<!--        <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>-->
<!--        <div  id="view-van-tabs-input2"> </div>-->
<!--      </el-tabs>-->


    </div>
</template>

<style scoped>
@import "@/css/mobile/view.css";
@import "@/css/pc/view.css";
</style>

