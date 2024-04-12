import {replyObject} from "../store/DataStore";
import {COMMENTS_TYPE} from "./type";

export function isOfType<T>(  // 判断是什么类型
    target: unknown,
    prop: keyof T
  ): target is T {
    return (target as T)[prop] !== undefined;
  }




  export     function formatTime(seconds) {  // 传递一个秒
    const date = new Date(null);
    date.setSeconds(seconds);

    let formattedTime = date.toISOString().substr(11, 8);
    console.log("直接输出：",formattedTime)
    if(typeof formattedTime=="string"){
      const regex=/0+:/
      const result=   formattedTime.replace(regex,'')
      console.log("匹配结果：",result)
      formattedTime=result
    }
    return formattedTime;
  }
  export  function hasKey(obj:any,key:string){
      return obj&&(key in obj)
  }

  export function formatDateTime(time:number) {   // 时间格式化
    const date:Date=new Date(time)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    // const hours = String(date.getHours()).padStart(2, '0');
    // const minutes = String(date.getMinutes()).padStart(2, '0');
    // const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day}`;
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