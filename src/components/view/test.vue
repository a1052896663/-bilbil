<template>
  <div id="app">
    <!-- 实际输入框 -->
    <input
        type="text"
        v-model="inputText"
        @focus="onInputFocus"
        ref="realInput"
    >

    <!-- 浮动输入框 -->
    <input
        v-show="showFloatingInput"
        type="text"
        id="floatingInput"
        ref="sda"

        v-model="inputText"

    >

    <!-- 点击按钮触发生成浮动输入框 -->
    <button @click="createFloatingInput">点击生成浮动输入框</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const  realInput =ref(null)
    const sda=ref(null)
    const inputText = ref('');
    const showFloatingInput = ref(false);



    const onInputFocus = () => {
      console.log("虚拟输入框获得焦点")
      realInput.value.blur();
      console.log("虚拟输入框取消焦点")
      showFloatingInput.value=true
      sda.value.focus();

    };

    const onInputBlur = () => {
      // 隐藏浮动输入框
      hideFloatingInput();
    };

    return {realInput, sda,inputText, showFloatingInput,   onInputFocus, onInputBlur };
  }
}
</script>

<style>
#floatingInput {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
}
</style>
