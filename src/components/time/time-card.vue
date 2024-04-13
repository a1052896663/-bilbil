<script setup lang="ts">
// 观看历史的展示卡片
import SearchView from "@/components/home/search/search-view.vue";
import {ref} from "vue";


const imageSrc=ref('src/public/interlude_Miku_in_Museland_3.png')


defineProps({
  searchSize: {
    type:Number,
    default:10
  }
})
</script>

<template>
<!--    <div id="time-card">-->
<!--      -->
<!--    </div>-->

  <div id="time-view">
    <div class="time-view-item" >
      <div class="time-view-item-image">
        <van-image

            width="100%"
            height="100%"
            :src="imageSrc"
        />
        <div class="time-view-item-image-m"> </div>
        <!--        <div class="time-view-item-view"><van-icon name="play-circle-o" /> 27.9万</div>-->
        <div class="time-view-item-time">01:56</div>
      </div>
      <div class="time-view-item-content">
        <div  class="time-view-item-content-title">
          初音未来！学些初音未来学些初音未来学些初音未来学些初音未来学些初音未来
        </div>
        <div>
          <div class="time-view-item-view"><van-icon size="4rem" name="user-circle-o" /> <span class="time-view-item-size-time1" >初音未来A初音未来AAAAAAAAAA</span> </div>
          <div class="time-view-item-size">   <el-icon size="4rem"><Clock /></el-icon> <span class="time-view-item-size-time">  {{'2024/12/1'}} • {{'12:13'}} </span></div>
        </div>
        <van-divider />
      </div>

    </div>

  </div>
  <div style="height:1px; margin-top:-1px;clear: both;overflow:hidden;"></div>

</template>

<style scoped>
@import "@/css/mobile/time-card.css";
</style>