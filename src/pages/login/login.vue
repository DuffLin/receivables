<template>
  <view class="container mq-login-wrap">
    <view class="logo">
      <image src="../../static/logo.png" mode="widthFix"/>
    </view>
    <view class="f-fxSb mq-login-btn">
      <button size="default" class="button">手机登录</button>
      <button class="button">授权登录</button>
    </view>
    <view class="mq-footer">
      <view class="text_box">
        <text class="text">您已同意</text>
        <text @click="jumpPage('/pagesMine/userServer/index')">《用户服务协议》</text> 
        <text @click="jumpPage('/pagesMine/privacyPolicy/index')">《隐私权政策》</text>
        <text @click="jumpPage('/pagesMine/payment/index')">《支付协议》</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">

import { onLoad } from '@dcloudio/uni-app'
const jumpPage = (url:string) => {
  uni.navigateTo({
    url
  })
}
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
.text_box{
  font-size: 24rpx;
  color: #169bd5;
  .text{
    color: #333;
  }
}
.mq-footer{
  position: absolute;
  bottom: 8%;
  width: 100%;
}
</style>