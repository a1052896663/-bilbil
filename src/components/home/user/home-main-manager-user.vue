<script setup lang="ts">

import {ref} from "vue";
import {active} from '../../../store/DataStore'

const visible=ref(true)

function OnClickUserOut(){
  visible.value=false
  setTimeout(()=>{
    active.value=0
  },200)

}
</script>

<template>

  <transition name="van-slide-right">

    <div id="home-main-manager-user" v-show="visible">
      <div id="view-user-brief">
        <div id="view-user-brief-image">
          <van-image
              round
              width="20rem"
              height="20rem"
              fit="cover"

              src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
        </div>


        <div id="view-user-body-user">
          <div class="user-name">ING中国

            <el-icon :color="'#c8c9cc'" size="4.3rem"><EditPen /></el-icon>
          </div>
          <div class="user-massage">
            <div class="user-fan user-massage-item">火花：4</div>

            <div class="user-placeholding"></div>
          </div>

        </div>


      </div>
      <div id="home-main-manager-user-car">
        <div class="home-main-manager-user-car-item">

          <div class="home-main-manager-user-car-item-size">
            30
          </div>
          <div class="home-main-manager-user-car-item-font">
            社区
          </div>
        </div>

        <div class="home-main-manager-user-car-item home-main-manager-user-car-item2">
          <div class="home-main-manager-user-car-item-size">
            20
          </div>
          <div class="home-main-manager-user-car-item-font">
            关注
          </div>
        </div>

        <div class="home-main-manager-user-car-item">
          <div class="home-main-manager-user-car-item-size">
            3
          </div>
          <div class="home-main-manager-user-car-item-font">
            粉丝
          </div>
        </div>
      </div>

      <div id="home-main-manager-user-list">

        <div class="home-main-manager-user-list-item">
          <el-icon color="#1989fa" size="5.3rem"><Clock /></el-icon>
          <div class="home-main-manager-user-list-item-font">
            观看历史
          </div>
          <div  class="home-main-manager-user-list-item-m"></div>
          <div class="home-main-manager-user-list-item-icon">
            <el-icon color="#1989fa" size="5.3rem"><ArrowRight /></el-icon>
          </div>

        </div >

        <div class="home-main-manager-user-list-item">
          <el-icon color="#1989fa" size="5.3rem"><Star /></el-icon>
          <div class="home-main-manager-user-list-item-font">
            我的收藏
          </div>
          <div class="home-main-manager-user-list-item-m"></div>
          <div class="home-main-manager-user-list-item-icon">
            <el-icon color="#1989fa" size="5.3rem"><ArrowRight /></el-icon>
          </div>


        </div>

        <div class="home-main-manager-user-list-item">
          <el-icon color="#1989fa" size="5.3rem"><Edit /></el-icon>
          <div class="home-main-manager-user-list-item-font">
            信息修改
          </div>
          <div class="home-main-manager-user-list-item-m"></div>
          <div class="home-main-manager-user-list-item-icon">
            <el-icon color="#1989fa" size="5.3rem"><ArrowRight /></el-icon>
          </div>

        </div>
        <div class="home-main-manager-user-list-item">
          <el-icon color="#1989fa" size="5.3rem"><Upload /></el-icon>
          <div class="home-main-manager-user-list-item-font">
            视频投稿
          </div>
          <div class="home-main-manager-user-list-item-m"></div>
          <div class="home-main-manager-user-list-item-icon">
            <el-icon color="#1989fa" size="5.3rem"><ArrowRight /></el-icon>
          </div>

        </div>
        <div class="home-main-manager-user-list-item">
          <el-icon color="#1989fa" size="5.3rem"><DocumentAdd /></el-icon>
          <div class="home-main-manager-user-list-item-font">
            稿件管理
          </div>
          <div class="home-main-manager-user-list-item-m"></div>
          <div class="home-main-manager-user-list-item-icon">
            <el-icon color="#1989fa" size="5.3rem"><ArrowRight /></el-icon>
          </div>

        </div>

      </div>

      <div id="home-main-manager-user-out">
        <el-button  size="large" round>切换账号</el-button>
        <el-button @click="OnClickUserOut" size="large" id="user-out" type="danger" round>退出登录</el-button>
      </div>
    </div>

  </transition>
</template>

<style scoped>
@import "@/css/mobile/home-main-manager-user.css";
</style>