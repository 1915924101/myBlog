<template>
  <div id="app">
    <router-view />
    <!-- <live2d/> -->
  </div>
</template>

<script>
// import Live2d from '@/components/black/index'
export default {
  name: 'App',
  // components: {
  //     Live2d
  //   },
}
</script>
<style>
html {
    scroll-behavior: smooth;
}
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}
/* 轨道 */
::-webkit-scrollbar-track {
  background-color: #F5F5F5;
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  background-color: rgb(49, 120, 198);
}
html,body{
  font-family: -apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial!important;
}
</style>