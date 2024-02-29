<template>
    <view class="f-empower">
        <uni-data-checkbox multiple
            selectedColor="#333" 
            v-model="agreement" 
            :localdata="range">
            撒的非
        </uni-data-checkbox>
        <!-- <text class="text">您已同意</text> -->
        <text @click="jumpPage('/pagesMine/userServer/index')">《用户服务协议》</text> 
        <text @click="jumpPage('/pagesMine/privacyPolicy/index')">《隐私权政策》</text>
        <text @click="jumpPage('/pagesMine/payment/index')">《支付协议》</text> 
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const agreement = ref(0);
const range = ref([
    {
        text: '您已同意',
        value: 0
    }
])
const jumpPage = (url:string) => {
    uni.navigateTo({
        url
    })
}
</script>
  
<style scoped lang="scss">

</style>