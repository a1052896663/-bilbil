<script setup lang="ts">

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

  <div id="view-search">
    <div class="view-search-item" v-for="item in searchSize">
      <div class="view-search-item-image">
        <van-image

            width="100%"
            height="100%"
            :src="imageSrc"
        />
        <div class="view-search-item-image-m"> </div>
<!--        <div class="view-search-item-view"><van-icon name="play-circle-o" /> 27.9万</div>-->
        <div class="view-search-item-time">01:56</div>
      </div>
      <div class="view-search-item-content">
        <div  class="view-search-item-content-title">
          初音未来！学些初音未来学些初音未来学些初音未来学些初音未来学些初音未来
        </div>
        <div>
          <div class="view-search-item-view"><van-icon name="user-circle-o" /> 初音未来</div>
          <div class="view-search-item-size"><van-icon name="play-circle-o" />  {{'299'}} • {{'12月1号'}} </div>
        </div>
        <van-divider />
      </div>

    </div>

  </div>
  <div style="height:1px; margin-top:-1px;clear: both;overflow:hidden;"></div>

</template>

<style scoped>
@import "@/css/mobile/search.css";
</style>