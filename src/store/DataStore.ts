import {ref} from "vue";
import {ViewComment} from "../util/type";

/**
 * 状态数据管理--跨页面  解决 pinia 失效的问题
 */
const emojiTemp:string[]=[
    '😀','😁','😂','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','😗','😙','😚','😇','😐','😑','😶'
    ,'😏','😣','😥','😮','😯','😪','😫','😴','😌','😛','😜','😝','😒','😓','😔','😕','😲','😷','😖','😞',
    '😟','😤','😢','😭','😦','😧','😨','😬','😰','😱','😳','😵','😡','😠','💘','❤','💓','💔','💕','💖',
    '💗','💙','💚','💛','💜','💝','💞','💟','❣','💪','👈','👉','☝','👆','👇','✌','✋','👌','👍','👎',
    '✊','👊','👋','👏','👐','✍','🍇','🍈','🍉','🍊','🍋','🍌','🍍','🍎','🍏','🍐','🍑','🍒','🍓',
    '🍅','🍆','🌽','🍄','🌰','🍞','🍖','🍗','🍔','🍟','🍕','🍳','🍲','🍱','🍘','🍙','🍚','🍛','🍜',
    '🍝','🍠','🍢','🍣','🍤','🍥','🍡','🍦','🍧','🍨','🍩','🍪','🎂','🍰','🍫','🍬','🍭','🍮','🍯',
    '🍼','☕','🍵','🍶','🍷','🍸','🍹','🍺','🍻','🍴','🌹','🍀','🍎','💰','📱','🌙','🍁','🍂','🍃',
    '🌷','💎','🔪','🔫','🏀','⚽','⚡','👄','👍','🔥','🙈','🙉','🙊','🐵','🐒','🐶','🐕','🐩','🐺',
    '🐱','😺','😸','😹','😻','😼','😽','🙀','😿','😾','🐈','🐯','🐅','🐆','🐴','🐎','🐮','🐂','🐃',
    '🐄','🐷','🐖','🐗','🐽','🐏','🐑','🐐','🐪','🐫','🐘','🐭','🐁','🐀','🐹','🐰','🐇','🐻','🐨',
    '🐼','🐾','🐔','🐓','🐣','🐤','🐥','🐦','🐧','🐸','🐊','🐢','🐍','🐲','🐉','🐳','🐋','🐬','🐟',
    '🐠','🐙','🐚','🐌','🐛','🐜','🐝','🐞','🦋','😈','👿','👺','💀','☠','👻','👽','👾','💣'

]

const DataStore={
    shareShow:ref(false) , // 分享面板是否展示
    commentSectionReplyShow:ref(false) ,// 评论详情控件
    commentRoute:ref<ViewComment>(), // 需要展示的评论-- 暂时舍弃
    emoji:emojiTemp,
    emojiShow:ref(false), // emo表情展示版的控件
    inputCommentTopShow:ref(false)  ,// 展示控件,
    typeShow:ref(0), // 当前显示的页面
    replyObject:ref<ViewComment>() ,//  评论回复对象
    addOrDeleteObject:ref<ViewComment>(), // 新加的对象或者是需要删除的对象
    headObject:ref<ViewComment>(), // 新加的对象或者是需要删除的对象
    addOrDeleteNumber:ref(0), // 添加或删除评论的信号量
    active:ref<number>(0),// 主页tab页面
    viewVideoId:ref<number>(0), //  播放页面需要播放的视频




}
export const {shareShow}=DataStore
export const {commentSectionReplyShow}=DataStore
export const {commentRoute}=DataStore
export const {emojiShow}=DataStore
export const {emoji}=DataStore
export const {inputCommentTopShow}=DataStore
export const {typeShow}=DataStore
export const {replyObject}=DataStore
export const {addOrDeleteObject}=DataStore
export const {addOrDeleteNumber}=DataStore
export const {headObject}=DataStore
export const {active}=DataStore
export const {viewVideoId}=DataStore