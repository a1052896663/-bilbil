<script setup>
import {setValue,getValue} from '@/store/RouterStore'

import {ref} from "vue";

let re=ref(0)
function set(){
  re.value++
  setValue(1,re.value)
}
</script>

<template>
  <div>

    <button @click="set()">+1</button>
  </div>

</template>

<style scoped>
div{
  background: grey;
  width: 10rem;
  height: 10rem;
}
</style>