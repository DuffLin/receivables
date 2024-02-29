<script setup lang="ts">
  import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
  onLaunch(() => {
    setTimeout( () => {
      // if (!uni.getStorageSync('token')) {
      //   uni.reLaunch({
      //     url: '/pages/login/login'
      //   })
      // }
    })
  });
  onShow(() => {
    console.log("App Show");
  });
  onHide(() => {
    console.log("App Hide");
  });
</script>
<style lang="scss">
	/*每个页面公共css */
	@import '@/styles/index.scss';
	@import '@/styles/common.scss';
</style>
