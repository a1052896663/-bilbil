import {Response, SERVICE_ROUT, User} from "../util/type";
import {ref} from "vue";
import {HttpPost, HttpPut} from "../api/http";

export const USER_TEMP={
    account: ref<string>(""),
    avatar: ref<string>(""),
    id: ref<number>(),
    token:"",
    userName: ref<string>(""), // 需要展示
    userImage:ref<string>(""),

    userSparkle: ref<number>(0), // 火花数量

    userConcern:ref<number>(0), // 关注数量
    userSomeone:ref<number>(0),// 粉丝数量
    userCommunity:ref<number>(0), // 社区动态数量
    userVideoSize:ref<number>(0),// 视频数量

    password: "",
    role: "",
    time: 0,
    version: 0

}

export const {account} =USER_TEMP
export const {userName} =USER_TEMP
export const {avatar} =USER_TEMP
export const {userImage} =USER_TEMP
export const {id} =USER_TEMP
export const {userConcern} =USER_TEMP
export const {userSomeone} =USER_TEMP
export const {userSparkle} =USER_TEMP
export const {userCommunity} =USER_TEMP
export const {userVideoSize} =USER_TEMP

// 自动登录--token登录--token登录失败--保存密码
// TODO 存储浏览器 -- 添加评论-- 添加粉丝--点赞-- 删除评论--收藏--soket

 async  function TokenLogin(){
    console.log("自动等")
    let token= localStorage.getItem('user-token');
    if(!token){
        token=""
    }
    try {
        const P={
            token :token
        }
        const user:Response<User>=  (await  HttpPost(SERVICE_ROUT.TOKEN_LOGIN,P)).data
        if(user.status==200)  {
            USER_TEMP.id.value=user.body.id;
            USER_TEMP.token=user.token;
            USER_TEMP.userImage.value=user.body.imageSrc; // 改成路径
            USER_TEMP.role=user.body.role
            USER_TEMP.userName.value=user.body.name;


            USER_TEMP.userSparkle.value=user.body.sparkle;
            USER_TEMP.userCommunity.value=user.body.community;
            USER_TEMP.userConcern.value=user.body.concern;
            USER_TEMP.userSomeone.value=user.body.someone;
            USER_TEMP.userVideoSize.value=user.body.videoSize;

            localStorage.setItem('user-token',user.token)
            localStorage.   setItem('user-id',String( user.body.id))
            localStorage.   setItem('user-account',user.body.account)
            localStorage.   setItem('user-avatar',user.body.avatar)
            localStorage.  setItem('user-userName',user.body.name)
            localStorage   . setItem('user-userImage',user.body.imageSrc)
            localStorage.   setItem('user-role',user.body.role)

            localStorage.   setItem('user-sparkle',String(user.body.sparkle) )



            localStorage.   setItem('user-community',String(user.body.community) )
            localStorage.   setItem('user-concern',String(user.body.concern) )
            localStorage.   setItem('user-someone',String(user.body.someone) )
            localStorage.   setItem('user-videoSize',String(user.body.videoSize) )




            console.log("自动登录成功：",user)
        }
    }catch (e){
        console.error("自动登录错误：",e)
    }

}

// 初始化用户数据
export async function InitData(){
    try {

        await localhostData();
        await TokenLogin();



    }catch (E){
        console.error("数据：error:",E)
    }
}

// 从本机读取数据
async function localhostData(){
    // 从本机读取数据

    USER_TEMP.id.value= Number(localStorage.      getItem('user-id'))
    USER_TEMP.account.value=localStorage.   getItem('user-account')
    USER_TEMP.avatar.value=localStorage.     getItem('user-avatar')
    USER_TEMP.token= localStorage.           getItem('user-token')
    USER_TEMP.userName.value= localStorage.  getItem('user-userName')
    USER_TEMP.userImage.value= localStorage. getItem('user-userImage')
    USER_TEMP.role=  localStorage.           getItem('user-role')

    USER_TEMP.userSparkle.value=Number( localStorage.getItem('user-sparkle' ))


    USER_TEMP.userCommunity.value=     Number( localStorage. getItem('user-community'))
    USER_TEMP.userConcern.value= Number( localStorage. getItem('user-concern'))
    USER_TEMP.userSomeone.value= Number( localStorage. getItem('user-someone'))
    USER_TEMP.userVideoSize.value= Number( localStorage. getItem('user-videoSize'))

}



export function getUserToken(){
    return USER_TEMP.token
}

export function setUserToken(_:any){

}




