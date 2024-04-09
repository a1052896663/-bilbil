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