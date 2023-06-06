<script setup lang='ts'>
const { mobile, tablet, desktop } = screenSize;
const vimeoID = ref('827637675')
const videoHeight = ref('175vw')
const videoSrc = ref('/homeHeaderVideos/HomeHeader_28_DirtLove_Core1_Mobile.webm')
onMounted(() => {
  if (desktop) {
    vimeoID.value = '827635994'
    videoHeight.value = '47.5586vw'
    videoSrc.value = '/homeHeaderVideos/HomeHeader_28_DirtLove_Core1.webm'
  } else if (tablet) {
    vimeoID.value = '827637675'
    videoSrc.value = '/homeHeaderVideos/HomeHeader_28_DirtLove_Core1_iPad.webm'
  }
})
</script>

<template>
  <div>
    <iframe :src="`https://player.vimeo.com/video/${vimeoID}?title=0&amp;byline=0&amp;background=1&amp;allow=autoplay&amp;autoplay=1&amp;muted=1&amp;background=1&amp;portrait=0&amp;dnt=1&amp;quality=720p&amp;player_id=iframe6826?autoplay=1&amp;autopause=0&amp;muted=1&amp;background=1&amp;playsinline=1&amp;dnt=1`"
            width="100%"
            height="100%"
            :style="`opacity: 1; visibility: inherit; width: 100%; height: ${videoHeight}; display: block; top: -49.3204%; left: 0px;`"
            id="ytind-home-video"
            data-ready="false"
            lazy="true"></iframe>
    <!-- <video autoplay
           muted
           loop
           class="w-screen">
      <source :src="videoSrc"
              type="video/webm" />
    </video> -->
  </div>
</template>

<style scoped></style>