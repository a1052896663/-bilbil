<script setup lang="ts">

import {ref} from "vue";
import {active, typeShow} from '../../../store/DataStore'
import route from '../../../router/router.js'

import {userName,userImage,userConcern,userSomeone,userSparkle,userCommunity} from "../../../store/UserSrore";

const visible=ref(true)

function OnClickUserOut(){
  visible.value=false
  setTimeout(()=>{
    active.value=0
  },200)

}
function OnClickBar(){
  visible.value=false
  setTimeout(()=>{
    active.value=0
  },200)
}

function ToHistory(){
  setTimeout(()=>{
    route.push('/timeView')
  },200)

}
</script>

<template>

  <transition name="van-slide-right">

    <div id="home-main-manager-user" v-show="visible">
      <van-nav-bar
          title="个人中心"
          left-text="返回"
          left-arrow
          @click-left="OnClickBar"

      />

      <div id="view-user-brief">
        <div id="view-user-brief-image">
          <van-image
              round
              width="20rem"
              height="20rem"
              fit="cover"

              :src="userImage"
          />
        </div>


        <div id="view-user-body-user">
          <div class="user-name">{{userName}}

            <el-icon :color="'#c8c9cc'" size="4.3rem"><EditPen /></el-icon>
          </div>
          <div class="user-massage">
            <div class="user-fan user-massage-item">火花：{{userSparkle}}</div>

            <div class="user-placeholding"></div>
          </div>

        </div>


      </div>
      <div id="home-main-manager-user-car">
        <div class="home-main-manager-user-car-item">

          <div class="home-main-manager-user-car-item-size">
            {{userCommunity}}
          </div>
          <div class="home-main-manager-user-car-item-font">
            社区
          </div>
        </div>

        <div class="home-main-manager-user-car-item home-main-manager-user-car-item2">
          <div class="home-main-manager-user-car-item-size">
            {{userConcern}}
          </div>
          <div class="home-main-manager-user-car-item-font">
            关注
          </div>
        </div>

        <div class="home-main-manager-user-car-item">
          <div class="home-main-manager-user-car-item-size">
            {{userSomeone}}
          </div>
          <div class="home-main-manager-user-car-item-font">
            粉丝
          </div>
        </div>
      </div>

      <div id="home-main-manager-user-list">

        <div class="home-main-manager-user-list-item" @click="ToHistory">
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