<script setup lang="ts">
import {HttpGet} from "@/api/http";
import {onMounted,onBeforeUpdate} from "vue";
import route from "@/router/router";

onBeforeUpdate(async ()=>{
  try{
   
  }catch(e){
    console.error("error:=== App.vue===",e);
    
    
  }
  
})
onMounted(()=>{
  route.push('/home')
})


</script>

<template>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>

</template>
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
@/api/Http