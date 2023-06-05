<script setup lang='ts'>
import '@unocss/reset/tailwind.css';
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: 'YT Industries',
  titleTemplate: title => title !== 'YT Industries' ? `${title} · YT Industries` : title,
  meta: [
    { name: 'description', content: 'The online store for award-winning and affordable MTBs ✨' },
    { property: 'og:image', content: 'https://cdn-prod.yt-industries.com/media/image/6e/2e/3a/yt_logo_industries.png' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
})
// const scrollCheck = ref()
// const { arrivedState, y } = useScroll(scrollCheck);
// const { top } = toRefs(arrivedState);
// const isTop = ref(true)
// console.log({arrivedState});
// console.log({y});
// console.log(scrollCheck.value);
// setTimeout(() => {
//   console.log(scrollCheck.value);
// },3000)

// if (process.client) {
//  provide('isTop', top);
// } top ? isTop.value = true : isTop.value = false;


</script>

<template>
  <div class="overflow-scroll">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

  </div>
</template>

<style scoped></style>