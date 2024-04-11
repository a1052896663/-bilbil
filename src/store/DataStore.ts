import {ref} from "vue";
import {ViewComment} from "../util/type";

/**
 * 状态数据管理--跨页面  解决 pinia 失效的问题
 */

const DataStore={
    shareShow:ref(false) , // 分享面板是否展示
    commentSectionReplyShow:ref(false)  ,// 评论详情控件
    commentRoute:ref<ViewComment>(), // 需要展示的评论-- 暂时舍弃


}
export const {shareShow}=DataStore
export const {commentSectionReplyShow}=DataStore
export const {commentRoute}=DataStore