<script setup lang="ts">

import route from "@/router/router";
import {routePath} from '../../store/DataStore'


switch (routePath.value){
  case "BACK":
    route.back();
    route.back();
    break;
  default:
    route.push(routePath.value)
}

</script>

<template>
<diu>
  路由页面
</diu>
</template>

<style scoped>

</style>