<script setup lang="ts">


import {onMounted, ref, watch} from "vue";
import Danmaku from "@nplayer/danmaku";
import route from "@/router/router";
import ViewUser from "@/components/view/view-user.vue";
import ViewComments from "@/components/view/view-comments.vue";


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
  console.log("动画")
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
function onInputFocus() {

  window.addEventListener('resize', updateKeyboardHeight);



}
function onInputBlur() {

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
  inputDmSelect.style.background='black'
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
// ---> 弹幕输入框

</script>

<template>
    <div id="view">
      <div id="view-head">
        <van-nav-bar
            title="标题"
            left-text="返回"
            left-arrow
            @click-left="route.back();"
        />
      </div>

      <div>
        <NPlayer
            :options="options"
            :set="setPlayer"
            :get="getPlayer"
        />
      </div>


      <div>
        <div id="view-select" @click="Pl">
          <div id="view-select-button-body">
            <div class="view-select-button" ref="A" @click="TabTo(0)" :style="{color:viewSelectColorA}" ><span class="view-select-button-font">简介</span></div>
            <div class="view-select-button" ref="B" @click="TabTo(1)" :style="{color:viewSelectColorB}"><span class="view-select-button-font" >评论</span></div>
            <div id="underline" :style="{ transform: underlineTransform }"></div>
          </div>

          <div class="view-select-button-input-body">

            <div  class="view-select-button-input"  ref="viewSelectButtonInput"  :class="{ 'expanded': isExpanded }" >
<!--              变动框-->

              <div class="view-select-button-input-dan"    @click="OnvViewSelectButtonInputClick">

                <span class="view-select-button-input-font">弹</span>
                <el-icon   size="6rem" color="#0264e7" v-if="!isExpanded" class="view-select-button-input-font-icon"><Check /></el-icon>
                <el-icon   size="6rem" color="rgba(0, 0, 0, 0.2)" v-if="isExpanded" class="view-select-button-input-font-icon"><Close /></el-icon>
              </div>
              <div class="view-select-button-input-body-msg"><span class="view-select-button-input-body-msgFont">{{inputMsg}}</span></div>

            </div>


          </div>
        </div>

<!--        <van-tabs v-model:active="active" show-header="false" animated  id="view-van-tabs" title-active-color="#0264e7" ellipsis="false"  shrink="true">-->

<!--          <van-tab v-for="(item,index) in tab" :title="item" :key="index">-->
<!--            <div id="view-user"  v-if="active==0">-->
<!--              {{item}}-->

<!--            </div>-->
<!--            <div id="view-comments"  v-if="active==1" >-->
<!--              {{item}}-->
<!--              -->

<!--            </div>-->

<!--          </van-tab>-->

<!--        </van-tabs>-->
        <div id="view-select-context">
          <div class="view-select-user" :class="flyA">
            <view-user></view-user>
          </div>
          <div class="view-select-comments" :class="flyB" >
            <view-comments></view-comments>
          </div>
        </div>

      </div>

      
      <div :style="{'font-size':'4rem' }">
        <div  id="inputDm"  :style="{position: 'fixed', bottom: 0,width: '100%'}">
          <van-icon :color="inputDmIcon1Color" size="7rem" class="inputDm-icon1" name="flag-o" />
          <input type="text"  id="inputDm-input"   @focus="onInputFocus" @blur="onInputBlur" placeholder="点击输入框弹出键盘">
          <van-icon :color="inputDmIcon2Color" size="7rem" class="inputDm-icon2" name="guide-o" />
        </div>
 
      
        <div    class="keyboard-overlay" id="inputDmSelect">
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

          <div class="inputDm-body">
            <div class="inputDm-body-font">弹幕位置</div>
            <div>

              <van-radio-group v-model="checkedLocation"  direction="horizontal" checked-color="red">
                <van-radio name="1" :style="{'--van-radio-label-color':checkedLocation=='1'?' #0264e7 ':' black '}">
                  大字号
                  <template #icon="props">
                  </template>
                </van-radio>
                <van-radio name="2"  :style="{'--van-radio-label-color':checkedLocation=='2'?' #0264e7 ':' black '}">
                  中字号
                  <template #icon="props">
                  </template>
                </van-radio>
                <van-radio name="3"  :style="{'--van-radio-label-color':checkedLocation=='3'?' #0264e7 ':' black '}">
                  小字号
                  <template #icon="props">
                  </template>
                </van-radio>
              </van-radio-group>
            </div>
          </div>


            <div class="inputDm-body" id="inputDm-body-color-select">
              <div class="inputDm-body-font"  id="inputDm-body-font-select">弹幕颜色</div>
              <div>

                <van-radio-group v-model="checkedColor"  direction="horizontal" checked-color="red">
                  <van-radio name="1" >
                    <div class="inputDm-body-font-color" :style="{'border': checkedColor=='1'?' 2px solid #0264e7':' 0px solid #0264e7'}" ></div>
                    <template #icon="props">
                    </template>
                  </van-radio>
                  <van-radio name="2" >
                    <div class="inputDm-body-font-color" :style="{'border': checkedColor=='2'?' 2px solid #0264e7':' 0px solid #0264e7'}"></div>
                    <template #icon="props">
                    </template>
                  </van-radio>
                  <van-radio name="3"  >
                    <div class="inputDm-body-font-color" :style="{'border': checkedColor=='3'?' 2px solid #0264e7':' 0px solid #0264e7'}"></div>
                    <template #icon="props">
                    </template>
                  </van-radio>


                  <van-radio name="4"  >
                    <div class="inputDm-body-font-color" :style="{'border': checkedColor=='4'?' 2px solid #0264e7':' 0px solid #0264e7'}"></div>
                    <template #icon="props">
                    </template>
                  </van-radio>
                  <van-radio name="5"  >
                    <div class="inputDm-body-font-color" :style="{'border': checkedColor=='5'?' 2px solid #0264e7':' 0px solid #0264e7'}"></div>
                    <template #icon="props">
                    </template>
                  </van-radio>
                  <van-radio name="6"  >
                    <div class="inputDm-body-font-color" :style="{'border': checkedColor=='6'?' 2px solid #0264e7':' 0px solid #0264e7'}"></div>
                    <template #icon="props">
                    </template>
                  </van-radio>
                  <van-radio name="7" >
                    <div class="inputDm-body-font-color" :style="{'border': checkedColor=='7'?' 2px solid #0264e7':' 0px solid #0264e7'}"></div>
                    <template #icon="props">
                    </template>
                  </van-radio>
                  <van-radio name="8"  >
                    <div class="inputDm-body-font-color" :style="{'border': checkedColor=='8'?' 2px solid #0264e7':' 0px solid #0264e7'}"></div>
                    <template #icon="props">
                    </template>
                  </van-radio>
                  <van-radio name="9"  >
                    <div class="inputDm-body-font-color" :style="{'border': checkedColor=='9'?' 2px solid #0264e7':' 0px solid #0264e7'}"></div>
                    <template #icon="props">
                    </template>
                  </van-radio>
                  <van-radio name="10"  >
                    <div class="inputDm-body-font-color" :style="{'border': checkedColor=='10'?' 2px solid #0264e7':' 0px solid #0264e7'}"></div>
                    <template #icon="props">
                    </template>
                  </van-radio>
                  <van-radio name="11"  >
                    <div class="inputDm-body-font-color" :style="{'border': checkedColor=='11'?' 2px solid #0264e7':' 0px solid #0264e7'}"></div>
                    <template #icon="props">
                    </template>
                  </van-radio>
                  <van-radio name="12"  >
                    <div class="inputDm-body-font-color" :style="{'border': checkedColor=='12'?' 2px solid #0264e7':' 0px solid #0264e7'}"></div>
                    <template #icon="props">
                    </template>
                  </van-radio>
                </van-radio-group>
              </div>
            </div>


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

