import YskList from './YskList.vue'

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        YskList: typeof YskList
    }
}