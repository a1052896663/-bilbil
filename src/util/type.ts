 export enum SERVICE_ROUT{ // 后端路由
  ServerPath="http://localhost:8080",
  HELLO_GET="/hello",
  LOGIN_OST="/user/login", 
  OUT_DELETE="/user/out", // 退出登录
  ENROLL_PUT="/user/enroll" ,//注册
  AVATAR_POST="/user/avatar", // 设置用户头像
  VIDEO_INIT_GET="/video/init",
  USER_SOCKET="",
  VIDEO_SOCKET=""
}

//   <----  响应体相关

export interface User{
  id?:number
  name?:string
  role?:string
  account?:string
  password?:string
  avatar?:string
  time?:number
  version?:number
}

export interface Video{
  id?:number
  userId?:number
  url?:string
  filePath?:string // 文件路径
  review?:boolean
  title?:string
  brief?:string
  viewNum?:number
  collection?:number
  likes?:number
  comments?:string
  label?:string
  coverImageUrl?:string
  coverImageFilePath?:string // 封面路径
  playback?:number
  date?:number // 日期
  version?:number
}

export interface Message{// req USER_SOCKET
  id?:number
  fromUserId?:number
  toUserId?:number
  type?:string
  content?:string
  date?:number
  state?:boolean
  videoId?:number
  deleted?:number
}

export interface NoteMessage{ //  rep USER_SOCKET
  message:Message
  fromUser:User
  uuid:string
}

export interface  VideoMessage{  // VIDEO_SOCKET   rep ANd req
  messageId?:string
  token?:string
  type?:string
  videoId?:number
  videoLikeNumber?:number
  videoCommentsNumber?:number
  videoCollectionNumber?:number
  view?:number
  sessionId?:string
  like?:boolean
  collection?:boolean
  comments?:Comments
  
}


export interface Comments{ // 评论 ---
  id?:number
  videoId?:number
  toUserId?:number
  userId?:number
  commentsType?:string
  content?:string
  toCommentId?:number  // 新加回怼的评论id
  parentId?:number
  likeNum?:number
  date?:number
  review?:boolean  // 审核状态
  deleted?:number
}
export interface CommentsData{ // 评论信息
  comments:Comments
  likeState:boolean
}

export interface Play{
  video:Video // 视频信息
  like:boolean // 点赞信息
  collection:boolean // 收藏状态
  comments:CommentsData[] // 评论内容
}



export interface Resonse<T>{   // Http的响应体
  token?:string
  status:number
  body?:T
}

// ---->  响应体相关

 // <----  视图展示相关

export interface ViewComment{  // 视图需要的信息--评论
  id:number, // 评论id
  parentId?:number,  // 父类id--依附于
  toComment?:ViewComment  // 新加回怼的评论id  //COMMENTS_TYPE.VIDEO_REFUTATION 时候才会有值
  videoId:number,// 视频id
  userName:string,  // 用户名字
  userImageSrc:string, // 用户图片地址
  likeSize:number,// 点赞数目
  time:number,   // 时间搓
  content:string,  // 评论内容
  deleteShow:boolean, // 是否可以删除
  child?:ViewComment[]  // 回复,
  type:COMMENTS_TYPE

}

// 视频卡片
export interface VideoCard{
  id:number, // 视频id,
  userId:number,// 用户id,
  videoId:number,// 视频，
  videoImage:number, // 视频图片
  videoSrc:string, // 视频播放地址
  videoTime:number, // 视频时长
  time:number,// 历史观看时间,
  title:string, // 标题
}

export enum COMMENTS_TYPE{
  VIDEO="VIDEO",// 对视频的评论
 VIDEO_REPLY="VIDEO_REPLY", //视频中的回复的回复
 VIDEO_REFUTATION="VIDEO_REFUTATION", //视频中的回复的回怼
 DELETE="DELETE",// 删除
 DYNAMIC="DYNAMIC", // 动态中的回复
 DYNAMIC_REPLY="DYNAMIC_REPLY", // 动态中的回复的回复
}
 // ---->  视图展示相关
