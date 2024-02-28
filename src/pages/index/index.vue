<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title" @tap="tapGet">{{title}}</text>
      <text class="title" @tap="tapGet">会员信息: {{ memberStore.profile }}</text>
      <button @tap="getData">
        确定
      </button>
      <button @tap="memberStore.clearProfile()">
        清理数据
      </button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useMemberStore } from '@/stores'
import { request } from '@/utils/http'
import { ref } from 'vue'


const memberStore = useMemberStore();
const title = ref('Hello_123')
const tapGet = function () {
  console.log(12345)
  memberStore.setProfile({
    nickName: '河马',
    token: '123456'
  })
}
const getData = async () => {
  console.log(8558)
  const res = await request({
    method:'GET',
    url:'/home/banner',
    header: {}
  })
  console.log(res, '请求成功')
  // uni.request({
  //   method:'GET',
  //   url:'/home/banner',
  //   header: {}
  // })
}
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
