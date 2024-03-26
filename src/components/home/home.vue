<script setup lang="ts">
import animate from "animate.css";
import {HttpGet} from "@/api/http";
import {onMounted, ref, onActivated, onUnmounted, watch} from "vue";
import {SERVICE_ROUT,Resonse,Play} from '../../util/type'
import {formatTime} from "../../util/util"
import route from "@/router/router";
import {TabsPaneContext} from "element-plus";
import * as http from "http";
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


const play=ref<Resonse<Play[]>>()

onMounted( async ()=>{
  console.log("组件home激活");
  try {
    play.value=(await HttpGet(SERVICE_ROUT.VIDEO_INIT_GET)).data
    if(play.value.status==404){
      console.error("home页面错误：404")
    }

    console.log("得到的数据：",play.value.body)
  }catch (e){
    console.error("home页面错误：",e)
  }

})

onUnmounted(async ()=>{
  console.log("组件home销毁")
})
const  to=()=>{
  route.push("/login")
  console.log("跳转login");
  
}

// 下面导航卡片
const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const textActive=ref(false)

const active = ref(0);
//  动画控件
const fly=ref("")

watch(active,(newValue,oldValue)=>{
  if(newValue>oldValue){
    fly.value="fly-inR"
  }else {
    fly.value="fly-inL"
  }
})


// 输入框
const input=ref("")
const onSearch=()=>{
  // 回车
}

const errorHandler = () => true
</script>

<template>
<!--  &lt;!&ndash; <div>-->
<!--    <video ref="player" :src="streamUrl" @timeupdate="updateProgress" controls></video>-->
<!--    <progress ref="progressBar" max="100"></progress>-->
<!--  </div> &ndash;&gt;-->
<!--  <button @click="to">跳转login</button>-->
<!--  <div id="test">-->

<!--  </div>-->

  <div id="home">
    <div id="home-head">

        <div id="home-user">
            <img
                src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
            />
        </div>

<!--        <input placeholder="搜索"  id="home-search">-->
<!--        <div id="home-search-font">搜索</div>-->
      <van-search
          v-model="input"

          shape="round"
          background="#ffffff"
          placeholder="请输入搜索关键词"
          @search="onSearch"

      />
              <div id="home-search-font"><span>搜索</span></div>
<!--      <i id="home-el-icon" class="el-icon-search"></i>-->


    </div>
    <div id="home-main">


      <div id="home-main-home"  :class="fly"   v-if="active==0">
        <div v-for="i in 11" :key="i" class="home-main-home-item">
          <div >
<!--            图片当作背景-->
<!--            播放量-->
<!--            时间-->
          </div>
          <div>
<!--            标题-->
<!--            作者-->
          </div>
        </div>
      </div>



      <div id="home-main-qr"  :class="fly"  v-if="active==1">
        <div>home2</div>
      </div>



      <div id="home-main-chat"  :class="fly"  v-if="active==2">
        <div>home3</div>
      </div>



      <div id="home-main-manager" :class="fly"  v-if="active==3">
        <div>home4</div>
      </div>


    </div>
    <div id="home-bottom">
<!--      <el-badge :value="12" class="item">-->
<!--        <el-button>comments</el-button>-->
<!--      </el-badge>-->


      <van-tabbar v-model="active">
        <van-tabbar-item icon="wap-home-o">主页</van-tabbar-item>
        <van-tabbar-item icon="qr">社区</van-tabbar-item>
        <van-tabbar-item icon="chat-o"  badge="20">消息</van-tabbar-item>
        <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<style  scoped>
@import "@/css/mobile/home.css";
@import "@/css/pc/home.css";

</style>

