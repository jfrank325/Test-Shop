<script setup lang='ts'>
const video = ref()
const { playing, currentTime, duration, volume } = useMediaControls(video, { 
  src: 'https://i.vimeocdn.com/video/1572526115-c8dd196081221b9be482f051434a9fa0e4ba31fe72e7f48a706242578f3e62af-d_1920x1080',
})
</script>

<template>
<div>
    <video ref="video" />
</div>
</template>

<style scoped>

</style>