import {defineStore} from "pinia";

export function getUserToken(){
    const userStore2= UserStore();
    return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiMTIzNDU1NiIsInN1YiI6ImFkbWluLXRlc3QiLCJleHAiOjE3MDYwMzU5MzYsImp0aSI6IjZmNjhhOTM0LTU0M2YtNGExNS1iYWNmLTM4OGQxY2Y3OGQ0ZSJ9.qIaY6oa85_pkQbqIIp7c3PZ9gEvSLANhmxDd-hksVBE";
};
export function setUserToken(token){
    const userStore2= UserStore();
     userStore2.token=token;
};

const UserStore=defineStore('user',{

    // 类似于组件的 data,存储全局状态的
    // 必须是箭头函数
    state: ()=>{
        return {
            name:'',
            id:'',
            token:''
        }
    },
    // 类似computed 计算属性，有缓存功能
    getters:{

    },
    // 类似组件的methods,封装业务逻辑，修改 state
    actions:{  }
})