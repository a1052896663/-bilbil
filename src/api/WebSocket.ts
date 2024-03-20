import { Message, Resonse, VideoMessage } from "@/util/type";
import WebSocket from 'ws';


class Ws<T>{
    private ws:WebSocket;
    private i:number=0;
    public constructor(router:string){
        this.ws=new WebSocket(router)
        this.ws.on('open', function open() {})
    }
     public  sendMessage( message:T){
      this.i++;
      if(this.i>10){
        console.error("error--消息发送失败--连接未建立--",message);
        
      }
  
      if(this.ws.readyState === WebSocket.OPEN){
         const msg= JSON.stringify(message)
         this.ws.send(msg)
         this.i=0;
      }else{
      
        setTimeout(()=>{
          //this.sendMessage
          this.sendMessage(message)
        },500) // 500ms 后
      }
  
        
    }
     public  onMessage(fun:  (rep:Resonse<T>) =>void){
      
          this.ws.addEventListener("message",
            (repC:any)=>{
              const repData:Resonse<T>=  JSON.parse(repC.data) 
              if(repData.status===404){
               console.error("websocket--错误");
               
               return;
              }
              fun(repData)
             
           }
          )
    }
  }
  