<script setup lang="ts">
import {HttpGet} from "@/api/http";
import {onMounted, ref,onActivated} from "vue";

import route from "@/router/router";
const player = ref(null)
let url=ref('')
const streamUrl = ref('')
const progressBar = ref(null)

// onMounted(() => {
//   const player = document.getElementById('player')

//   // 在组件挂载后，可以对播放器进行操作
//   //player.addEventListener('timeupdate', updateProgress)
// })

// const updateProgress = () => {
//   const player = document.getElementById('player') as any

//   if (progressBar.value && player.duration) {
//     const progress = (player.currentTime / player.duration) * 100
//     progressBar.value.value = progress
//   }
// }

// onMounted( () => {
//   const at=async ()=>{
//    let  req=await  HttpGet("/url")
//     streamUrl.value=req.data
//     console.log("播放地址：",streamUrl.value)
//   }
//   at();

// })

// beforeRouteEnter((to, from, next)=> {
//     	// 在组件生命周期beforeCreate阶段触发，未创建实例vc
// 	    console.log('组件内路由前置守卫 beforeRouteEnter', this) // this指向vc
// 	  //   next((vm) => {
// 	  //   	console.log('组件内路由前置守卫 vm', vm) // vm 是this的原型
// 	  //   })
//   	// })
//   	// beforeRouteUpdate((to, from, next) => {
// 	  //   // 可以访问组件实例 
// 	  //   // 重新获取用户信息
// 		// getUserInfo(to.params.id).then(() => next()).catch((err) => next(err))
// 	})
// beforeRouteLeave((to, from, next) {
// 	    // 导航离开该组件的对应路由时调用
// 	    // 可以访问组件实例
// 	    // 1.1 提示用户是否保存数据 
// 	    if (this.dialogVisibility === true) {
// 		    this.dialogVisibility = false //关闭弹出框
// 		    next(false) //回到当前页面, 阻止页面跳转
// 		}else if(this.saveMessage === false) {
// 		    alert('请保存信息后退出!') //弹出警告
// 		    next(false) //回到当前页面, 阻止页面跳转
// 		}else {
// 		    next() //否则允许跳转
// 		}
// 		// 1.2 清除当前组件中的定时器
// 		window.clearInterval(timer) //清楚定时器
//   		next()
// 		// 1.3 保存相关内容到Vuex中或Session中
// 		localStorage.setItem(name, content); //保存到localStorage中
//     	next()
// 	})


onActivated(()=>{
  console.log("组件home激活");
  
})
const  to=()=>{
  route.push("/login")
  console.log("跳转login");
  
}
</script>

<template>
  <!-- <div>
    <video ref="player" :src="streamUrl" @timeupdate="updateProgress" controls></video>
    <progress ref="progressBar" max="100"></progress>
  </div> -->
  <button @click="to">跳转login</button>
</template>

<style scoped>

</style>@/api/Http