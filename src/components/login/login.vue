<script setup lang="ts">

import {onMounted, ref,onActivated} from "vue";
import route from "../../router/router";
onActivated(()=>{
  console.log("组件login激活");
  
})
const to=()=>{
    route.push("/home")
}
</script>

<template>
    <button @click="to">跳转home</button>

</template>

<style scoped>

</style>@/api/Http