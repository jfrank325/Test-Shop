// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@unocss/nuxt',
        '@sidebase/nuxt-session',
        // 'nuxt-security',
        'nuxt-typed-router',
        // 'nuxt-swiper',
        '@vueuse/nuxt',
        // '@vueuse/components',
        'nuxt-icon',
        '@nuxt/image-edge'
    ],
    image: {
        format: ['webp', 'png', 'jpg', 'jpeg'],
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
        },
    },
    devtools: {
        enabled: false
    },
})
