import {ref} from "vue";

/**
 * 状态数据管理--跨页面  解决 pinia 失效的问题
 */

const DataStore={
    shareShow:ref(false)  // 分享面板是否展示
}
export const {shareShow}=DataStore