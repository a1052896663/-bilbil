import axios, {AxiosResponse, AxiosStatic} from "axios";
import {getUserToken, setUserToken} from "../store/UserSrore";
import {InitData} from "../util/InitData"
// @ts-ignore
import qs from "qs"

// 服务器地址
const ServerPath:string=InitData.ServerPath

// 创建对象
const http=axios.create({
    baseURL:ServerPath,
    timeout: 5000, // 设置请求超时时间
})

// 设置拦截器--在给发送后端请求前
http.interceptors.request.use(config=>{
    config.headers.set("token",getToken())
    return config
})

export function  getToken(){
    return getUserToken();
}
export  function  setToken(token){
    setUserToken(token)
}

// 封装一下
export  function  HttpGet(url:string,data?:object){
    if(typeof data!='undefined'){
        return http.get(url+"?"+qs.stringify(data))
    }

    return http.get(url)
}

export  function  HttpPost(url:string,data?:object){
    return http.post(url,data)
}

export  function  HttpPut(url:string,data?:object){
    return http.put(url,data)
}

export  function  HttpDelete(url:string,data?: object){
    if(typeof data!='undefined'){
        return http.delete(url+"?"+qs.stringify(data))
    }

    return http.delete(url)
}