import YskList from './YskList.vue'
import YskNavbar from './YskNavbar.vue'
declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        YskList: typeof YskList,
        YskNavbar: typeof YskNavbar

    }
    
    
}