<template>
  <view class="navbar">
    <!--  标题 -->
    <view class="title">{{ title }}</view>
  </view>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { // 标题
    type: String,
    default: '22'
  } 
})


</script>

<style lang="scss">
.navbar{
  background: #ffe6c6;
}

</style>
