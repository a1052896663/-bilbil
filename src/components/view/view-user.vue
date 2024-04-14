<!--
用户简介界面

-->

<script setup lang="ts">
import {ref, toRefs} from "vue";
import {shareShow} from '../../store/DataStore'
import {formatDateTime3} from  '../../util/util'
import Search from "@/components/home/search/search-view.vue";
 //import {shareShow} from '../../store/RouterStore'
const userButton=ref(false)

const activeNames = ref([]);


// 下面一排按钮  <---

const buttonLike=ref(false)  // 点赞
const buttonNoLike=ref(false)  // 不喜欢
const buttonFire=ref(false)  // 热度
const  buttonCollection=ref(false)  // 收藏
const buttonShare=ref(false)  // 转发

// 下面一排按钮  --->

// const { showShare } = defineProps({
//   showShare:{
//     type: Boolean, // 接收的参数类型
//     default: false, //默认值
//   }
//
// })



// const props = defineProps({
//   showShare: Boolean,
// })
// //使用父组件传递过来的值
// const {showShare} =toRefs(props)
//
// setInterval(()=>{
//   console.log("值数据：",props.showShare)
// })

const ProP=  defineProps({
  msg: {
    type: Boolean,	// 类型
    required: true,	// 是否必传
  },
  viewCardBody:{
    type:Object,
    default:null,
  }
});

const labe=ref([])

const labs= ProP.viewCardBody.label.split(';')
labe.value=labs
</script>

<template>
  <div id="view-user">
    <div id="view-user-body">
      <div id="view-user-brief">
        <div id="view-user-brief-image">
          <van-image
              round
              width="10rem"
              height="10rem"
              fit="cover"

              src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
        </div>


        <div id="view-user-body-user">
          <div class="user-name">ING中国</div>
          <div class="user-massage">
            <div class="user-fan user-massage-item">12粉丝</div>
            <div class="user-video user-massage-item2">13视频</div>
            <div class="user-placeholding"></div>
          </div>

        </div>

<!--        <el-icon><Check /></el-icon>-->
<!--        <el-icon><Plus /></el-icon>-->
<!--        <van-icon name="success" />-->
<!--        <el-button   size="small" :color="userButton?'#0264e7': '#e9e9eb'" auto-insert-space="true"  @click="userButton=!userButton" type="primary" :icon="userButton? Plus:Check"> {{userButton?'已关注':'关注'}} {{" "}}  </el-button>-->


        <van-button  style="white-space:pre" size="mini"   @click="userButton=!userButton" :icon="userButton?'success':'plus'"  :color="userButton?'#0264e7': '#e9e9eb'" type="primary"> {{userButton?'已关注':` 关  注 `}} </van-button>

<!--        按钮 -->

      </div>
      <div id="view-user-unfold">
        <van-collapse v-model="activeNames"  :border="false">
          <van-collapse-item name="1" >
            <template #title >
              <div style="white-space:pre" class="view-user-unfold-title">
              <span style=" white-space: normal;">{{viewCardBody.title}}</span>
                <div id="view-user-unfold-attribute">
                  <div class="view-user-unfold-attribute-item"><van-icon name="play-circle-o" /> {{viewCardBody.viewSize}}</div>
                  <div class="view-user-unfold-attribute-item"><van-icon name="other-pay" /> {{viewCardBody.barrage.length}}</div>
                  <div class="view-user-unfold-attribute-item"><van-icon name="clock-o" />  {{formatDateTime3(viewCardBody.date)}}</div>
                  <div class="view-user-unfold-attribute-item"><van-icon name="friends-o" /> {{viewCardBody.viewSize}}</div>
                </div>

              </div>
            </template>
            <span>
                       {{viewCardBody.brief}}

            </span>

            <div id="view-user-unfold-tag" v-if="labe">
              <van-tag round color="rgb(228 230 236)"  v-for="item in labe" text-color="#606266" :style="{'font-size':'3.4rem'}"  size="large" type="success" class="view-user-unfold-tag-item">{{item}}</van-tag>
<!--              <van-tag round color="rgb(228 230 236)" text-color="#606266"  :style="{'font-size':'3.4rem'}" size="large" type="primary" class="view-user-unfold-tag-item"> 标签B</van-tag>-->
<!--              <van-tag round color="rgb(228 230 236)" text-color="#606266"   :style="{'font-size':'3.4rem'}"  size="large" type="primary" class="view-user-unfold-tag-item"> 标签C标</van-tag>-->
<!--              <van-tag round color="rgb(228 230 236)" text-color="#606266"  :style="{'font-size':'3.4rem'}"  size="large" type="primary" class="view-user-unfold-tag-item">标签D标签A标签A</van-tag>-->
<!--              <van-tag round color="rgb(228 230 236)" text-color="#606266"  :style="{'font-size':'3.4rem'}"  size="large" type="primary" class="view-user-unfold-tag-item">标签D标签A</van-tag>-->
<!--              <van-tag round color="rgb(228 230 236)" text-color="#606266"  :style="{'font-size':'3.4rem'}"  size="large" type="primary" class="view-user-unfold-tag-item">标签D</van-tag>-->
<!--              <van-tag round color="rgb(228 230 236)" text-color="#606266"  :style="{'font-size':'3.4rem'}"   size="large" type="primary" class="view-user-unfold-tag-item">标签D标签A </van-tag>-->
            </div>

          </van-collapse-item>

        </van-collapse>
      </div>
      <div id="view-user-like">

        <div  class="view-user-like-item">
          <van-icon :color="buttonLike?'#0264e7':''" @click="buttonLike=!buttonLike" size="7rem" name="good-job" />
          <div class="view-user-like-item-font">{{viewCardBody.likeSize}}</div>
        </div>

        <div class="view-user-like-item">
          <van-icon  :color=" buttonNoLike?'#0264e7':''" @click="buttonNoLike=!buttonNoLike" id="view-user-like-item-buttonNoLike"  size="7rem" name="good-job" />
          <div class="view-user-like-item-font">不喜欢</div>
        </div>

        <div class="view-user-like-item">
          <van-icon :color="buttonFire?'#0264e7':''" @click="buttonFire=!buttonFire" size="7rem"  name="fire" />
          <div class="view-user-like-item-font">{{viewCardBody.heatSize}}</div>
        </div>

        <div class="view-user-like-item">

          <van-icon :color="buttonCollection?'#0264e7':''" @click="buttonCollection=!buttonCollection" size="7rem"  name="star" />
          <div class="view-user-like-item-font">{{viewCardBody.collectionSize}}</div>
        </div>

        <div class="view-user-like-item">
          <van-icon :color="buttonShare?'#0264e7':''" @click="(buttonShare=!buttonShare)&(shareShow = !shareShow)" size="7rem" name="share" />
          <div class="view-user-like-item-font">分享</div>
        </div>

      </div>
      <van-divider />
    </div>
<!--    <search :searchSize="8"></search>-->

  </div>

</template>

<style scoped>
@import "@/css/mobile/view-user.css";




</style>