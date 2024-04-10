<script setup lang="ts">

import {onMounted, ref, onActivated, onUnmounted} from "vue";
import route from "../../router/router";
onMounted(()=>{
  console.log("组件login激活");
  
})
onUnmounted(async ()=>{
  console.log("组件login销毁")
})
const to=()=>{
    route.push("/home")
}
</script>

<template>
    <button @click="to">跳转home</button>
    <div id="test"></div>
</template>

<style scoped>

</style>