<script setup lang="ts">
import {ref} from "vue";
import {getValue,setValue} from '@/store/RouterStore'
import Mm from "@/components/home/mm.vue";
import {HttpGet, setToken} from "@/api/http";

setValue(2,"3")

let refHlloe= ref('')
refHlloe.value=getValue(1)

function toGet2(){
  HttpGet('/get2').then(e=>{
    setToken(e.data)
  })
}
function toGet3(){
  HttpGet('/get3')
}
</script>

<template>
<div>
  <mm></mm>
  主页2{{refHlloe}}
</div>
  <button @click="toGet2"> 向/get2发送请求</button>
  <button @click="toGet3"> 向/get3发送请求</button>
</template>

<style scoped>

</style>