import {replyObject, routePath, ViewCommentArray, ViewUpUserId} from "../store/DataStore";
import {Comments, COMMENTS_TYPE, CommentsData, ViewComment} from "./type";
import {id} from '../store/UserSrore'
import route from "@/router/router";
export function isOfType<T>(  // 判断是什么类型
    target: unknown,
    prop: keyof T
  ): target is T {
    return (target as T)[prop] !== undefined;
  }




export     function formatTime(seconds) {  // 传递一个秒


  try {
    const date = new Date(null);
    date.setSeconds(seconds);

    let formattedTime = date.toISOString().substr(11, 8);
    //console.log("直接输出：",formattedTime)
    if(typeof formattedTime=="string"){
      const regex=/0+:/
      const result=   formattedTime.replace(regex,'')
      // console.log("匹配结果：",result)
      formattedTime=result
    }
    return formattedTime;
  }catch (e){
    console.error(e)
    return seconds
  }

}

export  function hasKey(obj:any,key:string){
  return obj&&(key in obj)
}

export function formatDateTime(time:number) {   // 时间格式化--时间搓
  const date:Date=new Date(time)
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  // const hours = String(date.getHours()).padStart(2, '0');
  // const minutes = String(date.getMinutes()).padStart(2, '0');
  // const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function formatDateTime3(time:number) {   // 时间格式化--时间搓
  const date:Date=new Date(time)
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  // const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

export function formatDateTime2(time:number) {   // 时间格式化--时间搓
  const date:Date=new Date(time)
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
 // const seconds = String(date.getSeconds()).padStart(2, '0');
 // 2024/1/12 • 14:20
  return `${year}/${month}/${day} • ${hours}:${minutes}`;
}

/**
 *
 *   VIDEO="VIDEO",// 对视频的评论
 *  VIDEO_REPLY="VIDEO_REPLY", //视频中的回复的回复
 *  VIDEO_REFUTATION="VIDEO_REFUTATION", //视频中的回复的回怼
 *  DELETE="DELETE",// 删除
 *  DYNAMIC="DYNAMIC", // 动态中的回复
 *  DYNAMIC_REPLY="DYNAMIC_REPLY", // 动态中的回复的回复
 */
//replyObject.value.type==COMMENTS_TYPE.VIDEO_REPLY
  export function getCOMMENTS_TYPE(type:COMMENTS_TYPE){
    switch (type)    {
      case COMMENTS_TYPE.VIDEO:
        return COMMENTS_TYPE.VIDEO_REPLY;
      case COMMENTS_TYPE.VIDEO_REPLY:
      case COMMENTS_TYPE.VIDEO_REFUTATION:
        return COMMENTS_TYPE.VIDEO_REFUTATION;
      default:
        return COMMENTS_TYPE.VIDEO


    }

  }

  export function routerTo(to:string){
    routePath.value=to
    route.push('/route')
  }









const TestData:CommentsData[]=[]

const data1: Comments={
  id: 0,
  videoId: 1,
  userId: 2,
  commentsType: COMMENTS_TYPE.VIDEO,
  content: "你好1",
  toCommentId: -1,
  parentId: -1,
  likeNum: 0,
  date: 0,
  review: false,
  deleted: 0,
  userName:"小王",
  userImageSrc:""
}

const data2: Comments={
  id: 2,
  videoId: 1,
  userId: 2,
  commentsType: COMMENTS_TYPE.VIDEO,
  content: "你好2",
  toCommentId: -1,
  parentId: -1,
  likeNum: 0,
  date: 0,
  review: false,
  deleted: 0,
  userName:"小红",
  userImageSrc:""
}

const data3: Comments={
  id: 3,
  videoId: 1,
  userId: 2,
  commentsType: COMMENTS_TYPE.VIDEO_REPLY,
  content: "你好呀小王",
  toCommentId: 0,
  parentId: 0,
  likeNum: 0,
  date: 0,
  review: false,
  deleted: 0,
  userName:"小白",
  userImageSrc:""
}

const data4: Comments={
  id: 4,
  videoId: 1,
  userId: 3,
  commentsType: COMMENTS_TYPE.VIDEO_REFUTATION,
  content: "你好呀小白",
  toCommentId: 3,
  parentId: 0,
  likeNum: 0,
  date: 0,
  review: false,
  deleted: 0,
  userName:"小李",
  userImageSrc:""
}
const a1:CommentsData={
  comments:data1,
  likeState:false
}
const a2:CommentsData={
  comments:data2,
  likeState:false
}
const a3:CommentsData={
  comments:data3,
  likeState:false
}
const a4:CommentsData={
  comments:data4,
  likeState:false
}
TestData.push(a1)
TestData.push(a2)
TestData.push(a3)
TestData.push(a4)
let VIDEO_DATA:CommentsData[]=[]
let VIDEO_REPLY_DATA:CommentsData[]=[]
let VIDEO_REFUTATION_DATA:CommentsData[]=[]

let ViewCommentVideoData:ViewComment[]=[]
let ViewCommentVideoReplyData:ViewComment[]=[]
let ViewCommentVideoRefutationData:ViewComment[]=[]

// 分配-- 评论
export function Assignment(List:CommentsData[]){ // 评论数据\
    // 数组清空
  VIDEO_DATA=[];
  VIDEO_REPLY_DATA=[]
  VIDEO_REFUTATION_DATA=[]

  ViewCommentVideoData=[]
  ViewCommentVideoReplyData=[]
  ViewCommentVideoRefutationData=[]


  List.forEach((item)=>{
    switch (item.comments.commentsType) {
      case COMMENTS_TYPE.VIDEO:
        VIDEO_DATA.push(item)
        break;

      case COMMENTS_TYPE.VIDEO_REPLY:
        VIDEO_REPLY_DATA.push(item)
        break;
      case COMMENTS_TYPE.VIDEO_REFUTATION:
        VIDEO_REFUTATION_DATA.push(item)
        break;
    }
  })
  // VIDEO_DATA_INIT()
  ViewCommentVideoDataInit()
  return ViewCommentVideoData
}

function findByCommentId(list:ViewComment[],id:number){


  return list.find(item=>item.id==id)
}

// TODO 设置头像


// 初始化第一层
function ViewCommentVideoDataInit(){
  VIDEO_DATA.forEach(item=>{

    const ViewCommentTemp:ViewComment={
      id:         item.comments.id, // 评论id
      userId:item.comments.userId,
      parentId:   -1,  // 父类id--依附于
      toComment:  undefined,  // 新加回怼的评论id  //COMMENTS_TYPE.VIDEO_REFUTATION 时候才会有值
      videoId:    item.comments.videoId,// 视频id
      userName:       item.comments.userName,  // 用户名字[
      userImageSrc:   item.comments.userImageSrc, // 用户图片地址
      likeSize:   item.comments.likeNum,// 点赞数目
      time:   item.comments.date,   // 时间搓
      content:    item.comments.content,  // 评论内容
      deleteShow: ViewUpUserId.value==id.value||id.value==item.comments.userId, // 是否可以删除
      child:  [] , // 回复,
      type:   item.comments.commentsType,
      likeState:item.likeState,
      upload:true
    }
    ViewCommentVideoData.push(ViewCommentTemp)
  })

  ViewCommentVideoReplyDataInit()
}

// 初始化第二层次
function ViewCommentVideoReplyDataInit(){

  VIDEO_REPLY_DATA.forEach(item=>{

    const ViewCommentTemp:ViewComment={
      id:         item.comments.id, // 评论id
      parentId:   item.comments.parentId,  // 父类id--依附于
      toComment:  undefined,  // 新加回怼的评论id  //COMMENTS_TYPE.VIDEO_REFUTATION 时候才会有值
      videoId:    item.comments.videoId,// 视频id
      userName:       item.comments.userName,  // 用户名字[
      userImageSrc:   item.comments.userImageSrc, // 用户图片地址
      likeSize:   item.comments.likeNum,// 点赞数目
      time:   item.comments.date,   // 时间搓
      userId:item.comments.userId,
      content:    item.comments.content,  // 评论内容
      deleteShow: ViewUpUserId.value==id.value||id.value==item.comments.userId, // 是否可以删除 TODO 根据用户判断 直接的视频直接的评论
      child:  [] , // 回复,
      type:   item.comments.commentsType,
      likeState:item.likeState,
      upload:true
    }
    ViewCommentVideoReplyData.push(ViewCommentTemp)

    const parentItem= findByCommentId(ViewCommentVideoData, item.comments.parentId)
    if(parentItem){
      parentItem.child.push(ViewCommentTemp)
    }
  })


  ViewCommentVideoRefutationDataInit()
}


function ViewCommentVideoRefutationDataInit(){

  VIDEO_REFUTATION_DATA.forEach(item=>{


    const ViewCommentTemp:ViewComment={
      id:         item.comments.id, // 评论id
      userId:item.comments.userId,
      parentId:   item.comments.parentId,  // 父类id--依附于
      toComment:  findByCommentId(ViewCommentVideoReplyData,item.comments.toCommentId),  // 新加回怼的评论id  //COMMENTS_TYPE.VIDEO_REFUTATION 时候才会有值
      videoId:    item.comments.videoId,// 视频id
      userName:       item.comments.userName,  // 用户名字[
      userImageSrc:   item.comments.userImageSrc, // 用户图片地址
      likeSize:   item.comments.likeNum,// 点赞数目
      time:   item.comments.date,   // 时间搓
      content:    item.comments.content,  // 评论内容
      deleteShow: ViewUpUserId.value==id.value||id.value==item.comments.userId, // 是否可以删除 TODO 根据用户判断 直接的视频直接的评论
      child:  [] , // 回复,
      type:   item.comments.commentsType,
      likeState:item.likeState,
      upload:true
    }

    ViewCommentVideoRefutationData.push(ViewCommentTemp)
    const parentItem= findByCommentId(ViewCommentVideoData, item.comments.parentId)
    if(parentItem){
      parentItem.child.push(ViewCommentTemp)
    }

  })
}

/**
 * 删除评论
 * @param commentId
 * @param parentId
 * @constructor
 */
export function DeleteComment(commentId:number,parentId:number){
  console.log("需要删除的评论：",commentId, " 父亲：",parentId)
  if(parentId==-1){
    // 删除视频评论
    const indexToDelete = ViewCommentArray.value.findIndex(obj => obj.id === commentId);

    if (indexToDelete !== -1) {
      ViewCommentArray.value.splice(indexToDelete, 1); // 删除一个元素
      console.log("删除评论：",commentId)
    }

  }else {
    // 删除回怼
    const fzItem = ViewCommentArray.value.find(obj => obj.id === parentId);
    const indexToDelete=  fzItem.child.findIndex(obj=>obj.id === commentId)
    if (indexToDelete !== -1) {
      fzItem.child.splice(indexToDelete, 1); // 删除一个元素
      console.log("删除评论：",commentId)
    }

  }
}

//Assignment()

// console.log("最终需要的数据",JSON.stringify(ViewCommentVideoData));