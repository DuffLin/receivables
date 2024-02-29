<template>
  <view class="container mq-login-wrap">
    <view class="logo">
      <image src="../../static/logo.png" mode="widthFix"/>
    </view>
    <view class="f-fxSb mq-login-btn">
      <button class="button" hover-class="none" @tap="login('tel')">手机登录</button>
      <button class="button" hover-class="none" @tap="login('empower')">授权登录</button>
    </view>
  </view>
  <view class="mq-footer">
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
  </view>
</template>

<script setup lang="ts">

// import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const agreement = ref(0);
// const range = ref([
//       {
// 				text: '您已同意',
// 				value: 0
// 			}
// ])


const login = (type: string) => {
  // if (!agreement.value) {
	// 		uni.showToast({
	// 			title:'请勾选政策协议',
	// 			icon: 'none',
	// 			duration: 3000
	// 		})
	// 		return
	// 	}
  if(type === 'tel') {
    
  } else {

  }
}


// const jumpPage = (url:string) => {
//   uni.navigateTo({
//     url
//   })
// }
</script>

<style scoped lang="scss">
.mq-login-wrap{
  padding: 8% 60rpx 0;
}
.logo{
  image{
    width: 100%;
  }
}
.mq-login-btn{
  padding: 18% 0 0;
  button{
    width: 280rpx;
  }
}

// .mq-agreement-check{
//   radio{
//     transform:scale(0.7);
//     top: -1rpx;
//     position: relative;
    
//   }
// }
.mq-footer{
  position: absolute;
  bottom: 8%;
  width: 100%;
}
</style>